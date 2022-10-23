import ModalBase from "./ModalBase/ModalBase"

const ScreenSizeModal = ({isOn, handleClose}) => {
  return (
    <ModalBase
      isOn={isOn}
      handleClose={handleClose}
      style={{fontSize: 30, textAlign: 'center'}}
    >
      Visionneuse disponible sur un écran plus grand
    </ModalBase>
  )
}

export default ScreenSizeModal