import { all, takeEvery } from 'redux-saga/effects'
import {CHECKED_TASK, DELETE_TASK, EDIT_TASK, GET_TASKS, POST_TASK} from "../types/tasks";
import {checkedTask, deleteTask, getTasks, postTask, editTask} from "./tasks";

function* watchTasks() {
  yield takeEvery(GET_TASKS, getTasks)
  yield takeEvery(POST_TASK, postTask)
  yield takeEvery(DELETE_TASK, deleteTask)
  yield takeEvery(CHECKED_TASK, checkedTask)
  yield takeEvery(EDIT_TASK, editTask)
}

export default function* rootSaga() {
  yield all([
    watchTasks()
  ])
}
