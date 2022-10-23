import './Button.scss'
import {primary, light} from '../../config/colors'

const Button = ({label, icon, action, disabled, style, fullWidth, className}) => {
  return (
    <div
      id='button-container'
      className={(disabled ? '' : 'anim') + ' ' + className}
      onClick={!disabled ? action : null}
      style={{color: disabled ? 'grey' : light, backgroundColor: disabled ? 'lightgrey' : primary,
        cursor: disabled ? 'not-allowed' : 'pointer', width: fullWidth && '100%', ...style
      }}
    >
      {icon && <span id='icon' style={{marginRight: label ? 10 : 0}}>{icon}</span>}
      {label && <span>{label}</span>}
    </div>
  )
}

export default Button