import {combineReducers} from "redux";
import {tasksReducer} from "./tasksReducer";
import {loaderReducer} from "./loaderReducer";

const reducer = combineReducers({
  tasks: tasksReducer,
  loader: loaderReducer
})

export default reducer