import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../components/product-list';
import { actions } from './../../../services/product/common';
import Prealoader from './../../../common/preloader';

export class ProductListContainer extends Component {

    componentWillMount() {

        this.props.fetchProducts();

    }

    render() {
        const { isFetching } = this.props;
        return <Prealoader isLoaded={isFetching}>
            <ProductList {...this.props}/>
        </Prealoader>;


    }


}


const mapStateToProps = state => ({
    items     : state.getIn( [ 'products', 'items' ] ),
    isFetching: state.getIn( [ 'products', 'isFetching' ] )
});

const mapDispatchToProps = disaptch => ({
    fetchProducts: () => disaptch( actions.fetch() ),
    onDelete     : ( productId ) => disaptch( actions.delete( { productId } ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( ProductListContainer );