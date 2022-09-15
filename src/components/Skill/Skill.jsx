import {useState} from 'react'

import './Skill.scss'

const Skill = ({data, style}) => {

  const [isHover, setIsHover] = useState(false)

  return (
    <div
      id='skill-container'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{...style}}
    >
      <div id='skill-label'>{isHover && data?.label}</div>
      <data.icon id='icon' size={175} color={isHover ? data?.hoverColor : 'white'} />
    </div>
  )
}

export default Skill