import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ProductContent from './../components/product-content';
import { actions as productActions } from './../../../services/product/single';
import { actions as productsActions } from './../../../services/product/common';
import Prealoader from './../../../common/preloader';


export class ProductContentContainer extends Component {

    componentWillMount() {
        const { productId, fetchProduct } = this.props;
        fetchProduct( productId );
    }

    render() {
        const { content, onDelete } = this.props;

        return <Prealoader isLoaded={content.get( 'isFetching' )}>
            <ProductContent onDelete={onDelete} {...content.toObject()}/>
        </Prealoader>;
    }
}


const mapStateToProps = ( state, { productId } ) => ({
    content: state.get( 'singleProduct' )
});

const mapDispatchToProps = dispatch => ({
    fetchProduct: productId => dispatch( productActions.fetch( { productId } ) ),
    onDelete    : ( productId ) => dispatch( productsActions.delete( { productId }, true ) )
});


ProductContentContainer.propTypes = {
    productId: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ).isRequired
};
export default connect( mapStateToProps, mapDispatchToProps )( ProductContentContainer );
