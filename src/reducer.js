import { combineReducers } from 'redux-immutable';
import { reducer as productsReducer } from './services/product/common';
import { reducer as singleProductReducer } from './services/product/single';
import { reducer as formReducer } from 'redux-form/immutable';


/**
 *
 */

const rootReducer = combineReducers( {
    products     : productsReducer,
    singleProduct: singleProductReducer,
    form         : formReducer
} );


/**
 *
 */
export default rootReducer;