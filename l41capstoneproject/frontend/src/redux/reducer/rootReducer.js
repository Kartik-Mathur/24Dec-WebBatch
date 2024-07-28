import { combineReducers } from 'redux'
import userReducer from './userReducer'
import restaurantReducer from './restaurantReducer'
import activeRestaurantReducer from './activeRestaurantReducer'

const rootReducer = combineReducers({
    userReducer,
    restaurantReducer,
    activeRestaurantReducer
})
export default rootReducer
