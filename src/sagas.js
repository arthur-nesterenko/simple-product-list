import { fork, all } from 'redux-saga/effects';
import {rootSaga as rootProductsSaga} from './services/product/common'
import {rootSaga as rootSingleProductSaga } from './services/product/single'
/**
 *
 */
function* root () {
  yield all( [
    fork(rootProductsSaga),
    fork(rootSingleProductSaga)
  ] );
}
/**
 * 
 */
export default root;