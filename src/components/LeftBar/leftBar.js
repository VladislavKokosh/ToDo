import menu from '../../assets/icons/menu.svg'
import './index.scss'

const LeftBar = () => {
  return(
    <div className='left-bar'>
      <div className='left-bar__box'>
        <img src={menu} className='left-bar__image' alt=''/>
      </div>
    </div>
  )
}

export { LeftBar }
