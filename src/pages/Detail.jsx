import React, { useState, useEffect, useCallback } from 'react';
import { useStore } from '@/store';
import { useParams } from 'react-router-dom';
import { List, Icon, Button, Card, Tag } from '@/components';
import { Link } from 'react-router-dom';
import { Format } from '@/utils';
import { nanoid } from 'nanoid';

const getCountryBorder = 
    allData =>
        country =>
            !country
                ? []
                : allData
                    .filter(({ name, subregion }) => subregion === country.subregion && name !== country.name )
                    .map(({ name }) => name);

export function Detail() {

    const { name } = useParams();

    const { getCountryByName, data } = useStore();

    const [ country, setCountry ] = useState([]);

    const border = useCallback(getCountryBorder(data), [data, name]);

    useEffect(() => {
        (async () => {

            const response = await getCountryByName(name);

            if (response) setCountry(response);

            return;
        })();

        return;
    }, [name]);

    return (
        <>
            <Button>
                <Link to="/" className="py-2 px-8">
                    <span className="w-4 inline-block align-middle mr-2">
                        <Icon.ArrowLeft />
                    </span>
                    Back
                </Link>
            </Button>
            { country &&
                <div className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="w-full aspect-[5/3]">
                            <img
                                className="w-full h-full object-cover"
                                src={country.flags?.png}
                                alt={`${name}'s flag`}
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl mb-8">{name}</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-base">
                                <div className="space-y-1">
                                    <List items={{
                                        'Native Name': country.nativeName,
                                        Population: Format.number(country.population),
                                        Region: country.region,
                                        Subregion: country.subregion,
                                        Capital: country.capital ?? 'unknown'
                                    }}></List>
                                </div>
                                <div className="space-y-1">
                                    <List items={{
                                        'Top Level Domain': Format.array(country.topLevelDomain),
                                        Languages: Format.object(country.languages, 'name'),
                                        Currencies: Format.object(country.currencies, 'code')
                                    }}></List>
                                </div>
                            </div>
                            <div className="flex flex-col md:items-start lg:flex-row lg:items-center gap-4 mt-8">
                                <span className="shrink-0">Border Countries:</span>
                                <div className="grid grid-cols-3 gap-4">
                                    {
                                        border(country).map((name, idx) => (
                                            <Card key={nanoid(idx)}>
                                                <Tag
                                                    className="py-1 px-5"
                                                    href={`/detail/${encodeURI(name)}`}
                                                >
                                                    { name }
                                                </Tag>
                                            </Card>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Detail;
