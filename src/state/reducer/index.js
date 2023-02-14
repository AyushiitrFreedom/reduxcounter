import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount : amountReducer
})

export default reducers 

// we can have multiple reducer so we are combining all the reducers here