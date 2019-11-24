import { 
  SEARCH_USERS,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_ERROR
} from '../actionTypes';

const initialState = {
  isLoading: false,
  users: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        users: action.users
      };
    case SEARCH_USERS_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    default:
      return state;
  }
};