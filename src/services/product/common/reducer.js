import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';






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
    items: {}
});


const reducer = handleActions({
    [actionTypes.FETCH] : state => state.set('isFetching',false),
},initialState);



export default reducer