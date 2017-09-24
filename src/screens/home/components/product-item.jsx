import React from 'react';
import PropTypes from 'prop-types';





const ProductItem = ({id,title,sku,price,preview})=> (
<div>
        <div>{title}</div>
        <img src={preview} alt={title}/>
        <div>{price}</div>
    </div>
    )



ProductItem.propTypes = {

id: PropTypes.number.isRequired,
title: PropTypes.string.isRequired,
sku: PropTypes.string.isRequired,
price:PropTypes.number.isRequired,
preview:PropTypes.string

}

export default ProductItem;