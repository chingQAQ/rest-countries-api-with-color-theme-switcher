import React, { isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export function Button({ className, children }) {

    if (isValidElement(children)) return <>{ children }</>;

    return (
        <button className={clsx('btn', className)}>
            { children }
        </button>
    );
}

export function BackButton ({className, to, children = 'Back'}) {
    return cloneElement(<Link />,
        { className: clsx('btn', className), to }
    , children);
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    className: PropTypes.string,
    tag: PropTypes.string
};

BackButton.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    children: PropTypes.element
};

export default Button;
