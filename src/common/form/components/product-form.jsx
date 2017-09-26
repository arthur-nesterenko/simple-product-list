import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import InputField from './../components/input-field';
import DropInputField from './../components/drop-input-field';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    container: {
        display : 'column',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft : theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop  : '15px',
        width      : 350,
    },
    btn      : {
        marginTop : '15px',
        background: '#FFE0B2'

    }
});

const ProductForm = ( { handleSubmit, submitting, btnName, classes } ) => {

    return (
        <form onSubmit={handleSubmit} className={classes.container}>

            <Field
                name="title"
                type="text"
                component={InputField}
                label="Title"
                className={classes.textField}
            />

            <Field
                name="description"
                component={InputField}
                label="Description"
                multiLine={true}
                rows={2}
                className={classes.textField}
            />

            <Field
                name="sku"
                type="text"
                component={InputField}
                label="SKU"
                className={classes.textField}
            />

            <Field
                multiLine
                rows={2}
                name="price"
                type="text"
                component={InputField}
                label="Price"
                className={classes.textField}
            />

            <Field name="preview" component={DropInputField}/>


            <Field name="id"
                   type="hidden"
                   component='input'
                   className={classes.textField}
            />


            <Button className={classes.btn}
                    color='primary'
                    type="submit"
                    disabled={submitting}>{btnName}</Button>

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


const formWithStyles = withStyles( styles )( ProductForm );

export default reduxForm( {
    validate
} )( formWithStyles );