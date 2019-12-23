import { profileConstants } from "../constants";
import { filter } from "../helpers/filter";
const get_userInfo = () => async dispatch => {
    dispatch(request())

    fetch("https://api.github.com/users/supreetsingh247")
      .then(response => response.json())
      .then(result => {dispatch(success(result))})
      .catch(error => dispatch(failure(error)))

      function request() { return { type: profileConstants.GET_USER_REQUEST } }
      function success(userInfo) { return { type: profileConstants.GET_USER_SUCCESS, payload: userInfo } }
      function failure(error) { return { type: profileConstants.GET_USER_FAILURE, payload: error } }
}


const get_repositories = (type, lang, value) => async dispatch => {
  dispatch(request())

  fetch("https://api.github.com/users/supreetsingh247/repos")
    .then(response => response.json())
    .then(result => dispatch(success(filter(type, lang, result, value))))
    .catch(error => dispatch(failure(error)))

    function request() { return { type: profileConstants.GETALL_REPOS_REQUEST } }
    function success(repoInfo) { return { type: profileConstants.GETALL_REPOS_SUCCESS, payload: repoInfo } }
    function failure(error) { return { type: profileConstants.GETALL_REPOS_FAILURE, payload: error } }
}

const update_repositories = payload => dispatch => dispatch({
  type: profileConstants.GETALL_REPOS_SUCCESS,
  payload: payload
})

export const profileActions = {
  get_userInfo,
  get_repositories,
  update_repositories
};