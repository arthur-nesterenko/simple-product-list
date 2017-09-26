import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const InputField = ( { input, label, type, meta: { touched, error }, ...rest } ) => {


    const hasError = touched && !!error;

    return (
        <TextField
            error={hasError}
            label={label}
            type={type}
            {...input}
            {...rest}
        />
    );
};


export default InputField;