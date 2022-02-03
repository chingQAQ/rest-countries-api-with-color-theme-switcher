import React from 'react';
import PropTypes from 'prop-types';
import { upperCaseChar, capitalStr } from '@/utils';

export function Loading({ name }) {

    const why = capitalStr(name, upperCaseChar);

    return (
        <div className="pt-10">
            <p className="text-sm">{ why } Loading...</p>
        </div>
    );
}

Loading.propTypes = {
    name: PropTypes.string.isRequired
};

export default Loading;