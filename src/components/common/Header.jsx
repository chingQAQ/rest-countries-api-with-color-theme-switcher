import React from 'react';
import clsx from 'clsx';
import { Icon } from '.';

function ThemeToggle () {

    const changeTheme = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button
            className="text-very-dark-blue dark:text-white"
            onClick={changeTheme}
        >
            <div className="w-6 mr-2 inline-block align-bottom">
                <Icon.Moon />
            </div>
            Dark Mode
        </button>
    );
}

export function Header () {
    return ( 
        <header className={clsx(
            'container sm:max-w-full mx-auto py-4',
            'flex items-center justify-between box-border',
            'bg-white dark:bg-dark-blue shadow-md'
        )}>
            <h1 className="text-very-dark-blue dark:text-white text-3xl font-medium">Where in the world?</h1>
            <ThemeToggle/>
        </header>
    );
}

export default Header;
