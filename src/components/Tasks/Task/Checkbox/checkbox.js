import './index.scss'
import {useState} from "react";

const Checkbox = ({ task }) => {
  const [checked, setChecked] = useState(task.completed)
  return(
    <div
      className={`checkbox ${checked ? 'checkbox__active' : ''}`}
      onClick={() => setChecked(!checked)}
    />
  )
}

export { Checkbox }
