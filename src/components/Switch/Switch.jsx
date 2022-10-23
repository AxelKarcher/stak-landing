import OldSwitch from 'react-ios-switch'

import {primary, secondary, light} from '../../config/colors'
import {margin} from '../../config/ui'
import './Switch.scss'

// TODO
// cursor en grab sur le bordel principal

const Switch = ({value, disabled, label, setter, style, textStyle}) => {
  return (
    <div id='switch-container' style={{...style}}>
      {
        label &&
        <span style={{color: light, fontWeight: 'bold', marginRight: margin, ...textStyle}}>
          {label}
        </span>
      }
      <div id='switch'>
        <OldSwitch
          checked={value}
          disabled={disabled}
          handleColor={secondary}
          offColor={light}
          onChange={(e) => setter(e)}
          onColor={primary}
        />
      </div>
    </div>
  )
}

export default Switch