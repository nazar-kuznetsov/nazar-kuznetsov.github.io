import {put, takeEvery, call} from 'redux-saga/effects';
import Api, {ApiMethods} from '../../../../middleware/api';
import {
  FEEDBACK_FETCH_REQUEST,
  FEEDBACK_FETCH_SUCCESS,
  FEEDBACK_FETCH_ERROR
} from '../constants';


function * feedbackFetch(action) {
  try {
    const data = yield call(Api.fetch, {
      endpoint: `feedback`,
      method: ApiMethods.GET
    });
    action.payload.callback(data.responseData);
    // yield put({type: FEEDBACK_FETCH_SUCCESS, data: data.responseData});
  } catch (error) {
    yield put({type: FEEDBACK_FETCH_ERROR, error});
  }
}

export function * feedbackFetchSagaWatch() {
  yield takeEvery(FEEDBACK_FETCH_REQUEST, feedbackFetch);
}
