import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductForm from './../components/product-form';


class ProductFormContainer extends Component {

    onSubmit = ( values, dispatch ) => console.log( 'onSubmit' );


    render() {
        const { actionType } = this.props;
        console.log( this.props, '====s' );
        return <ProductForm onSubmit={this.onSubmit}
                            {...this.props}
                            form={`${actionType}-product-form`}/>;
    }
}


ProductFormContainer.propTypes = {
    actionType: PropTypes.oneOf( [ 'add', 'edit' ] ).isRequired,

};

export default ProductFormContainer;