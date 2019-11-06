import { someReducer } from './someReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  someState: someReducer
});