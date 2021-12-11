import iconHeader from '../../../assets/icons/iconHeader.svg'
import './index.scss'

const Icon = () => {
  return(
    <div className='icon'>
      <img
        className='icon__img'
        src={iconHeader}
        alt=''
      />
      <span className='icon__title'>To-Do</span>
    </div>
  )
}

export { Icon }
