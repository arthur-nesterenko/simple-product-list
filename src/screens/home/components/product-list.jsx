import React from 'react';
import ImmPropTypes from 'react-immutable-proptypes';
import ProductItem from './product-item'


const ProductList = ({items}) =>(
    <div>
        {items.valueSeq().map(item => <ProductItem key={item.get('id')} {...item.toObject()}/>  )}
    </div>
)


ProductList.propTypes ={
    items: ImmPropTypes.list.isRequired
}

export default ProductList;