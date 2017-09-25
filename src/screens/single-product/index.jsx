import React from 'react';
import ProductContentContainer from './containers/product-content-container';


const SingleProduct = ( { match: { params: { productId } } } ) => (
    <div>
        <ProductContentContainer productId={productId}/>
    </div>
);


export default SingleProduct;