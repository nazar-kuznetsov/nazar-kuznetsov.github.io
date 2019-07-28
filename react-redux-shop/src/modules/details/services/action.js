import {PHONE_FETCH_REQUEST, FEEDBACK_FETCH_REQUEST} from './constants';

export const detailsFetch = (id, callback) => ({
  type: PHONE_FETCH_REQUEST,
  payload: {id, callback}
});


export const feedbackFetch = (callback) => ({
  type: FEEDBACK_FETCH_REQUEST,
  payload: {callback}
});
