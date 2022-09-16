import {useState} from 'react'

import {primary, light} from '../config/colors'
import {margin} from '../config/ui'

const Contact = ({data, style}) => {

  const [isHover, setIsHover] = useState(false)

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', ...style}}>
      <data.icon
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={data?.link ? () => window.open(data?.link) : data?.action || null}
        style={{marginBottom: margin / 3, cursor: (data?.link || data?.action) && 'pointer'}}
        size={120}
        color={((data?.link || data?.action) && isHover) ? primary : light}
      />
      <span>{data?.label}</span>
    </div>
  )
}

export default Contact