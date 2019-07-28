import {put, takeEvery, call} from 'redux-saga/effects';
import Api, {ApiMethods} from '../../../../middleware/api';
import {
  PROJECT_SINGLE_FETCH_REQUEST,
  PROJECT_SINGLE_FETCH_SUCCESS,
  PROJECT_SINGLE_FETCH_ERROR
} from '../constants';


function*projectSingleFetch(action) {
  try {
    const data = yield call(Api.fetch, {
      endpoint: `products/${action.payload.id}`,
      method: ApiMethods.GET
    });
    action.payload.callback(data.responseData);
    yield put({type: PROJECT_SINGLE_FETCH_SUCCESS, data: data.responseData});
  } catch (error) {
    yield put({type: PROJECT_SINGLE_FETCH_ERROR, error});
  }
}

export function*projectSingleFetchDataSaga() {
  yield takeEvery(PROJECT_SINGLE_FETCH_REQUEST, projectSingleFetch);
}
