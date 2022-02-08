import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@/components';

export function Button({ children }) {
    return (
        <Card className="text-center">
            { children }
        </Card>
    );
}

Button.propTypes = {
    children: PropTypes.element
};

export default Button;
