import {
  CHECKED_TASK_FAILURE,
  CHECKED_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  EDIT_TASK_SUCCESS,
  GET_TASKS_FAILURE,
  GET_TASKS_SUCCESS,
  POST_TASK_FAILURE,
  POST_TASK_SUCCESS,
  SELECT_TASK
} from "../types/tasks"

const initState = {
  tasks: [],
  selectTask: null,
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
    case CHECKED_TASK_SUCCESS:
      const filterTasks = state.tasks.filter(task => task.id !== action.payload.id)
      const editTask = {...action.payload, completed: !action.payload.completed}
      return { ...state, tasks: [...filterTasks, editTask]}
    case CHECKED_TASK_FAILURE:
      return {...state, error: action.payload}
    case SELECT_TASK:
    {
      const task = !!action.payload && !!state.selectTask && action.payload.id === state.selectTask.id ? null : action.payload
      return {...state, selectTask: task}
    }
    case EDIT_TASK_SUCCESS:
      const editTasks = state.tasks.map(task => task.id === action.payload.id ? {...task, title: action.payload.title}: task)
      return { ...state, tasks: editTasks}
    case EDIT_TASK_FAILURE:
      return {...state, error: action.payload}
    default: return state
  }
}

export { tasksReducer }
