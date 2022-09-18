import {useState} from 'react'
import {HiOutlineArrowSmLeft} from 'react-icons/hi'
import {HiOutlineArrowSmRight} from 'react-icons/hi'

import ModalBase from '../ModalBase/ModalBase'
import Button from '../Button/Button'
import Image from '../Image'
import {margin} from '../../config/ui'

const VisualizerModal = ({images, title, isOn, handleClose}) => {

  const [index, setIndex] = useState(0)

  return (
    <ModalBase
      isOn={isOn}
      handleClose={handleClose}
      title={title}
      style={{display: 'flex', alignItems: 'center'}}
    >
      {
        images?.length > 1 &&
        <Button
          icon={<HiOutlineArrowSmLeft />}
          action={() => setIndex(index - 1)}
          disabled={index === 0}
          style={{marginRight: margin}}
        />
      }
      <Image
        canFull
        canDownload
        src={images[index]}
        iconsSize={40}
      />
      {
        images?.length > 1 &&
        <Button
          style={{marginLeft: margin}}
          icon={<HiOutlineArrowSmRight />}
          action={() => setIndex(index + 1)}
          disabled={index === images?.length - 1}
        />
      }
    </ModalBase>
  )
}

export default VisualizerModal