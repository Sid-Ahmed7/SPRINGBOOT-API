import { combineReducers } from "redux";
import contentsReducers from "./ContentReducer";


const rootReducer = combineReducers({
   contenue: contentsReducers
   
});

export default rootReducer
