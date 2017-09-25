import { all, call, fork, put, takeLatest, actionChannel, take } from 'redux-saga/effects';
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


function* manage( { payload: { data, resolve, reject }, meta: { actionType } } ) {

    try {

        const apiAction = singleProductApi[ actionType ];
        yield call( apiAction, data );
        
        yield call( resolve );

        const action = actions[ `${actionType}Success` ];

        yield put( action() );

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

function* watchManage() {

    const chan = yield actionChannel( [
        actionTypes.CREATE,
        actionTypes.UPDATE
    ] );
    while ( true ) {

        const response = yield  take( chan );
        console.log( response, '==' );
        yield call( manage, response );
    }
}


function* rootSaga() {
    yield all( [
        fork( watchFetch ),
        fork( watchManage )
    ] );

}

/**
 *
 */
export default rootSaga;