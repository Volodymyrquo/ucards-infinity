import {
  SET_USER_ACCESS_TOKEN,
  SET_USER_NAME,
  GET_USER_ACCESS_TOKEN,
  GET_USER_NAME,
} from "./actionTypes"

export const setUserAccessToken = accessToken => ({
  type: SET_USER_ACCESS_TOKEN,
  payload: accessToken,
})
export const setUserName = username => ({
  type: SET_USER_NAME,
  payload: username,
})
export const getUserAccessToken = ({ username, password }) => {
  return {
    type: GET_USER_ACCESS_TOKEN,
    payload: { username, password },
  }
}
export const getUserName = username => ({
  payload: GET_USER_NAME,
})
