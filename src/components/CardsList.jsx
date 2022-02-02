import React, {} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const CardsListItem = ({
    flags,
    name,
    population,
    region,
    capital
}) => {
    return (
        <li className="rounded overflow-hidden">
            <div className="w-full aspect-[5/3] overflow-hidden">
                <img className="w-full h-full object-cover" src={flags.png} loading="lazy" />
            </div>
            <div className="p-4 pb-8 space-y-1 box-border bg-dark-blue">
                <p className="text-white font-bold text-sm">{name}</p>
                <p className="text-white text-sx">
                    Population: <span className="text-slate-400">{population}</span>
                </p>
                <p className="text-white text-sx">
                    Region: <span className="text-slate-400">{region}</span>
                </p>
                <p className="text-white text-sx">
                    Capital: <span className="text-slate-400">{capital ?? 'unknown'}</span>
                </p>
            </div>
        </li>
    );
};

function CardsList({ countries }) {
    return (
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
            {countries.map((country, idx) => <CardsListItem key={nanoid(idx)} {...country}/> )}
        </ul>
    );
}

CardsList.propTypes = {
    countries: PropTypes.array
};

CardsListItem.propTypes = {
    flags: PropTypes.object,
    name: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.string
};

export default CardsList;
