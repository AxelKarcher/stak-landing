import './Spinner.scss'

const Spinner = ({size, thick}) => {
  return (
    <div
      id='spinner-container'
      style={{width: size || 40, height: size || 40, borderWidth: thick || 5}}
    />
  )
}

export default Spinner