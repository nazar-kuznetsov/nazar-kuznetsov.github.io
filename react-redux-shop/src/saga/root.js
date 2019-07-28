import {all} from 'redux-saga/effects';
import {detailsSaga} from '../modules/details/services/sagas/details-saga';
import {blogFetchDataSaga} from '../modules/cart/services/sagas/cart-saga';
import {phoneFetchSaga} from '../modules/home/services/sagas/phone-saga';
import {compareLocalStorage} from '../modules/compare/services/sagas/compare-saga';
// import {feedbackFetchSagaWatch} from '../modules/details/services/sagas/feedback-saga';

export default function * root() {
  yield all([
    detailsSaga(),
    blogFetchDataSaga(),
    phoneFetchSaga(),
    compareLocalStorage()
    // feedbackFetchSagaWatch()
  ]);
}
