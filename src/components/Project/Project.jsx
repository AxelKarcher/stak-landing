import {useState, useEffect, useRef} from 'react'

import PanelBase from '../PanelBase'
import Image from '../Image'
import {margin} from '../../config/ui'
import './Project.scss'
import VisualizerModal from '../VisualizerModal/VisualizerModal'

const delay = 2000

const Project = ({data, style, tooSmallAction}) => {

  const [windowWidth, setWindowWidth] = useState()
  const [index, setIndex] = useState(0)
  const [isVisualizer, setIsVisualizer] = useState(false)
  const indexIt = useRef(null)

  useEffect(() => {
    setWindowWidth(getWindowWidth())
    window.addEventListener('resize', () => setWindowWidth(getWindowWidth()))

    return () => {
      window.removeEventListener('resize', () => setWindowWidth(getWindowWidth()))
    }
  }, [])

  useEffect(() => {
    indexIt.current = setInterval(() => {
      setIndex((old) => old < data?.images?.length - 1 ? old + 1 : 0)
    }, delay)

    return (() => clearInterval(indexIt.current))
  }, [data])

  const getWindowWidth = () => {
    const {innerWidth} = window

    return innerWidth
  }

  return (
    <PanelBase
      id='project-container'
      style={{...style}}
    >
      <VisualizerModal
        isOn={isVisualizer}
        handleClose={() => setIsVisualizer(false)}
        images={data?.images}
        title={(data?.copany ? data?.company + ' - ' : '') + data?.product}
      />
      <div
        id='texts'
        style={{display: 'flex', flexDirection: 'column',
          alignItems: 'center', marginRight: margin
        }}
      >
        <div id='title'>
          {data?.logo && <Image src={data?.logo} height={60} style={{marginRight: margin}} />}
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div id='first'>
              {(data?.company ? data?.company : 'Perso') + ' - ' + data?.product}
            </div>
            <div id='second'>{data?.length + ' - ' + data?.year}</div>
          </div>
        </div>
        <div id='description'>{data?.description}</div>
      </div>
      <div id='slider-frame' onClick={windowWidth > 1600 ? () => setIsVisualizer(true) : tooSmallAction}>
        <div id='slider' style={{transform: `translateX(${-index * 100}%)`}}>
          {data?.images?.map((elem, i) => (<Image key={i} src={elem} size={350} />))}
        </div>
      </div>
    </PanelBase>
  )
}

export default Project