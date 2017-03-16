import * as constants from './constants'

export const initialState = {
  preparing: false,
  choice: '',
  foodItem: {}
}

const foodReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.START_FETCH_FOOD:
      // on FETCH_FOOD, set preparing to true and choice as the payload,
      // also foodItem as empty object
      return { preparing: true, choice: action.payload, foodItem: {} }
    case constants.FETCH_FOOD_DATA:
      // when food request has completed successfully, keep the choice in state
      // and set preparing to false
      // also foodItem as the payload of the action
        return { ...state, preparing: false, foodItem: action.payload }
    default:
        return state
  }
}

export default foodReducer
