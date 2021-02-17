import { takeEvery, put, call } from "redux-saga/effects"

// Calender Redux States
import {
  SET_USER_ACCESS_TOKEN,
  SET_USER_NAME,
  GET_USER_ACCESS_TOKEN,
  GET_USER_NAME,
} from "./actionTypes"
import { setUserAccessToken, setUserName } from "./actions"
//Include Both Helper File with needed methods
import { fetchAuth, login } from "../../helpers/api_helper"

//wokers
function* signIn({ payload: { username, password } }) {
  try {
    const response = yield call(fetchAuth, { username, password })
    const {
      access_token,
      /*     expires_in,
      refresh_token,
      token_type,
   */
    } = response

    localStorage.setItem("token", access_token)
    //location.href = "/"

    yield put(setUserAccessToken(access_token))
  } catch (error) {
    yield put(apiError(error))
  }
}

//watcher

function* authSumraSaga() {
  yield takeEvery(GET_USER_ACCESS_TOKEN, signIn)
}

export default authSumraSaga
