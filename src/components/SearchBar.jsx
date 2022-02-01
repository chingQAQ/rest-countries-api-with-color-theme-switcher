import React from 'react';
import Icon from '@/components/Icon';
import clsx from 'clsx';

function Search() {
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
            <div className="w-[300px] lg:w-3/12 p-4 sm:mt-4 lg:mt-0 text-slate-200 bg-dark-blue box-border rounded flex items-center justify-start relative">
                <div className="text-sm">Filter by Region</div>
                <div className="absolute">

                </div>
            </div>
        </div>
    );
}

export default Search;