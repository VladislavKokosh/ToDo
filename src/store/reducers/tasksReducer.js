import {
  DELETE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  GET_TASKS_FAILURE,
  GET_TASKS_SUCCESS,
  POST_TASK_FAILURE,
  POST_TASK_SUCCESS
} from "../types/tasks";


const initState = {
  tasks: [],
  error: ''
}

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TASKS_SUCCESS:
      return {...state, tasks: action.payload}
    case GET_TASKS_FAILURE:
      return {...state, error: action.payload}
    case POST_TASK_SUCCESS:
      const newTasks = [...state.tasks, action.payload]
      return { ...state, tasks: newTasks}
    case POST_TASK_FAILURE:
      return {...state, error: action.payload}
    case DELETE_TASK_SUCCESS:
      const filterTask = state.tasks.filter(task => task.id !== action.payload)
      return { ...state, tasks: filterTask}
    case DELETE_TASK_FAILURE:
      return {...state, error: action.payload}
    default: return state
  }
}

export { tasksReducer }
