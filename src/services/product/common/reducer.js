import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';
import { fetchProducts } from './mutators'






export const actionTypes =  {
    FETCH : '@PRODUCTS/FETCH',
    FETCH_SUCCESS : '@PRODUCTS/FETCH_SUCCESS',
    FETCH_FAILURE : '@PRODUCTS/FETCH_FAILURE',
}

export const actions = {
    fetch : createAction(actionTypes.FETCH),
    fetchSuccess : createAction(actionTypes.FETCH_SUCCESS),
    fetchFailure : createAction(actionTypes.FETCH_FAILURE)
}

const initialState = fromJS({
    isFetching: false,
    items: [],
    errors: ''
});


const reducer = handleActions({
    
    [actionTypes.FETCH] : state => state.set('isFetching',false),
    [actionTypes.FETCH_SUCCESS]:fetchProducts

},initialState);



export default reducer