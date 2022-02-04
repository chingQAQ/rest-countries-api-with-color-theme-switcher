import React, { useState, useEffect } from 'react';
import { useStore } from '@/store';
import { useParams } from 'react-router-dom';
import { List, BackButton } from '@/components';

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
            <BackButton to="/"/>
            { country && <List {...country}/> }
        </>
    );
}

export default Detail;
