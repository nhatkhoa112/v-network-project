import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import theme from './themeReducer';
import notify from './notifyReducer';
import homePosts from './postReducer';
import suggestions from './suggestionsReducer';

export default combineReducers({
  auth,
  alert,
  theme,
  notify,
  homePosts,
  suggestions,
});
