import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import InputField from './../components/input-field';


const ProductForm = ( { handleSubmit, submitting, btnName } ) => {

    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="title"
                type="text"
                component={InputField}
                label="Title"
            />

            <Field
                name="description"
                type="text"
                component={InputField}
                label="Description"
            />

            <Field
                name="sku"
                type="text"
                component={InputField}
                label="SKU"
            />

            <Field
                name="price"
                type="text"
                component={InputField}
                label="Price"
            />
            <Field name="id"
                   type="hidden"
                   component='input'
            />

            <button type="submit" disabled={submitting}>{btnName}</button>
        </form>
    );
};

const validate = values => {

    const errors = {};

    if (!values.get( 'title' )) {
        errors.title = 'Required';
    }

    if (!values.get( 'sku' )) {
        errors.sku = 'Required';
    }

    if (!values.get( 'price' )) {
        errors.price = 'Required';
    }

    return errors;
};


export default reduxForm( {
    validate
} )( ProductForm );