import axios from "axios";
import {put, call} from 'redux-saga/effects'

import {hideLoader, showLoader} from "../actions/loader";
import {getTasksFailure, getTasksSuccess, postTaskSuccess } from "../actions/tasks";


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
    yield put(getTasksFailure(e))
  }
  finally {

  }
}

export { getTasks, postTask }
