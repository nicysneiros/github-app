import { someReducer } from './someReducer';
import { combineReducers } from 'redux';


export default combineReducers({
  someState: someReducer
});