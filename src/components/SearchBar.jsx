import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/Icon';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import { upperCaseChar, capitalStr } from '@/utils';

const REGION = ['all', 'africa', 'americas', 'asia', 'europe', 'oceania'];

const PLACEHOLDER = 'Filter by Region...';

const getCurrentRegion = (currentRegion) => {

    let regionName = PLACEHOLDER;

    if (currentRegion !== 'all') {
        regionName = currentRegion;
    }

    return capitalStr(regionName, upperCaseChar);
};

function DropDownItem({
    region,
    children,
    onDropDownItemClick
}) {

    function dropDownStateChange() {
        onDropDownItemClick(region);
    }

    return (
        <div
            className="text-sm hover:text-slate-100"
            onClick={region && dropDownStateChange}
        >
            { capitalStr(children, upperCaseChar) }
        </div>
    );
}

function DropDown({ currentRegion, setRegion }) {
    const [close, setClose] = useState(true);

    const dropDownItemClickHandler = useCallback((e) => setRegion(e), []);

    const items = useRef(null);

    if (!items.current) {
        items.current = REGION.map((i, idx) => (
            <DropDownItem
                key={nanoid(idx)}
                region={i}
                onDropDownItemClick={dropDownItemClickHandler}
            >
                {i}
            </DropDownItem>
        ));
    }

    return(
        <>
            <div
                className={clsx(
                    'flex items-center justify-start relative',
                    'w-[300px] lg:w-3/12 p-4 sm:mt-4 lg:mt-0 box-border rounded',
                    'text-slate-400 bg-dark-blue',
                    'cursor-pointer'
                )}
                onClick={() => setClose(p => !p)}
            >
                <DropDownItem>{getCurrentRegion(currentRegion)}</DropDownItem>
                <div
                    className={clsx(
                        'absolute top-full left-0',
                        'w-full mt-2 p-4 space-y-4 rounded box-border',
                        'bg-dark-blue',
                        close && 'hidden'
                    )}>
                    { items.current }
                </div>
            </div>
        </>
    );
}

function SearchBar({ setService, setFields }) {

    const [region, setRegion] = useState('all');

    useEffect(() => {

        if (region !== 'all') {
            setService('region');
            setFields(region);
        }

    }, [region]);

    return (
        <div className="flex justify-between flex-wrap">
            <div className="w-full lg:w-5/12 px-8 py-4 bg-dark-blue box-border rounded">
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
                    />
                </label>
            </div>
            <DropDown currentRegion={region} setRegion={setRegion}/>
        </div>
    );
}

DropDown.propTypes = {
    currentRegion: PropTypes.string,
    setRegion: PropTypes.func
};

DropDownItem.propTypes = {
    region: PropTypes.string,
    children: PropTypes.string,
    onDropDownItemClick: PropTypes.func
};

SearchBar.propTypes = {
    setService: PropTypes.func,
    setFields: PropTypes.func
};

export default SearchBar;