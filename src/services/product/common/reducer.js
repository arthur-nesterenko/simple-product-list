import { handleActions, createAction, combineActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { fetchProducts, remove, failure } from './mutators';


export const actionTypes = {
    FETCH        : '@PRODUCTS/FETCH',
    FETCH_SUCCESS: '@PRODUCTS/FETCH_SUCCESS',
    FETCH_FAILURE: '@PRODUCTS/FETCH_FAILURE',

    DELETE        : '@SINGLE_PRODUCT/DELETE',
    DELETE_SUCCESS: '@SINGLE_PRODUCT/DELETE_SUCCESS',
    DELETE_FAILURE: '@SINGLE_PRODUCT/DELETE_FAILURE',
};

export const actions = {
    fetch       : createAction( actionTypes.FETCH ),
    fetchSuccess: createAction( actionTypes.FETCH_SUCCESS ),
    fetchFailure: createAction( actionTypes.FETCH_FAILURE ),


    delete: createAction( actionTypes.DELETE, id => id,
        ( id, shouldRedirect = false ) => ({ shouldRedirect }) ),

    deleteSuccess: createAction( actionTypes.DELETE_SUCCESS ),
    deleteFailure: createAction( actionTypes.DELETE_FAILURE ),
};

const initialState = fromJS( {
    isFetching: false,
    items     : [],
    error     : ''
} );


const reducer = handleActions( {

    [actionTypes.FETCH]         : state => state.set( 'isFetching', false ),
    [actionTypes.FETCH_SUCCESS] : fetchProducts,
    [actionTypes.DELETE_SUCCESS]: remove,
    [combineActions(
        actionTypes.DELETE_FAILURE,
        actionTypes.FETCH_FAILURE
    )]                          : failure

}, initialState );


export default reducer;