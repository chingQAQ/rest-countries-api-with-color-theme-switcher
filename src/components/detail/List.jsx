import React from 'react';
import PropTypes from 'prop-types';
import { Data } from '@/components';
import { nanoid } from 'nanoid';
import { Format } from '@/utils';

export function List({
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages
}) {
    return (
        <>
            <img
                // className="w-full h-full object-cover"
                src={flags?.png}
                alt={`${name}'s flag`}
                loading="lazy"
            />
            <h2>{name}</h2>
            {
                Object.entries({
                    'Native Name': nativeName,
                    Population: Format.number(population),
                    Region: region,
                    Capital: capital ?? 'unknown',
                    Subregion: subregion,
                    'Top Level Domain': Format.array(topLevelDomain),
                    Languages: Format.object(languages, 'name'),
                    Currencies: Format.object(currencies, 'code')
                }).map(([title, value], idx) => (
                    <Data key={nanoid(idx)} title={title} value={value} />
                ))
            }
        </>
    );
}

List.propTypes = {
    flags: PropTypes.object,
    name: PropTypes.string,
    nativeName: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.string,
    subregion: PropTypes.string,
    topLevelDomain: PropTypes.array,
    currencies: PropTypes.array,
    languages: PropTypes.array
};

export default List;
