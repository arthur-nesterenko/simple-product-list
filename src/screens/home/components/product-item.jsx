import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ProductItem = ( { id, title, sku, price, preview,onDelete } ) => (
    <div style={{
        border : '1px solid black',
        padding: '15px',
        margin : '10px'
    }}>
        <div>{title}</div>
        <img src={`data:image/png;base64,${preview}`} alt={title}/>
        <div>{price}$</div>
        <div>
            <Link to={`/${id}`}>Read more</Link>
        </div>
        <div>
            <Link to={`/${id}/edit`}>Edit</Link>
        </div>
        <div>
            <button onClick={()=> onDelete(id)}>Delete</button>
        </div>
    </div>
);


ProductItem.propTypes = {

    id     : PropTypes.number.isRequired,
    title  : PropTypes.string.isRequired,
    sku    : PropTypes.string.isRequired,
    price  : PropTypes.number.isRequired,
    preview: PropTypes.string,
    onDelete: PropTypes.func

};

export default ProductItem;