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


function* create( { payload: { data, resolve, reject } } ) {

    try {

         yield call( singleProductApi.create, data );

        yield call( resolve );

        yield put( actions.createSuccess() );

    }
    catch ( e ) {
        console.error( e );
        yield call( reject );
    }

}

/**
 *
 */
function* watchFetch() {
    yield takeLatest( actionTypes.FETCH, fetch );
}

function* watchCreate() {
    yield takeLatest( actionTypes.CREATE, create );
}


function* rootSaga() {
    yield all( [
        fork( watchFetch ),
        fork( watchCreate )
    ] );

}

/**
 *
 */
export default rootSaga;