import {GET_TASKS, GET_TASKS_SUCCESS, GET_TASKS_FAILURE } from "../types/tasks";

const getTasks = () => (
  {
    type: GET_TASKS
  }
)

const getTasksSuccess = (data) => (
  {
    type: GET_TASKS_SUCCESS,
    payload: data
  }
)

const getTasksFailure = (error) => (
  {
    type: GET_TASKS_FAILURE,
    payload: error
  }
)

export { getTasks, getTasksSuccess, getTasksFailure }
