import {useState, useEffect, useRef} from 'react'

import PanelBase from '../PanelBase'
import Image from '../Image'
import {margin} from '../../config/ui'
import './Project.scss'
import StakLogo from '../../assets/images/stak.png'

const delay = 2000

const Project = ({data, style, handleVisualizer, tooSmallAction}) => {

  const [windowWidth, setWindowWidth] = useState()
  const [index, setIndex] = useState(0)
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
    <PanelBase id='project-container' style={{...style}}>
      <div id='left-part'>
        <div
          id='texts'
          style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
          <div id='title'>
            <Image
              notDraggable
              src={data?.company ? data?.logo : StakLogo}
              height={60}
              width={60}
              style={{marginRight: margin}}
            />
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div id='first'>{(data?.company ? data?.company + ' - '  : '') + data?.product}</div>
              <div id='second'>{data?.length + ' - ' + data?.year}</div>
            </div>
          </div>
          <div id='description'>{data?.description}</div>
        </div>
      </div>
      <div id='right-part'>
        <div id='slider-frame' onClick={windowWidth > 1600 ? () => handleVisualizer() : tooSmallAction}>
          <div id='slider' style={{transform: `translateX(${-index * 100}%)`}}>
            {data?.images?.map((elem, i) => (<Image key={i} src={elem} size={windowWidth > 500 ? 350 : 300} />))}
          </div>
        </div>
      </div>
    </PanelBase>
  )
}

export default Project