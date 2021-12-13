import './index.scss'
import {Tag} from "../../Tag/tag";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {postTask} from "../../../store/actions/tasks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputTask = ({tag}) => {
  const dispatch = useDispatch()
  const [task, setTask] = useState(null)

  const onChange = () => {
    if(task) {
      const newTask = {
        title: task,
        completed: false
      }
      dispatch(postTask(newTask))
      setTask('')
      toast.success('Задача добавлена!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    else{
      toast.warn('Заполните поле для названия задачи!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return(
    <div className='input-task'>
      <div className='input-task__up'>
        <input
          type='text'
          placeholder='+ Add a task, press Enter to save'
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <div
          className='input-task__button'
          onClick={() => onChange()}
        >
          Add
        </div>
        <ToastContainer autoClose={3000}/>
      </div>
      <Tag text={tag.text} theme={tag.theme}/>
    </div>
  )
}

export { InputTask }
