import { createSelector } from 'reselect'

const getTasks = (state) => state.tasks.tasks;
const getError = (state) => state.tasks.error;
export const selectTaskSelector = (state) => state.tasks.selectTask;
export const loaderSelector = (state) => state.loader.isLoading;

export const getTasksSelector = createSelector(getTasks,(tasks) => tasks)
export const getProcessTasksSelector = createSelector(getTasks,(tasks) => tasks.filter(task => !task.completed))
export const getTaskById = (id) => createSelector(getTasks, (tasks) => tasks.find((task) => task.id === id))
export const getCompletedTasksSelector = createSelector(getTasks,(tasks) => tasks.filter(task => task.completed))
export const getErrorSelector = createSelector(getError,(error) => error)
