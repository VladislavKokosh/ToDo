import './index.scss'
import {useState} from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(true)
  return(
    <div
      className={`checkbox ${checked ? 'checkbox__active' : ''}`}
      onClick={() => setChecked(!checked)}
    />
  )
}

export { Checkbox }
