import React, { isValidElement, cloneElement } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export function Card({ className, children }) {

    if (!isValidElement(children)) return <>{children}</>;

    return cloneElement(children, {
        ...children.props,
        className: clsx(
            'rounded overflow-hidden bg-white dark:bg-dark-blue',
            'shadow-[0_0_4px_0_rgba(0,0,0,0.2)]',
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
