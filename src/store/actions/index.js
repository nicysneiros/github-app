import {
    SEARCH_USERS,
    SEARCH_USERS_SUCCESS,
    SEARCH_USERS_ERROR,
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
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

export const fetchUser = value => {
    return {
        type: FETCH_USER,
        isLoading: true
    }
}

export const fetchUserSuccess = value => {
    return {
        type: FETCH_USER_SUCCESS,
        isLoading: false,
        user: value
    }
}

export const fetchUserError = value => {
    return {
        type: FETCH_USER_ERROR,
        isLoading: false,
        error: value
    }
}
