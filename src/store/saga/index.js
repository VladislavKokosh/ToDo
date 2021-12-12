import { all, takeEvery } from 'redux-saga/effects'
import {GET_TASKS} from "../types/tasks";
import {getTasks} from "./tasks";

function* watchTasks() {
  yield takeEvery(GET_TASKS, getTasks)
}

export default function* rootSaga() {
  yield all([
    watchTasks()
  ])
}
