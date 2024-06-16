import counterReducer from "./counterReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer