import { HIDE_LOADER, SHOW_LOADER } from "../types/loader";

const showLoader = () => ({
  type: SHOW_LOADER
})

const hideLoader = () => ({
  type: HIDE_LOADER
})

export { showLoader, hideLoader }
