import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import theme from './themeReducer';
import notify from './notifyReducer';

export default combineReducers({
  auth,
  alert,
  theme,
  notify,
});
