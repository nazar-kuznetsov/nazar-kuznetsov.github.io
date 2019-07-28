import {
  ADD_COMPARE,
  DELETE_COMPARE,
  CLEAR_COMPARE
} from './constants';
import {loadLocalStorage} from './action';

const initialState = {
  compare: loadLocalStorage() || []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPARE:
      return {
        ...state,
        compare: [...state.compare, action.payload]
      };
    case DELETE_COMPARE:
      return {
        ...state,
        compare: state.compare.filter(item => item.id !== action.payload.id)
      };
    case CLEAR_COMPARE:
      return {
        ...state,
        compare: []
      };
    default: return state;
  }
};
