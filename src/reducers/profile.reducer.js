import { profileConstants } from "../constants";

export const profile = (state={}, action) => {
    switch(action.type){
        case profileConstants.GET_USER_REQUEST:
            return {
                loading_profile: true
            }
        case profileConstants.GET_USER_SUCCESS:
            return {
                user: action.payload
            }
        case profileConstants.GET_USER_FAILURE:
            return {
                error: action.payload
            }
        default:
            return state
    }
}

export const repositories = (state=[], action) => {
    switch(action.type){
        case profileConstants.GETALL_REPOS_REQUEST:
            return {
                loading_repos: true
            }
        case profileConstants.GETALL_REPOS_SUCCESS:
            return {
                repos: action.payload
            }
        case profileConstants.GETALL_REPOS_FAILURE:
            return {
                repos: action.payload
            }
        default:
            return state
    }
}