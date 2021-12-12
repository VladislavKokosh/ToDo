import {HIDE_LOADER, SHOW_LOADER} from "../types/loader";

const initState = {
  isLoading: true
}

const loaderReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, isLoading: true}
    case HIDE_LOADER:
      return {...state, isLoading: false}
    default:
      return state
  }
}

export { loaderReducer }