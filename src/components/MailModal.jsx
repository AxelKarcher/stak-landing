import {useState} from 'react'
import axios from 'axios'

import ModalBase from './ModalBase/ModalBase'
import TextField from './TextField/TextField'
import Button from './Button/Button'
import {margin} from '../config/ui'
import Spinner from './Spinner/Spinner'

const MailModal = ({isOn, handleClose}) => {

  const [senderMail, setSenderMail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    setIsLoading(true)

    axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_dx9fz8c',
      template_id: 'template_shfxwh9',
      user_id: '1h-oZxKbv5CUYun6y',
      template_params: {sender: senderMail, message: message}
    })
      .catch((err) => console.error('err:', err))
      .finally(() => {
        setSenderMail('')
        setMessage('')
        setIsLoading(false)
        handleClose()
      })
  }

  return (
    <ModalBase
      isOn={isOn}
      handleClose={handleClose}
      isBlocked={isLoading}
      title={'Contactez-moi'}
      style={{width: '90%'}}
    >
      <TextField
        fullWidth
        style={{marginBottom: margin}}
        label='Votre adresse mail'
        value={senderMail}
        action={(e) => setSenderMail(e)}
      />
      <TextField
        style={{marginBottom: margin}}
        lines={10}
        label='Votre message'
        value={message}
        action={(e) => setMessage(e)}
      />
      {
        isLoading
        ?
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Spinner />
        </div>
        :
        <Button
          disabled={!senderMail?.length || !message?.length}
          label='Envoyer'
          action={handleSend}
        />
      }
    </ModalBase>
  )
}

export default MailModal