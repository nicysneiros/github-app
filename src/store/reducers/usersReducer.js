import {
  SEARCH_USERS,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_ERROR,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
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
        isLoading: true
      };
    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: initialState.isLoading,
        users: action.response.data.items
      };
    case SEARCH_USERS_ERROR:
      return {
        ...state,
        isLoading: initialState.isLoading,
        errorMessage: action.error.data.message
      }
    case FETCH_USER:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        user: action.user
      }
    case FETCH_USER_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error
      }
    default:
      return state;
  }
};