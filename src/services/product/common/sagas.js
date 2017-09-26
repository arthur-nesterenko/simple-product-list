import { all, call, fork, put, select, take, takeEvery, takeLatest, } from 'redux-saga/effects';
import { actionTypes, actions } from './reducer';
import apiProducts from './api';
import { push } from 'react-router-redux';

function* fetch() {
    try {

        const { products } = yield call( apiProducts.fetch );


        yield put( actions.fetchSuccess( products ) );


    }
    catch ( e ) {
        console.error( e );
        return false;
    }
}

function* remove( { payload: { productId }, meta: { shouldRedirect } } ) {
    try {

        yield call( apiProducts.remove, productId );

        if (shouldRedirect)
            yield put( push( '/' ) );

        yield put( actions.deleteSuccess( { productId } ) );

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


function* watchDelete() {
    yield takeLatest( actionTypes.DELETE, remove );
}


function* rootSaga() {
    yield all( [
        fork( watchFetch ),
        fork( watchDelete )
    ] );

}

export default rootSaga;