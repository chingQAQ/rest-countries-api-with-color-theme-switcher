import React, { isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export function Button({ className, children }) {

    if (isValidElement(children)) return <>{ children }</>;

    return (
        <button className={clsx('btn', className)}>
            { children }
        </button>
    );
}

export function BackButton ({className, children}) {
    return cloneElement(children,
        { 
            className: clsx('btn', className, children.props.className,),
            ...children.props
        }
    );
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
    children: PropTypes.element
};

export default Button;
