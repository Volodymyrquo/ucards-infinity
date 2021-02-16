import {
  SET_USER_ACCESS_TOKEN,
  SET_USER_NAME,
  GET_USER_ACCESS_TOKEN,
} from "./actionTypes"

const INIT_STATE = {
  accessToken: null,
  username: "",
  invalidUserName: false,
}

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_USER_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      }
    case GET_USER_ACCESS_TOKEN:
      return {
        ...state,
      }
    case SET_USER_NAME:
      return {
        ...state,
        username: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
