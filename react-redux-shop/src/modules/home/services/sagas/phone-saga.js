import {put, takeEvery, call} from 'redux-saga/effects';
import Api, {ApiMethods} from '../../../../middleware/api';
import {
  MOBILE_FETCH_REQUEST,
  MOBILE_FETCH_SUCCESS,
  MOBILE_FETCH_ERROR
} from '../constants';


function * phoneFetch(action) {
  try {
    const data = yield call(Api.fetch, {
      endpoint: 'mobile',
      method: ApiMethods.GET
    });
    yield put({type: MOBILE_FETCH_SUCCESS, data: data.responseData});
  } catch (error) {
    yield put({type: MOBILE_FETCH_ERROR, error});
  }
}

export function * phoneFetchSaga() {
  yield takeEvery(MOBILE_FETCH_REQUEST, phoneFetch);
}
