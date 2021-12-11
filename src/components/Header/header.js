import { Icon } from "./Icon";
import { User } from "./User";
import './index.scss'

const Header = () => {
  return(
    <div className='header'>
      <div className='header__info'>
        <Icon/>
        <span className='header__title'>Tasks</span>
      </div>
      <div className='header__user-info'>
        <User/>
      </div>
    </div>
  )
}

export { Header }
