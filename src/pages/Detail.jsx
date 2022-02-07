import React, { useState, useEffect, useCallback } from 'react';
import { useStore } from '@/store';
import { useParams } from 'react-router-dom';
import { List, Icon } from '@/components';
import { Link } from 'react-router-dom';
import { Format } from '@/utils';

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

    const border = useCallback(getCountryBorder(data), [data]);

    useEffect(() => {
        (async () => {

            const response = await getCountryByName(name);

            if (response) setCountry(response);

            return;
        })();

        return;
    }, []);

    return (
        <>
            <Link to="/" className="btn inline-block rounded shadow-lg py-2 px-8">
                <div className="w-4 inline-block align-middle mr-2">
                    <Icon.ArrowLeft />
                </div>
                Back
            </Link>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-base">
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
                            <div className="space-y-1 mt-8">
                                <List items={{
                                    'Border Countries': Format.array(border(country))
                                }}></List>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Detail;
