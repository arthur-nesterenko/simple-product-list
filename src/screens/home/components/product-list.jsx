import React from 'react';
import ImmPropTypes from 'react-immutable-proptypes';
import ProductItem from './product-item';
import PropTypes from 'prop-types';


const ProductList = ({items,onDelete}) =>(
    <div>
        {items.valueSeq().map(item => <ProductItem key={item.get('id')} {...item.toObject()} onDelete={onDelete}/>  )}
    </div>
)


ProductList.propTypes ={
    items: ImmPropTypes.list.isRequired,
    onDelete:PropTypes.func
}

export default ProductList;