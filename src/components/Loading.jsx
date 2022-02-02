import React from 'react';
import PropTypes from 'prop-types';
import { upperCaseChar, capitalStr } from '@/utils';

function Loading({ name }) {

    const reason = capitalStr(name, upperCaseChar);

    return (
        <div className="pt-10">
            <p className="text-sm text-slate-100">{ reason } Loading...</p>
        </div>
    );
}

Loading.propTypes = {
    name: PropTypes.string.isRequired
};

export default Loading;