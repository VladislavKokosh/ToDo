import defaultImage from '../../../assets/icons/user.svg'
import arrow from '../../../assets/icons/arrowUser.svg'
import './index.scss'

const User = ({ name, img }) => {
  const hasName = name ? name : 'Leanne Graham';
  const hasImage = img ? img : defaultImage;

  return(
    <div className='user'>
      <span className='user__name'>{hasName}</span>
      <img className='user__image' src={hasImage} alt=''/>
      <img className='user__arrow' src={arrow} alt=''/>
    </div>
  )
}

export { User }
