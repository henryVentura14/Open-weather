import React from 'react';
import Proptypes from 'prop-types'

const Error = ({message}) => {
    return (
        <p className="error red darken-3">{message}</p>
    );
};
Error.protTypes={
    message:Proptypes.string.isRequired
}
export default Error;