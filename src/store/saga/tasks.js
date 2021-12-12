import axios from "axios";
import {put, call} from 'redux-saga/effects'

import {hideLoader, showLoader} from "../actions/loader";
import {getTasksFailure, getTasksSuccess} from "../actions/tasks";


function* getTasks() {
  try {
    yield put(showLoader())
    const { data } = yield call(() => axios.get('https://jsonplaceholder.typicode.com/todos'))
    yield put(getTasksSuccess(data))
  }
  catch (error) {
    yield put(getTasksFailure(error))
  }
  finally {
    yield put(hideLoader())
  }
}

export { getTasks }
