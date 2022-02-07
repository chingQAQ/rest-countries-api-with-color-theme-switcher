import React from 'react';
import PropTypes from 'prop-types';

export function Data ({ title, value }) {
    return (
        <div className="text-dark-blue dark:text-slate-300">
            <span>{title} : </span>
            <span className="text-dark-blue/[0.7] dark:text-slate-400">
                {value}
            </span>
        </div>
    );
}

Data.propTypes = {
    title: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
    ])
};

export default Data;
