import { all, call, fork, put, select, take, takeEvery, takeLatest, } from 'redux-saga/effects';
import {actionTypes,actions} from './reducer'



function* fetch () {
  try {

    return {}

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