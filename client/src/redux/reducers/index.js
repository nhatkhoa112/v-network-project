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
import message from './messageReducer';
import discover from './discoverReducer';
import call from './callReducer';
import modal from './modalReducer';
import online from './onlineReducer';
import peer from './peerReducer';
import socket from './socketReducer'


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
  message,
  discover,
  call,
  online, 
  modal,
  peer,
  socket
});
