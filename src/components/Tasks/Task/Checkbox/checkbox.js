import {useState} from "react";
import {useDispatch} from "react-redux";
import {checkedTask} from "../../../../store/actions/tasks";
import './index.scss'

const Checkbox = ({ task }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(task.completed)
  const onChange = () => {
    setChecked(!checked)
    dispatch(checkedTask(task))
  }
  return(
    <div
      className={`checkbox ${checked ? 'checkbox__active' : ''}`}
      onClick={() => onChange()}
    />
  )
}

export { Checkbox }
