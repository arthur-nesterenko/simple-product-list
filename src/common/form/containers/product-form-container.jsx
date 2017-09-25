import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ProductForm from './../components/product-form';
import handleSubmitForm from './../../../utils/handle-submit-form';
import { actions } from './../../../services/product/single';

class ProductFormContainer extends Component {

    componentWillMount() {
        const { productId, actionType, fetchProduct } = this.props;

        if (actionType === 'update') {
            fetchProduct( productId );
        }

    }

    onSubmit = ( values, dispatch ) => {
        const { actionType } = this.props;
        const action = actions[ actionType ];
        console.log( action );
        return handleSubmitForm( values, dispatch, action );
    };


    render() {
        const { actionType, content } = this.props;

        console.log( actionType );

//    const isFetching = actionType === 'update' && !content.get( 'isFetching' )
        return content.get( 'isFetching' ) ? <ProductForm onSubmit={this.onSubmit}
                                                          initialValues={content.toJS()}
                                                          btnName={actionType}
                                                          form={`${actionType}-product-form`}/>
            :
            <p>Loading</p>;
    }
}


ProductFormContainer.propTypes = {
    actionType: PropTypes.oneOf( [ 'create', 'update' ] ).isRequired,
    productId : PropTypes.oneOfType( [ PropTypes.string, PropTypes.number, PropTypes.bool ] ).isRequired

};

const mapStateToProps = state => ({
    content: state.get( 'singleProduct' )
});

const mapDispatchToProps = dispatch => ({
    fetchProduct: productId => dispatch( actions.fetch( { productId } ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( ProductFormContainer );