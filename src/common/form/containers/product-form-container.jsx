import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductForm from './../components/product-form';
import handleSubmitForm from './../../../utils/handle-submit-form';
import { actions } from './../../../services/product/single';

class ProductFormContainer extends Component {

    onSubmit = ( values, dispatch ) => {
        const { actionType } = this.props;
        const action = actions[ actionType === 'add' ? 'create' : 'update' ];
        return handleSubmitForm( values, dispatch, action );
    };


    render() {
        const { actionType } = this.props;
        return <ProductForm onSubmit={this.onSubmit}
                            {...this.props}
                            form={`${actionType}-product-form`}/>;
    }
}


ProductFormContainer.propTypes = {
    actionType: PropTypes.oneOf( [ 'add', 'edit' ] ).isRequired,

};

export default ProductFormContainer;