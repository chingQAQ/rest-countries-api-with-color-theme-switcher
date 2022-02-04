import React, { useState, useEffect } from 'react';
import { useStore } from '@/store';
import { useParams } from 'react-router-dom';
import { List } from '@/components';

export function Detail() {

    const { name } = useParams();

    const { getCountryByName } = useStore();

    const [ country, setCountry ] = useState([]);

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
            { country && <List {...country}/> }
        </>
    );
}

export default Detail;
