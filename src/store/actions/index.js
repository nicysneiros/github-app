import {
    SEARCH_USERS,
    SEARCH_USERS_SUCCESS,
    SEARCH_USERS_ERROR
} from '../actionTypes';

export const searchUsers = value => {
    return {
        type: SEARCH_USERS,
        isLoading: true
    };
}

export const searchUsersSuccess = value => {
    const users = value.items;
    return {
        type: SEARCH_USERS_SUCCESS,
        isLoading: false,
        users: users
    };
}

export const searchUsersError = value => {
    const error = value.message;
    return {
        type: SEARCH_USERS_ERROR,
        isLoading: false,
        error: error
    }
}