import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';
import { fetch } from './mutators';


export const actionTypes = {
    FETCH         : '@SINGLE_PRODUCT/FETCH',
    FETCH_SUCCESS : '@SINGLE_PRODUCT/FETCH_SUCCESS',
    FETCH_FAILURE : '@SINGLE_PRODUCT/FETCH_FAILURE',
    CREATE        : '@SINGLE_PRODUCT/CREATE',
    CREATE_SUCCESS: '@SINGLE_PRODUCT/CREATE_SUCCESS',
    CREATE_FAILURE: '@SINGLE_PRODUCT/CREATE_FAILURE',
    UPDATE        : '@SINGLE_PRODUCT/UPDATE',
    UPDATE_SUCCESS: '@SINGLE_PRODUCT/UPDATE_SUCCESS',
    UPDATE_FAILURE: '@SINGLE_PRODUCT/UPDATE_FAILURE',

};

/**
 *
 * @type {{
 * fetch,
 * fetchSuccess,
 * fetchFailure,
 * create,
  * createSuccess,
   * createFailure,
   * update,
   * updateSuccess,
   * updateFailure}}
 */
export const actions = {

    fetch       : createAction( actionTypes.FETCH ),
    fetchSuccess: createAction( actionTypes.FETCH_SUCCESS ),
    fetchFailure: createAction( actionTypes.FETCH_FAILURE ),

    create       : createAction( actionTypes.CREATE ),
    createSuccess: createAction( actionTypes.CREATE_SUCCESS ),
    createFailure: createAction( actionTypes.CREATE_FAILURE ),

    update       : createAction( actionTypes.UPDATE ),
    updateSuccess: createAction( actionTypes.UPDATE_SUCCESS ),
    updateFailure: createAction( actionTypes.UPDATE_FAILURE )
};


/**
 *
 */
const initialState = fromJS( {
    isFetching : false,
    title      : null,
    price      : 0,
    sku        : null,
    description: null,
    previewImg : null,
} );


/**
 *
 */
const reducer = handleActions( {
    [actionTypes.FETCH]        : state => state.set( 'isFetching', false ),
    [actionTypes.FETCH_SUCCESS]: fetch
}, initialState );


export default reducer;