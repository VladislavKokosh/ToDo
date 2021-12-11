import {LeftBar} from "../../components/LeftBar/leftBar";
import './index.scss'
import {InputTask} from "../../components/Tasks";

const Tasks = () => {
  return(
    <div className='tasks-container'>
      <LeftBar/>
      <div style={{width: '100%', padding: '24px'}}>
        <InputTask/>
      </div>
    </div>
  )
}

export { Tasks }
