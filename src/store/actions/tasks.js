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
  CHECKED_TASK_SUCCESS,
  CHECKED_TASK_FAILURE,
  SELECT_TASK,
  EDIT_TASK,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE
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

const checkedTask = (id) => (
  {
    type: CHECKED_TASK,
    payload: id
  }
)

const checkedTaskSuccess = (task) => (
  {
    type: CHECKED_TASK_SUCCESS,
    payload: task
  }
)


const checkedTaskFailure = (error) => (
  {
    type: CHECKED_TASK_FAILURE,
    payload: error
  }
)

const selectTask = (task) => (
  {
    type: SELECT_TASK,
    payload: task
  }
)

const editTask = (task) => (
  {
    type: EDIT_TASK,
    payload: task
  }
)

const editTaskSuccess = (task) => (
  {
    type: EDIT_TASK_SUCCESS,
    payload: task
  }
)


const editTaskFailure = (error) => (
  {
    type: EDIT_TASK_FAILURE,
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
  checkedTaskFailure,
  selectTask,
  editTask,
  editTaskSuccess,
  editTaskFailure
}
