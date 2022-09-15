import {useState, useEffect, useRef} from 'react'

import './App.scss'
import {background, primary, secondary, light, cloudy} from './config/colors'
import {margin, padding} from './config/ui'
import bg1 from './assets/images/bg1.jpg'
import bg2 from './assets/images/bg2.jpg'
import bg3 from './assets/images/bg3.jpg'
import Image from './components/Image'
import Button from './components/Button/Button'
import Skill from './components/Skill/Skill'
import {GrMysql} from 'react-icons/gr'
import {SiExpress} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {FiMail} from 'react-icons/fi'
import {BsFillPhoneFill} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'
import {SiLinkedin} from 'react-icons/si'
import Switch from './components/Switch'
import Contact from './components/Contact'

const delay = 5000
const pics = [bg1, bg2, bg3]
const skills = [
  {icon: SiReact, label: 'React & React Native', hoverColor: '#00D8FF'},
  {icon: SiExpress, label: 'Express JS', hoverColor: '#F7DF1D'},
  {icon: GrMysql, label: 'MySQL', hoverColor: '#00758F'},
]
const contacts = [
  {icon: FiMail, label: 'axel.karcher@epitech.eu'},
  {icon: BsFillPhoneFill, label: '06 45 43 98 54'},
  {icon: SiDiscord, label: 'Rinkusu#7629'},
  {
    icon: SiLinkedin,
    label: 'Axel KARCHER',
    link: 'https://www.linkedin.com/in/axel-karcher-6348411a5/'
  }
]

const App = () => {

  const [picId, setPicId] = useState(0)
  const [isSliderOn, setIsSliderOn] = useState(true)

  const picIt = useRef(null)
  const isSliderOnRef = useRef(null)

  useEffect(() => {
    picIt.current = setInterval(() => {
      if (isSliderOnRef.current) {
        setPicId((old) => old === pics?.length - 1 ? 0 : old + 1)
      }
    }, delay)

    return () => {clearInterval(picIt.current)}
  }, [picId])

  useEffect(() => {isSliderOnRef.current = isSliderOn}, [isSliderOn])

  return (
    <div id='app-container' style={{backgroundColor: background}}>
      <div id='slider' style={{transform: `translate3d(${-picId * 100}%, 0, 0)`}}>
        {pics?.map((elem, i) => (
          <Image key={i} isBasic src={elem} />
        ))}
      </div>
      <div id='true-container' style={{color: light}}>
        <div id='left-part' style={{padding: padding, paddingLeft: padding * 2}}>
          <div id='pic-btns'>
            {pics?.map((_elem, i) => (
              <Button
                className='pic-btn'
                key={i}
                action={() => setPicId(i)}
                style={{width: 30, height: 30, backgroundColor: picId === i ? primary : secondary,
                  marginRight: margin / 2
                }}
              />
            ))}
            <Switch value={isSliderOn} setter={setIsSliderOn} />
          </div>
          <div style={{flexDirection: 'column'}}>
            <div id='title'>STAK</div>
            <h1>
              Auto-entreprise d'Axel KARCHER de développement web en freelance.<br /><br />
              Activement à la recherche de missions Front ou Full-Stack pour<br />
              donner vie à vos maquettes à travers un travail rigoureux.
            </h1>
          </div>
          <div id='skills' style={{marginBottom: margin}}>
            {skills?.map((elem, i) => (
              <Skill
                key={i}
                data={elem}
                style={{marginRight: i !== skills?.length - 1 ? margin * 2 : 0}}
              />
            ))}
          </div>
        </div>
        <div id='right-part' style={{padding: padding, backgroundColor: cloudy}}>
          {contacts?.map((elem, i) => (<Contact key={i} data={elem} />))}
        </div>
      </div>
    </div>
  )
}

export default App
