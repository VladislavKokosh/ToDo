import { all, takeEvery } from 'redux-saga/effects'
import {GET_TASKS, POST_TASK} from "../types/tasks";
import {getTasks, postTask} from "./tasks";

function* watchTasks() {
  yield takeEvery(GET_TASKS, getTasks)
  yield takeEvery(POST_TASK, postTask)
}

export default function* rootSaga() {
  yield all([
    watchTasks()
  ])
}
