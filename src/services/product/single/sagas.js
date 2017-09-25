import { all, call, fork, put, takeLatest, } from 'redux-saga/effects';
import { actionTypes, actions } from './reducer';
import singleProductApi from './api';

function* fetch( { payload: { productId } } ) {
    try {

        const { product } = yield  call( singleProductApi.fetch, productId );
        yield put( actions.fetchSuccess( product ) );
    }
    catch ( e ) {
        console.error( e );
    }
}

/**
 *
 */
function* watchFetch() {
    yield takeLatest( actionTypes.FETCH, fetch );
}

function* rootSaga() {
    yield all( [
        fork( watchFetch ),
    ] );

}

/**
 *
 */
export default rootSaga;