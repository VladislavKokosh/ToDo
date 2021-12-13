import {Checkbox} from "./Checkbox/checkbox";
import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import './index.scss'
import {useDispatch} from "react-redux";
import {deleteTask, selectTask} from "../../../store/actions/tasks";

const Task = ({task}) => {
  const dispatch = useDispatch()

  const onDelete = () => {
    dispatch(deleteTask(task.id))
    dispatch(selectTask(null))
  }

  const onChange = () => {
    dispatch(selectTask(task))
  }

  return(
    <div className='task'>
      <div className='task__content'>
        <Checkbox task={task}/>
        <div
          className={task.completed ? 'task__content-title-done' : 'task__content-title'}
        >
          {task.title}
        </div>
      </div>
      <div className='task__buttons'>
        <img className='task__buttons-button' src={editIcon} alt='' onClick={onChange}/>
        <img className='task__buttons-button' src={deleteIcon} alt='' onClick={onDelete}/>
      </div>
    </div>
  )
}

export { Task }
