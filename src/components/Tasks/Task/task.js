import {Checkbox} from "./Checkbox/checkbox";
import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import './index.scss'

const Task = ({task}) => {
  return(
    <div className='task'>
      <div className='task__content'>
        <Checkbox/>
        <div>{task.title}</div>
      </div>
      <div className='task__buttons'>
        <img src={editIcon} alt=''/>
        <img src={deleteIcon} alt=''/>
      </div>
    </div>
  )
}

export { Task }
