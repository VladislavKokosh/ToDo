import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTasks} from "../../store/actions/tasks";
import {
  getCompletedTasksSelector,
  getProcessTasksSelector,
  getTasksSelector,
  loaderSelector
} from "../../store/selectors/tasks";
import { Tasks as TasksModule}  from '../../modules/Tasks/tasks'
import {ReactComponent as Loader} from '../../assets/icons/loader.svg';
import {LeftBar} from "../../components";
import {InputTask} from "../../components";
import './index.scss'

const Tasks = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(getTasksSelector)
  const processTasks = useSelector(getProcessTasksSelector)
  const completedTasks = useSelector(getCompletedTasksSelector)
  const isLoading = useSelector(loaderSelector)

  useEffect(() => {
    dispatch(getTasks())
    // eslint-disable-next-line
  }, [])

  const hasTasks = !isLoading ?
    <div className='page__tasks-container'>
      <div className='page__tasks-container__left'>
        <InputTask tag={{theme: 'primary', text: `Total: ${tasks?.length}`}}/>
        <TasksModule tasks={processTasks} tag={{theme: 'blue', text: `To do: ${processTasks?.length}`}}/>
      </div>
      <div className='page__tasks-container__right'>
        <TasksModule tasks={completedTasks} tag={{theme: 'green', text: `Completed: ${completedTasks?.length}`}}/>
      </div>
  </div> : <Loader/>

  return(
    <div className='page'>
      <LeftBar/>
      {hasTasks}
    </div>

  )
}

export { Tasks }
