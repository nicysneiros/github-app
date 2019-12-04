import { fetchFromApi } from "react-redux-api-tools";

import { GITHUB_BASE_URL, GITHUB_DEFAULT_HEADER } from '../../constants';
import {
    SEARCH_USERS,
    SEARCH_USERS_SUCCESS,
    SEARCH_USERS_ERROR,
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from '../actionTypes';


export const searchUsers = searchTerm => {
    const url = `${GITHUB_BASE_URL}search/users?q=${searchTerm}`;
    const requestData = {
        headers: GITHUB_DEFAULT_HEADER
    }

    return {
        types: {
            request: SEARCH_USERS,
            success: SEARCH_USERS_SUCCESS,
            failure: SEARCH_USERS_ERROR
        },
        apiCallFunction: () => fetchFromApi(url, requestData)
    };
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
