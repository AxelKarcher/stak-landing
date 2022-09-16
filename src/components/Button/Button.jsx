import './Button.scss'
import {primary, light} from '../../config/colors'
import {borderRadius} from '../../config/ui'

const Button = ({label, icon, action, disabled, style, fullWidth, className}) => {
  return (
    <div
      id='button-container'
      className={(disabled ? '' : 'anim') + ' ' + className}
      onClick={action}
      style={{color: disabled ? 'grey' : light, backgroundColor: disabled ? 'lightgrey' : primary,
        cursor: disabled ? 'not-allowed' : 'pointer', width: fullWidth && '100%',
        borderRadius: borderRadius, ...style
      }}
    >
      {icon && <span id='icon' style={{marginRight: label ? 10 : 0}}>{icon}</span>}
      {label && <span>{label}</span>}
    </div>
  )
}

export default Button