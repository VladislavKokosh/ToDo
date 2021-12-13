import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  POST_TASK_SUCCESS,
  POST_TASK,
  POST_TASK_FAILURE,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  CHECKED_TASK,
  CHECKED_TASK_SUCCESS, CHECKED_TASK_FAILURE
} from "../types/tasks";

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


const postTask = (data) => (
  {
    type: POST_TASK,
    payload: data
  }
)

const postTaskSuccess = (data) => (
  {
    type: POST_TASK_SUCCESS,
    payload: data
  }
)


const postTaskFailure = (error) => (
  {
    type: POST_TASK_FAILURE,
    payload: error
  }
)

const deleteTask = (id) => (
  {
    type: DELETE_TASK,
    payload: id
  }
)

const deleteTaskSuccess = (id) => (
  {
    type: DELETE_TASK_SUCCESS,
    payload: id
  }
)


const deleteTaskFailure = (error) => (
  {
    type: DELETE_TASK_FAILURE,
    payload: error
  }
)

const checkedTask = (task) => (
  {
    type: CHECKED_TASK,
    payload: task
  }
)

const checkedTaskSuccess = (completed) => (
  {
    type: CHECKED_TASK_SUCCESS,
    payload: completed
  }
)


const checkedTaskFailure = (error) => (
  {
    type: CHECKED_TASK_FAILURE,
    payload: error
  }
)


export {
  getTasks,
  getTasksSuccess,
  getTasksFailure,
  postTask,
  postTaskSuccess,
  postTaskFailure,
  deleteTask,
  deleteTaskSuccess,
  deleteTaskFailure,
  checkedTask,
  checkedTaskSuccess,
  checkedTaskFailure
}
