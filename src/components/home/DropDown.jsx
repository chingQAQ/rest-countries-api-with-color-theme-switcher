import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card } from '@/components';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { upperCaseChar, capitalStr } from '@/utils';

const PLACEHOLDER = 'Filter by Region...';

const getCurrentRegion = (currentRegion) => {

    let regionName = PLACEHOLDER;

    if (currentRegion.length !== 0) {
        regionName = currentRegion;
    }

    return capitalStr(regionName, upperCaseChar);
};

export function DropDownOption({
    className,
    options,
    onDropDownOptionClick
}) {
    return (
        <div className={className}>
            {
                options.map((region, idx) => (
                    <div
                        key={nanoid(idx)}
                        className="text-sm dark:hover:text-slate-100"
                        onClick={() => onDropDownOptionClick(region)}
                    >
                        {capitalStr(region, upperCaseChar)}
                    </div>
                ))
            }
        </div>
    );
}

export function DropDown({ current, setFilter, options }) {
    const [close, setClose] = useState(true);

    const dropDownOptionClickHandler = useCallback((region) => setFilter(() => {
        return region === 'all' ? '' : region;
    }), []);

    return (
        <div
            className={clsx(
                'flex items-center justify-start relative',
                'w-[300px] lg:w-3/12 p-4 sm:mt-4 lg:mt-0 box-border rounded',
                'text-dark-blue dark:text-slate-400',
                'bg-white dark:bg-dark-blue shadow-md',
                'cursor-pointer'
            )}
            onClick={() => setClose(p => !p)}
        >
            <div className="text-sm dark:hover:text-slate-100">{getCurrentRegion(current)}</div>
            <Card>
                <DropDownOption
                    className={clsx(
                        'absolute top-full left-0',
                        'w-full mt-2 p-4 space-y-4 box-border',
                        close && 'hidden'
                    )}
                    options={options}
                    onDropDownOptionClick={dropDownOptionClickHandler}
                />
            </Card>
        </div>
    );
}

DropDown.propTypes = {
    current: PropTypes.string,
    setFilter: PropTypes.func,
    options: PropTypes.array
};

DropDownOption.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    onDropDownOptionClick: PropTypes.func
};

export default DropDown;
