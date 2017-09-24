import { all, call, fork, put, select, take, takeEvery, takeLatest, } from 'redux-saga/effects';
import {delay} from 'redux-saga'
import {actionTypes,actions} from './reducer'


function* fetch () {
  try {
    
    yield  call(delay,500)
    return {}

  } catch (e) {
    console.error( e );
    return false;
  }
}
/**
 * 
 */
function* watchFetch(){
    yield takeLatest(actionTypes.FETCH,fetch)
}

function* rootSaga () {
  yield all( [
    fork( watchFetch ),
  ] );

}
/**
 * 
 */
export default rootSaga;