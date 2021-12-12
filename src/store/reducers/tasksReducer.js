import {GET_TASKS_FAILURE, GET_TASKS_SUCCESS} from "../types/tasks";


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
    default: return state
  }
}

export { tasksReducer }
