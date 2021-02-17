import { GET_CARDS_TYPES_SUCCESS, GET_CARDS_TYPES_FAIL } from "./actionTypes"

const INIT_STATE = {
  cardTypes: [],
  error: {},
}

const cardTypes = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CARDS_TYPES_SUCCESS:
      return {
        ...state,
        cardTypes: action.payload,
      }

    case GET_CARDS_TYPES_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default cardTypes
