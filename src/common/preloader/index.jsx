import PropTypes from 'prop-types';
import React from 'react';
import { LinearProgress } from 'material-ui/Progress';


const Prealoader = ( { isLoaded, children } ) => isLoaded ?
    children
    : <LinearProgress style={{ top: '50vh' }}/>;


Prealoader.propTypes = {
    children: PropTypes.element.isRequired,
    isLoaded: PropTypes.bool.isRequired
};
export default Prealoader;