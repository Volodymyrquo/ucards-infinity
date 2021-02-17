import {
  GET_CARDS_TYPES,
  GET_CARDS_TYPES_SUCCESS,
  GET_CARDS_TYPES_FAIL,
} from "./actionTypes"

type GetCardsTypessActionType = { type: typeof GET_CARDS_TYPES};
type GetCardsTypesSuccessActionType = { type: typeof GET_CARDS_TYPES_SUCCESS; payload:Array<any> };
type GetCardsTypesFailActionType = { type: typeof GET_CARDS_TYPES_FAIL; payload:object};


export const getCardsTypes = ():GetCardsTypessActionType => ({
  type: GET_CARDS_TYPES
})

export const getCardsTypesSuccess = (cardTypes:Array<any>):GetCardsTypesSuccessActionType => ({
  type: GET_CARDS_TYPES_SUCCESS,
  payload: cardTypes
})

export const getCardsTypesFail = (error:object):GetCardsTypesFailActionType => ({
  type: GET_CARDS_TYPES_FAIL,
  payload: error,
})
