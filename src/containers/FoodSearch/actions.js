import * as constants from './constants'

/**
 * [startFetchFood A Redux action to start a food fetch ]
 * @return {Object} [Returns an object with payload choice and type as START_FETCH_FOOD]
 */
export const startFetchFood = (choice) => {
  return ({
    type: constants.START_FETCH_FOOD,
    payload: choice
  })
}
/**
 * [fetchFoodData A Redux action to fetch food data]
 * @param  {String}  choice [Provide the choice of the food]
 * @return {Object}     [Returns an object with payload as a promise of fetch request and type as FETCH_FOOD_DATA]
 */
export const fetchFoodData = (choice) => {
  const payload = fetch(`${process.env.REACT_APP_FOOD_DATA_API}/${choice}`)
                    .then(res => res.json())

  return ({
    type: constants.FETCH_FOOD_DATA,
    payload: payload
  })
}
