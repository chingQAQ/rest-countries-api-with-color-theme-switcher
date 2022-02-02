import React, { useState, useCallback } from 'react';
import SearchBar from '@/components/SearchBar';
import CardsList from '@/components/CardsList';
import Loading from '@/components/Loading';
import axios from 'axios';
import { useQuery } from 'react-query';

const BASE_URL = 'https://restcountries.com/v2';

let defaultFields = [
    'flags',
    'name',
    'population',
    'region',
    'capital'
];

const fetchCountiesData = async ({ queryKey }) => {

    const [, service, fields] = queryKey;

    let endpoint = `${BASE_URL}/${service}`;

    let condition = null;

    if (Array.isArray(fields)) {
        condition = '?fields=' + fields.join(',');
    } else {
        condition = `/${fields}`;
    }

    endpoint = condition ? `${endpoint}${condition}` : endpoint;

    try {
        const api = new URL(endpoint);

        const res = await axios.get(api);

        return res.data;
    } catch (err) {
        console.log(err);

        return [];
    }
};

function Home() {
    const [service, setService] = useState('all');

    const [fields, setFields] = useState(defaultFields);

    const { isLoading, isSuccess, isError, error, data } = useQuery(
        ['countriesData', service, fields],
        fetchCountiesData,
        { staleTime: 5 * 60 * 1000 }
    );

    return ( 
        <>
            <SearchBar setService={setService} setFields={setFields}/>
            { isLoading && <Loading name="countries data" /> }
            { isError && <div> Error: {error.message} </div> }
            { isSuccess && <CardsList countries={data}></CardsList> }
        </>
    );
}

export default Home;
