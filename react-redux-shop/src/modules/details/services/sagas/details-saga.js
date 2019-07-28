import {put, takeEvery, call} from 'redux-saga/effects';
import Api, {ApiMethods} from '../../../../middleware/api';
import {
  PHONE_FETCH_REQUEST,
  PHONE_FETCH_SUCCESS,
  PHONE_FETCH_ERROR
} from '../constants';


function * projectSingleFetch(action) {
  try {
    const data = yield call(Api.fetch, {
      endpoint: `mobile/${action.payload.id}`,
      method: ApiMethods.GET
    });
    action.payload.callback(data.responseData);
    // yield put({type: PHONE_FETCH_SUCCESS, data: data.responseData});
  } catch (error) {
    yield put({type: PHONE_FETCH_ERROR, error});
  }
}

export function * detailsSaga() {
  yield takeEvery(PHONE_FETCH_REQUEST, projectSingleFetch);
}
