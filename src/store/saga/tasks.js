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
    const request = yield call(() => axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`))
    yield put(deleteTaskSuccess(id.payload))
  }
  catch (e) {
    yield put(deleteTaskFailure(e))
  }
  finally {

  }
}

export { getTasks, postTask, deleteTask }
