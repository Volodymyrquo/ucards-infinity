import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAIL,
  GET_USER_PROFILE_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
} from "./actionTypes"

type GetUsersActionType = { type: typeof GET_USERS};
type GetUsersSuccessActionType = { type: typeof GET_USERS_SUCCESS, payload: Array<any>,} ;
type GetUsersFailActionType = { type: typeof GET_USERS_FAIL, payload: any,} ;
type GetUserProfileActionType = { type: typeof GET_USER_PROFILE};
type GetUserProfileSuccessActionType = { type: typeof GET_USER_PROFILE_SUCCESS, payload: Array<any>,} ;
type GetUserProfileFailActionType = { type: typeof GET_USER_PROFILE_FAIL, payload: any,} ;

export type ActionType = GetUsersActionType | GetUsersSuccessActionType | GetUsersFailActionType | GetUserProfileActionType | GetUserProfileSuccessActionType | GetUserProfileFailActionType



export const getUsers = ():GetUsersActionType => ({
  type: GET_USERS,
})

export const getUsersSuccess = (users:Array<any>):GetUsersSuccessActionType => ({
  type: GET_USERS_SUCCESS,
  payload: users,
})

export const getUsersFail = (error:any):GetUsersFailActionType => ({
  type: GET_USERS_FAIL,
  payload: error,
})

export const getUserProfile = ():GetUserProfileActionType => ({
  type: GET_USER_PROFILE,
})

export const getUserProfileSuccess = (userProfile:Array<any>):GetUserProfileSuccessActionType => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: userProfile,
})

export const getUserProfileFail = (error:any):GetUserProfileFailActionType => ({
  type: GET_USER_PROFILE_FAIL,
  payload: error,
})
