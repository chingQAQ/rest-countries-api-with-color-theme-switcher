import React from 'react';
import PropTypes from 'prop-types';
import { Data } from '@/components';
import { nanoid } from 'nanoid';

export function List({
    items,
}) {
    return (
        <>
            {
                Object
                    .entries({...items})
                    .map(([title, value], idx) => (
                        <Data key={nanoid(idx)} title={title} value={value} />
                ))
            }
        </>
    );
}

List.propTypes = {
    items: PropTypes.object
};

export default List;
