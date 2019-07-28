import {put, takeEvery, call} from 'redux-saga/effects';
import Api, {ApiMethods} from '../../../../middleware/api';
import {
    FETCH_USER
} from '../constants';


function * authSaga(action) {
  try {
    const data = yield call(Api.fetch, {
      endpoint: `mobile/${action.payload.id}`,
      method: ApiMethods.GET
    });

    yield put({type: FETCH_USER, data: data.responseData});
  } catch (error) {
    yield put({type: FETCH_USER, error});
  }
}

export function * authSagaWatch() {
  yield takeEvery(FETCH_USER, authSaga);
}
