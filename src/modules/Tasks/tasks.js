import { Tag } from '../../components'
import { Task } from '../../components';
import './index.scss'

const Tasks = ({tag, tasks}) => {
  const hasTasks = !!tasks.length && tasks.map(task => (
    <Task key={task.id} task={task}/>
  ))

  return(
    <div className='tasks'>
      <Tag theme={tag.theme} text={tag.text}/>
      <div className='tasks__item'>
        {hasTasks}
      </div>
    </div>
  )
}

export { Tasks }
