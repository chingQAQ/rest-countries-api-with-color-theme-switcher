import React, { isValidElement, cloneElement } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export function Card({ className, children }) {

    if (!isValidElement) return <>{children}</>;

    return cloneElement(children, {
        ...children.props,
        className: clsx(
            'rounded overflow-hidden bg-white dark:bg-dark-blue shadow-md',
            className,
            children.props.className
        )
    });
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.element
};

export default Card;
