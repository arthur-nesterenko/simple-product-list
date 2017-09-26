import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ProductForm from './../components/product-form';
import handleSubmitForm from './../../../utils/handle-submit-form';
import { actions } from './../../../services/product/single';
import Preloader from './../../preloader';
import omit from 'lodash/omit';

class ProductFormContainer extends Component {

    componentWillMount() {
        const { productId, actionType, fetchProduct } = this.props;

        if (actionType === 'update') {
            fetchProduct( productId );
        }

    }

    onSubmit = ( values, dispatch, ) => {
        const { actionType } = this.props;
        const action = actions[ actionType ];
        return handleSubmitForm( values, dispatch, action );
    };

    renderByType() {
        const { actionType, content } = this.props;

        switch ( actionType ) {
            case 'create':
                return <ProductForm onSubmit={this.onSubmit}
                                    btnName={actionType}
                                    form={`${actionType}-product-form`}/>;
            case 'update': {

                return <Preloader isLoaded={content.get( 'isFetching' )}>
                    <ProductForm onSubmit={this.onSubmit}
                                 initialValues={omit( content.toJS(), [ 'isFetching', 'error', 'preview' ] )}
                                 btnName={actionType}
                                 form={`${actionType}-product-form`}/>
                </Preloader>;
            }
        }

    }

    render() {
        return this.renderByType();
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