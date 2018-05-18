import { INIT } from "../actions";

export const INITIAL_STATE = {}

export const appReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case INIT:
      return {
        ...state
      }
  
    default:
      return state
  }
}
