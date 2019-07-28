import {takeEvery, select} from 'redux-saga/effects';
import {saveLocalStorage} from '../action';
import {
  COMPARE_UPDATE_LOCAL_STORAGE
} from '../constants';


function* compareUpdateLocalStorage() {
  const state = yield select();
  saveLocalStorage(state.compareReducer.compare);
}

export function* compareLocalStorage() {
  yield takeEvery(COMPARE_UPDATE_LOCAL_STORAGE, compareUpdateLocalStorage);
}
