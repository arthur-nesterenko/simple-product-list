import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ProductContent from './../components/product-content';
import { actions as productActions } from './../../../services/product/single';

export class ProductContentContainer extends Component {

    componentWillMount() {
        const { productId, fetchProduct } = this.props;

        fetchProduct( productId );
    }

    render() {
        return <ProductContent/>;
    }
}


const mapStateToProps = ( state, { productId } ) => ({});

const mapDispatchToProps = dispatch => ({
    fetchProduct: productId => dispatch( productActions.fetch( { productId } ) )
});


ProductContentContainer.propTypes = {
    productId: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ).isRequired
};
export default connect( null, mapDispatchToProps )( ProductContentContainer );
