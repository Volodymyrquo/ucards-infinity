import { call, put, takeEvery } from "redux-saga/effects"

// Crypto Redux States
import { GET_CARDS_TYPES } from "./actionTypes"
import { getCardsTypes, getCardsTypesFail } from "./actions"

//Include Both Helper File with needed methods
import { getCardsTypes } from "../../common/data"

function* fetchUsers() {
  try {
    const response = yield call(getUsers)
    yield put(getUsersSuccess(response))
  } catch (error) {
    yield put(getUsersFail(error))
  }
}

function* fetchUserProfile() {
  try {
    const response = yield call(getUserProfile)
    yield put(getUserProfileSuccess(response))
  } catch (error) {
    yield put(getUserProfileFail(error))
  }
}

function* contactsSaga() {
  yield takeEvery(GET_USERS, fetchUsers)
  yield takeEvery(GET_USER_PROFILE, fetchUserProfile)
}

export default contactsSaga
