import './Toggle.scss'
import {secondary} from '../../config/colors'

// choices EXAMPLE: [{label: 'ON', value: true}, {label: 'OFF', value: false}]

const Toggle = ({title, choices, value, setter, style}) => {
  return (
    <div id='toggleContainer' style={{...style}}>
      {title && <div style={{marginBottom: 10, fontWeight: 'bold'}}>{title}</div>}
      <div id='choices' style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
        {
          choices?.map((_elem, i) => (
            <div
              key={i}
              className='toggleElem'
              style={{marginRight: 10,
                backgroundColor: value === choices[i].value ? secondary : '',
                borderColor: value === choices[i].value ? secondary : ''
              }}
              onClick={() => setter(choices[i].value)}
            >
              {choices[i].label}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Toggle