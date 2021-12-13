import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  POST_TASK_SUCCESS, POST_TASK, POST_TASK_FAILURE
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


export {
  getTasks,
  getTasksSuccess,
  getTasksFailure,
  postTask,
  postTaskSuccess,
  postTaskFailure
}
