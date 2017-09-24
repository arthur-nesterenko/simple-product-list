import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';






export const actionTypes =  {
    FETCH : '@SINGLE_PRODUCT/FETCH',
    FETCH_SUCCESS : '@SINGLE_PRODUCT/FETCH_SUCCESS',
    FETCH_FAILURE : '@SINGLE_PRODUCT/FETCH_FAILURE',
}

export const actions = {
    fetch : createAction(actionTypes.FETCH),
    fetchSuccess : createAction(actionTypes.FETCH_SUCCESS),
    fetchFailure : createAction(actionTypes.FETCH_FAILURE)
}

/**
 * 
 */
const initialState = fromJS({
    isFetching: false,
    title:null,
    price: 0,
    sku: null,
    description: null,
    previewImg: null,
});


/**
 * 
 */
const reducer = handleActions({
    [actionTypes.FETCH] : state => state.set('isFetching',false),
},initialState);



export default reducer