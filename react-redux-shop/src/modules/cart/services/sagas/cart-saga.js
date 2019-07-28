import {put, takeEvery, call} from 'redux-saga/effects';
import Api, {ApiMethods} from '../../../../middleware/api';
import {
  BLOG_FETCH_REQUEST,
  BLOG_FETCH_SUCCESS,
  BLOG_FETCH_ERROR
} from '../constants';

function * blogFetch() {
  try {
    const data = yield call(Api.fetch, {
      endpoint: 'wallpaper',
      method: ApiMethods.GET
    });
    yield put({type: BLOG_FETCH_SUCCESS, data: data.responseData});
  } catch (error) {
    yield put({type: BLOG_FETCH_ERROR, error});
  }
}

export function * blogFetchDataSaga() {
  yield takeEvery(BLOG_FETCH_REQUEST, blogFetch);
}

