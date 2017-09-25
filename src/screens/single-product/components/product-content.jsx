import React from 'react';
import PropTypes from 'prop-types';


const ProductContent = ( { id, title, description, preview, sku, price, } ) => {
    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{description}</li>
                <li>{preview}</li>
                <li>{sku}</li>
                <li>{price}</li>
                <li>edit</li>
                <li>remove</li>
            </ul>
        </div>
    );

};


ProductContent.propTypes = {
    description: PropTypes.string,
    id         : PropTypes.number,
    preview    : PropTypes.string,
    price      : PropTypes.number,
    sku        : PropTypes.string,
    title      : PropTypes.string
};


export default ProductContent;