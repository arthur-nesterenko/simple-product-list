import React from 'react';
import TextField from 'material-ui/TextField';

const InputField = ( { input, label, type, meta: { touched, error }, ...rest } ) => {
    const hasError = touched && !!error;
    return (

        <TextField
            error={hasError}
            label={hasError ? error : label}
            type={type}
            {...input}
            {...rest}
        />

    );
};


export default InputField;