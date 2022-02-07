import React, { useState, useMemo } from 'react';
import { useStore } from '@/store';
import { Card, Country, Loading, Search, DropDown } from '@/components';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const REGION = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export function Home() {

    const [search, setSearch] = useState('');

    const [filter, setFilter] = useState('');

    const { getDataState, data } = useStore();

    const { isLoading, isError } = getDataState();

    const countries = useMemo(() => 
        data
            .filter(({ name }) => name.match(new RegExp(`^${search}`, 'i')))
            .filter(({ region }) => region.match(new RegExp(`^${filter}`, 'i')))
        ,
        [filter, search, data]
    );

    return (
        <>
            <div className="flex justify-between flex-wrap">
                <Card>
                    <Search
                        className="w-full lg:w-5/12 px-8 py-4 box-border"
                        onChange={setSearch}
                    ></Search>
                </Card>
                <DropDown current={filter} setFilter={setFilter} options={REGION} />
            </div>
            { isLoading && <Loading name="countries data" /> }
            { isError && <div> Error: { data } </div> }
            {
                <div className="md:max-h-[65vh] md:overflow-auto mt-10">
                    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-1 pb-10">
                        {
                            countries.map((country, idx) => (
                                <Link key={nanoid(idx)} to={`/detail/${encodeURI(country.name)}`}>
                                    <Card>
                                        <Country {...country} />
                                    </Card>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            }
        </>
    );
}

export default Home;
