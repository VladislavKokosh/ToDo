import './index.scss'
import {Tag} from "../../Tag/tag";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editTask, postTask, selectTask} from "../../../store/actions/tasks";
import { ToastContainer, toast } from 'react-toastify';
import {selectTaskSelector} from "../../../store/selectors/tasks";

const InputTask = ({tag}) => {
  const dispatch = useDispatch()
  const [task, setTask] = useState('')
  const selectedTask = useSelector(selectTaskSelector)

  useEffect(() => {
    !!selectedTask ? setTask(selectedTask.title) : setTask('')
  }, [selectedTask])

  const onAdd = () => {
    if(task) {
      const newTask = {
        userId: new Date(),
        id: new Date(),
        title: task,
        completed: false
      }
      dispatch(postTask(newTask))
      setTask('')
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

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      onClick()
    }
  }

  const onEdit = () => {
    const editTaskObj = {...selectedTask, title: task}
    dispatch(editTask(editTaskObj))
    dispatch(selectTask(null))
    setTask('')
  }

  const onClick = () => {
    !!selectedTask ? onEdit() : onAdd()
  }


  const hasButtonName = !!selectedTask ? 'Save' : 'Add'

  return(
    <div className='input-task'>
      <div className='input-task__up'>
        <input
          type='text'
          placeholder='+ Add a task, press Enter to save'
          value={task}
          onChange={e => setTask(e.target.value)}
          onKeyDown={e => onEnter(e)}
        />
        <div
          className='input-task__button'
          onClick={() => onClick()}
        >
          {hasButtonName}
        </div>
      </div>
      <Tag text={tag.text} theme={tag.theme}/>
    </div>
  )
}

export { InputTask }
