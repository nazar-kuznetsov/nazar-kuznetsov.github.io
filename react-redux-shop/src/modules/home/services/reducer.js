import {
  MOBILE_FETCH_REQUEST,
  MOBILE_FETCH_SUCCESS,
  MOBILE_FETCH_ERROR
} from './constants';

const initialState = {
  phone: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOBILE_FETCH_REQUEST:
      return {
        ...state
      };
    case MOBILE_FETCH_SUCCESS:
      return {
        ...state,
        phone: action.data
      };
    case MOBILE_FETCH_ERROR:
      return {
        ...state
      };
    default: return state;
  }
};
