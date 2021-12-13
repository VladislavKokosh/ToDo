import {Checkbox} from "./Checkbox/checkbox";
import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import './index.scss'
import {useDispatch} from "react-redux";
import {deleteTask} from "../../../store/actions/tasks";

const Task = ({task}) => {
  const dispatch = useDispatch()
  const onChange = (id) => {
    dispatch(deleteTask(id))
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
        <img src={editIcon} alt=''/>
        <img src={deleteIcon} alt='' onClick={() => onChange(task.id)}/>
      </div>
    </div>
  )
}

export { Task }
