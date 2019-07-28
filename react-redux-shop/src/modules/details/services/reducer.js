import {
  PHONE_FETCH_REQUEST,
  PHONE_FETCH_SUCCESS,
  PHONE_FETCH_ERROR,
  FEEDBACK_FETCH_SUCCESS,
} from './constants';

const initialState = {
  phone: null,
  feedback: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PHONE_FETCH_REQUEST:
      return {
        ...state
      };
    case PHONE_FETCH_SUCCESS:
      return {
        ...state,
        phone: action.data
      };
    case PHONE_FETCH_ERROR:
      return {
        ...state
      };
      case FEEDBACK_FETCH_SUCCESS:
        return {
          ...state,
          feedback: action.data
        };
    default: return state;
  }
};
