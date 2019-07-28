import {combineReducers} from 'redux';
import cartReducer from '../modules/cart/services/reducer';
import detailsReducer from '../modules/details/services/reducer';
import phoneReducer from '../modules/home/services/reducer';
import compareReducer from '../modules/compare/services/reducer';
import authReducer from '../modules/auth/services/reducer';


const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  detailsReducer,
  compareReducer,
  phoneReducer
});


export default rootReducer;
