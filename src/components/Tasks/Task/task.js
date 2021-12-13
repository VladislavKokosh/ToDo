import {Checkbox} from "./Checkbox/checkbox";
import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import './index.scss'
import {useDispatch} from "react-redux";
import {deleteTask} from "../../../store/actions/tasks";
import {ToastContainer, toast} from "react-toastify";

const Task = ({task}) => {
  const dispatch = useDispatch()
  const onChange = (id) => {
    dispatch(deleteTask(id))
    toast.success('Задача удалена!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
        <ToastContainer autoClose={3000}/>
      </div>
    </div>
  )
}

export { Task }
