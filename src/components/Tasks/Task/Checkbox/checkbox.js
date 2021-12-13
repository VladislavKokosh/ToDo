import './index.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {checkedTask} from "../../../../store/actions/tasks";


const Checkbox = ({ task }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(task.completed)
  const onChange = () => {
    setChecked(!checked)
    const editTask = {
      id: task.id,
      completed: !checked
    }
    console.log(editTask)
    dispatch(checkedTask(editTask))
  }
  return(
    <div
      className={`checkbox ${checked ? 'checkbox__active' : ''}`}
      onClick={() => onChange()}
    />
  )
}

export { Checkbox }
