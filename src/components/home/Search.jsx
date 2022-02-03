import React from 'react';
import { Icon } from '@/components';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export function Search ({ className, onChange }) {
    return (
        <div className={clsx(className)}>
            <label htmlFor="userSearchCountry" className="flex items-center text-sm">
                <div className="grow-0 shrink-0 basis-6 mr-4">
                    <Icon.Search />
                </div>
                <input
                    type="text"
                    id="userSearchCountry"
                    name="userSearchCountry"
                    className={clsx(
                        'flex-auto min-w-0',
                        'bg-transparent text-slate-400',
                        'rounded-none'
                    )}
                    placeholder='Search for a country...'
                    onChange={({target}) => onChange(target.value)}
                />
            </label>
        </div>
    );
}

Search.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func
};
