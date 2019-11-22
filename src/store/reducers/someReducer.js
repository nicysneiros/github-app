import { CLICK_UPDATE_VALUE } from '../actionTypes';

const initialState = {
  newValue: ''
};

export const someReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};