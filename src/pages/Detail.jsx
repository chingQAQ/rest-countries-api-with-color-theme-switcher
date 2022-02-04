import React, { useState, useEffect } from 'react';
import { useStore } from '@/store';
import { useParams } from 'react-router-dom';
import { List, BackButton } from '@/components';
import { Link } from 'react-router-dom';

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
            <BackButton>
                <Link to="/">Back</Link>
            </BackButton>
            
            { country && <List {...country}/> }
        </>
    );
}

export default Detail;
