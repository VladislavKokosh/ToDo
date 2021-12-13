import './index.scss'

const Tag = ({theme, text}) => {
  return(
    <div className={`tag tag__${theme}`}>
      {text}
    </div>
  )
}

export { Tag }
