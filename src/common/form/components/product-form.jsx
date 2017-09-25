import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import InputField from './../components/input-field';


const ProductForm = ( { handleSubmit, submitting } ) => (
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
            label="Title"
        />

        <Field
            name="sku"
            type="text"
            component={InputField}
            label="Title"
        />

        <Field
            name="price"
            type="text"
            component={InputField}
            label="Title"
        />

        <button type="submit" disabled={submitting}>Create</button>
    </form>
);

export default reduxForm( {} )( ProductForm );