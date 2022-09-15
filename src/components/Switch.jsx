import OldSwitch from 'react-ios-switch'

import {primary, secondary, light} from '../config/colors'

const Switch = ({value, disabled, label, setter, style}) => {
  return (
    <OldSwitch
      checked={value}
      disabled={disabled}
      handleColor={secondary}
      name={label}
      offColor={light}
      onChange={(e) => setter(e)}
      onColor={primary}
      style={{cursor: 'pointer', ...style}}
    />
  )
}

export default Switch