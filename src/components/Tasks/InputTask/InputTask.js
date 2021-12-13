import './index.scss'
import {Tag} from "../../Tag/tag";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {postTask} from "../../../store/actions/tasks";

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
    }
  }

  return(
    <div className='input-task'>
      <div className='input-task__up'>
        <input
          type='text'
          placeholder='+ Add a task, press Enter to save'
          onChange={e => setTask(e.target.value)}
        />
        <div
          className='input-task__button'
          onClick={() => onChange()}
        >
          Add
        </div>
      </div>
      <Tag text={tag.text} theme={tag.theme}/>
    </div>
  )
}

export { InputTask }
