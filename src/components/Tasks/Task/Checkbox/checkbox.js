import './index.scss'
import {useState} from "react";

const Checkbox = ({ completed }) => {
  const [checked, setChecked] = useState(completed)
  return(
    <div
      className={`checkbox ${checked ? 'checkbox__active' : ''}`}
      onClick={() => setChecked(!checked)}
    />
  )
}

export { Checkbox }
