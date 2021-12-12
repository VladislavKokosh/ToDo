import {LeftBar} from "../../components/LeftBar/leftBar";
import './index.scss'
import {InputTask} from "../../components/Tasks";
import { Tasks as TasksModule}  from '../../modules/Tasks/tasks'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTasks} from "../../store/actions/tasks";
import {getCompletedTasksSelector, getProcessTasksSelector, getTasksSelector} from "../../store/selectors/tasks";


const Tasks = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(getTasksSelector)
  const processTasks = useSelector(getProcessTasksSelector)
  const completedTasks = useSelector(getCompletedTasksSelector)

  useEffect(() => {
    dispatch(getTasks())
    // eslint-disable-next-line
  }, [])

  return(
    <div className='page'>
      <LeftBar/>
      <div className='page__tasks-container'>
        <div className='page__tasks-container__left'>
          <InputTask tag={{theme: 'primary', text: `Total: ${tasks?.length}`}}/>
          <TasksModule tasks={processTasks} tag={{theme: 'blue', text: `To do: ${processTasks?.length}`}}/>
        </div>
        <div className='page__tasks-container__right'>
          <TasksModule tasks={completedTasks} tag={{theme: 'green', text: `Completed: ${completedTasks?.length}`}}/>
        </div>
      </div>
    </div>

  )
}

export { Tasks }
