import { all, call, fork, put, takeLatest, actionChannel, take } from 'redux-saga/effects';
import {delay} from 'redux-saga'
import { actionTypes, actions } from './reducer';
import singleProductApi from './api';

import has from 'lodash/has';


const toFormData = ( data, fileName = 'file' ) => {

  let fd = data;
  if ( has( data, fileName ) ) {
    fd = new FormData();
    for ( let prop in data ) {
      if ( data.hasOwnProperty( prop ) ) {
        fd.append( prop,
          prop === fileName
            ? data[ prop ][ 0 ]
            : data[ prop ]
        );
      }

    }
  }

  return fd;

};



function* fetch( { payload: { productId } } ) {
    try {

        const { product } = yield  call( singleProductApi.fetch, productId );

        yield call(delay,750);

        yield put( actions.fetchSuccess( product ) );
    }
    catch ( e ) {
        console.error( e );
    }
}

/**
 *
 * @param {*} param0 
 */
function* manage( { payload: { data, resolve, reject }, meta: { actionType } } ) {

    try {

        const apiAction = singleProductApi[ actionType ];
        yield call( apiAction, toFormData(data ,'preview') );
        
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
        fork( watchManage ),
    ] );

}

/**
 *
 */
export default rootSaga;