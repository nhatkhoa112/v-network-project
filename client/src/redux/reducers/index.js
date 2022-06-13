import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import theme from './themeReducer';
import notify from './notifyReducer';
import homePosts from './postReducer';
import suggestions from './suggestionsReducer';
import status from './statusReducer';
import profile from './profileReducer';
import detailPost from './detailPostReducer';

export default combineReducers({
  auth,
  alert,
  theme,
  notify,
  homePosts,
  suggestions,
  status,
  profile,
  detailPost,
});
