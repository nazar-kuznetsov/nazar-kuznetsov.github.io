import {authRef, provider} from '../../../config/firebase-config';
import {FETCH_USER} from './constants';

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const signIn = () => dispatch => {
  authRef.signInWithPopup(provider).then(result => {
    console.log(result);
  }).catch(error => {});
};
export const signOut = () => (dispatch, getState, {getFirebase, getFirestore}) => {
  getState().firestoreReducer = {};
  authRef.signOut().then(() => {
  }).catch(error => {});
};
