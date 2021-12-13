import axios from "axios";
import { put, call, select } from 'redux-saga/effects'

import {
  hideLoader,
  showLoader
} from "../actions/loader";

import {
  checkedTaskFailure,
  checkedTaskSuccess,
  deleteTaskFailure,
  deleteTaskSuccess,
  editTaskFailure,
  editTaskSuccess,
  getTasksFailure,
  getTasksSuccess,
  postTaskFailure,
  postTaskSuccess
} from "../actions/tasks";
import { getTaskById } from "../selectors/tasks";
import { toast } from "react-toastify";

const getError = (e) => toast.error(e.message , {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false
});

const getSuccess = (title) => toast.success(title, {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false
});

function* getTasks() {
  try {
    yield put(showLoader())
    const { data } = yield call(() => axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10'))
    yield put(getTasksSuccess(data))
  }
  catch (e) {
    yield put(getTasksFailure(e))
    getError(e)

  }
  finally {
    yield put(hideLoader())
  }
}

function* postTask({ payload }) {
  try{
    yield call(() => axios.post('https://jsonplaceholder.typicode.com/todos', payload))
    yield put(postTaskSuccess(payload))
    getSuccess('Задача успешно добавлена!')
  }
  catch (e) {
    yield put(postTaskFailure(e))
    getError(e)
  }
}

function* deleteTask({ payload }) {
  try{
    yield call(() => axios.delete(`https://jsonplaceholder.typicode.com/todos/${payload}`))
    yield put(deleteTaskSuccess(payload))
    getSuccess('Задача успешно удалена!')
  }
  catch (e) {
    yield put(deleteTaskFailure(e))
    getError(e)
  }
}

function* checkedTask({ payload }) {
  try{
    const task = yield select(getTaskById(payload.id))
    yield call(() => axios.patch(`https://jsonplaceholder.typicode.com/todos/${payload.id}`, {completed: !task.completed}))
    yield put(checkedTaskSuccess(payload))
    getSuccess(task.completed ? 'Задача удачно перенесена в невыполненные!' : 'Задача выполнена!')
  }
  catch (e) {
    checkedTaskFailure(e)
    getError(e)
  }
}

function* editTask({ payload }) {
  try{
    yield call(() => axios.patch(`https://jsonplaceholder.typicode.com/todos/${payload.id}`, {title: payload.title}))
    yield put(editTaskSuccess(payload))
    getSuccess('Задача отредактирована и сохранена!')
  }
  catch (e) {
    editTaskFailure(e)
    getError(e)
  }
}



export { getTasks, postTask, deleteTask, checkedTask, editTask }
