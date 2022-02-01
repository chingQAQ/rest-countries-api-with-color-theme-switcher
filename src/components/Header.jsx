import React from 'react';

function Header () {
    return ( 
        <header className="container sm:max-w-full mx-auto py-4 flex items-center justify-between box-border bg-dark-blue">
            <h1 className="text-white text-3xl font-medium">Where in the world?</h1>
            <p className="text-white">Dark Mode</p>
        </header>
    );
}

export default Header;
