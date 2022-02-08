import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@/components';
import { Link } from 'react-router-dom';

export function Tag({ className, children, href }) {
    return (
        <Button>
            <Link className={className} to={href || '/'}>{ children }</Link>
        </Button>
    );
}

Tag.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string
};

export default Tag;
