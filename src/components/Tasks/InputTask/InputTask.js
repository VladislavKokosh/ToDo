import './index.scss'

const InputTask = () => {
  return(
    <div className='input-task'>
      <input type='text' placeholder='+ Add a task, press Enter to save'/>
      <div className='input-task__button'>Add</div>
    </div>
  )
}

export { InputTask }
