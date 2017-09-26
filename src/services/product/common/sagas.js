import { all, call, fork, put, takeLatest, } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actionTypes, actions } from './reducer';
import apiProducts from './api';
import { push } from 'react-router-redux';

function* fetch() {
    try {

        const { products } = yield call( apiProducts.fetch );

        yield call( delay, 750 );
        yield put( actions.fetchSuccess( products ) );


    }
    catch ( e ) {

        yield put( actions.fetchFailure( e ) );
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

        yield put( actions.deleteFailure( e) );
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