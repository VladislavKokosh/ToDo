import './index.scss'
import {Tag} from "../../Tag/tag";

const InputTask = ({tag}) => {

  return(
    <div className='input-task'>
      <div className='input-task__up'>
        <input type='text' placeholder='+ Add a task, press Enter to save'/>
        <div className='input-task__button'>Add</div>
      </div>
      <Tag text={tag.text} theme={tag.theme}/>
    </div>
  )
}

export { InputTask }
