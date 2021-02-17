import {
  GET_CARDS_TYPES,
  GET_CARDS_TYPES_SUCCESS,
  GET_CARDS_TYPES_FAIL,
} from "./actionTypes"

export const getCardsTypes = () => ({
  type: GET_CARDS_TYPES,
})

export const getCardsTypesSuccess = cardTypes => ({
  type: GET_CARDS_TYPES_SUCCESS,
  payload: cardTypes,
})

export const getUsersFail = error => ({
  type: GET_CARDS_TYPES_FAIL,
  payload: error,
})
