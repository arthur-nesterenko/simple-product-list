import { all, call, fork, put, select, take, takeEvery, takeLatest, } from 'redux-saga/effects';
import {actionTypes,actions} from './reducer'
import apiProducts from './api'


function* fetch () {
  try {

    const {products} = yield call(apiProducts.fetch)
    
  
      yield put(actions.fetchSuccess(products))



  } catch (e) {
    console.error( e );
    return false;
  }
}

function* watchFetch(){
    yield takeLatest(actionTypes.FETCH,fetch)
}



function* rootSaga () {
  yield all( [
    fork( watchFetch ),
  ] );

}

export default rootSaga;