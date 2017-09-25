import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => (
    <ul style={{
        border: '2px solid #f5f5f5',
        margin: '10px'
    }}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/new-product'>Add new Product</NavLink></li>
        <li>second</li>
        <li>third</li>
    </ul>
);


export default Navbar;
