import ModalBase from "./ModalBase/ModalBase"

const ScreenSizeModal = ({isOn, handleClose}) => {
  return (
    <ModalBase
      isOn={isOn}
      handleClose={handleClose}
      style={{fontSize: 30, textAlign: 'center'}}
    >
      Indisponible sur téléphone
    </ModalBase>
  )
}

export default ScreenSizeModal