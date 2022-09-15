import {useState} from 'react'

import {primary, light} from '../config/colors'
import {margin} from '../config/ui'

const Contact = ({data}) => {

  const [isHover, setIsHover] = useState(false)

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <data.icon
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => window.open(data?.link)}
        style={{marginBottom: margin / 3, cursor: data?.link !== undefined && 'pointer'}}
        size={120}
        color={(data?.link !== undefined && isHover) ? primary : light}
      />
      <span>{data?.label}</span>
    </div>
  )
}

export default Contact