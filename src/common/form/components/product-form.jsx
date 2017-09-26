import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import InputField from './../components/input-field';
import DropInputField from './../components/drop-input-field';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';


const styles = theme => ({
    container: {
        display : 'column',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft : theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop  : 16,
        width      : '44%',
    },
    btn      : {
        marginTop : '15px',
        background: '#FFE0B2'
    },
    title    : {
        width    : '100%',
        color    : '#FB8C00',
        textAlign: 'center',
        marginTop: 16,
    }

});

const ProductForm = ( { handleSubmit, submitting, btnName, classes, submitSucceeded } ) => {

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

                rows={2}
                name="price"
                type="number"
                component={InputField}
                label="Price"
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
                name="description"
                component={InputField}
                label="Description"
                multiline={true}
                fullWidth={true}
                rows={2}
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

            {submitSucceeded &&
            <Typography className={classes.title} type="body2" gutterBottom>
                {`Product has been ${btnName === 'create' ? 'created' : 'updated'} successfully`}
            </Typography>
            }

        </form>
    );
};

const validate = values => {

    const errors = {};

    if (!values.get( 'title' )) {
        errors.title = 'Title is required';
    }

    if (!values.get( 'sku' )) {
        errors.sku = 'SKU is required';
    }
    if (!values.get( 'price' ) && isNaN( values.get( 'price' ) )) {
        errors.price = 'Must be a number';
    }

    if (!values.get( 'price' )) {
        errors.price = 'Price is required';
    }


    return errors;
};


const formWithStyles = withStyles( styles )( ProductForm );

export default reduxForm( {
    validate
} )( formWithStyles );