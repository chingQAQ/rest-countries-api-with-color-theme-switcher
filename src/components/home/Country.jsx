import React, { } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Data } from '@/components';
import { Format } from '@/utils';
import clsx from 'clsx';

export function Country ({
    flags,
    name,
    population,
    region,
    capital,
    className
}) {
    return (
        <li className={clsx(className)}>
            <div className="w-full aspect-[5/3] overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={flags.png}
                    alt={`${name}'s flag`}
                    loading="lazy"
                />
            </div>
            <div className="p-4 pb-8 space-y-1 box-border">
                <p className="text-white font-bold text-sm">{name}</p>
                {
                    Object.entries({
                        Population: Format.number(population),
                        Region: region,
                        Capital: capital ?? 'unknown'
                    }).map(([title, value], idx) => (
                        <Data key={nanoid(idx)} title={title} value={value}></Data>
                    ))
                }
            </div>
        </li>
    );
}

Country.propTypes = {
    flags: PropTypes.object,
    name: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.string,
    className: PropTypes.string
};

export default Country;
