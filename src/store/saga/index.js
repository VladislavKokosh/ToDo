import { all, takeEvery } from 'redux-saga/effects'
import {DELETE_TASK, GET_TASKS, POST_TASK} from "../types/tasks";
import {deleteTask, getTasks, postTask} from "./tasks";

function* watchTasks() {
  yield takeEvery(GET_TASKS, getTasks)
  yield takeEvery(POST_TASK, postTask)
  yield takeEvery(DELETE_TASK, deleteTask)
}

export default function* rootSaga() {
  yield all([
    watchTasks()
  ])
}
