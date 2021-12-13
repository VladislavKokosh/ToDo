import axios from "axios";
import {put, call} from 'redux-saga/effects'

import {hideLoader, showLoader} from "../actions/loader";
import {
  deleteTaskFailure,
  deleteTaskSuccess,
  getTasksFailure,
  getTasksSuccess,
  postTaskFailure,
  postTaskSuccess
} from "../actions/tasks";


function* getTasks() {
  try {
    yield put(showLoader())
    const { data } = yield call(() => axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10'))
    yield put(getTasksSuccess(data))
  }
  catch (error) {
    yield put(getTasksFailure(error))
  }
  finally {
    yield put(hideLoader())
  }
}

function* postTask(newPost) {
  try{
    const request = yield call(() => axios.post('https://jsonplaceholder.typicode.com/todos', newPost.payload))
    yield put(postTaskSuccess(request.data))
  }
  catch (e) {
    yield put(postTaskFailure(e))
  }
  finally {

  }
}

function* deleteTask(id) {
  try{
    // eslint-disable-next-line
    const request = yield call(() => axios.delete(`https://jsonplaceholder.typicode.com/todos/${id.payload}`))
    yield put(deleteTaskSuccess(id.payload))
  }
  catch (e) {
    yield put(deleteTaskFailure(e))
  }
  finally {

  }
}

function* checkedTask(task) {
  try{
    console.log(task.payload)
    const id = task.payload.id
    const completed = { completed: task.payload.completed}
    console.log(id)
    console.log(completed)
    // eslint-disable-next-line
    const request = yield call(() => axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, completed))

  }
  catch (e) {
    console.log(e)
  }
  finally {

  }
}

export { getTasks, postTask, deleteTask, checkedTask }
