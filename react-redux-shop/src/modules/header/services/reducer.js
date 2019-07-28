import {
  PROJECT_SINGLE_FETCH_REQUEST,
  PROJECT_SINGLE_FETCH_SUCCESS,
  PROJECT_SINGLE_FETCH_ERROR
} from './constants';

const initialState = {
  compare: [],
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_SINGLE_FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case PROJECT_SINGLE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case PROJECT_SINGLE_FETCH_ERROR:
      return {
        ...state,
        loading: false
      };
    default: return state;
  }
};
