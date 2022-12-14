import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import './HomePage.scss'
import {margin, padding} from '../../config/ui'
import Button from '../../components/Button/Button'
import Skill from '../../components/Skill/Skill'
import {GrMysql} from 'react-icons/gr'
import {FiMail} from 'react-icons/fi'
import {SiDiscord, SiLinkedin, SiExpress, SiReact} from 'react-icons/si'
import Contact from '../../components/Contact'
import {FaArrowRight, FaHandshake} from 'react-icons/fa'
import MailModal from '../../components/MailModal'
import {IoMdDownload} from 'react-icons/io'
import {BsPhoneFill} from 'react-icons/bs'
import {BiShowAlt} from 'react-icons/bi'

const skills = [
  {icon: SiReact, label: 'React & React Native', hoverColor: '#00D8FF'},
  {icon: SiExpress, label: 'Express JS', hoverColor: '#F7DF1D'},
  {icon: GrMysql, label: 'MySQL', hoverColor: '#00758F'},
]

const HomePage = () => {

  const contacts = [
    {
      icon: FiMail,
      label: 'axel.karcher@epitech.eu',
      action: () => setIsMailModalOn(true)
    },
    {
      icon: SiLinkedin,
      label: 'Profil LinkedIn',
      link: 'https://www.linkedin.com/in/axel-karcher-6348411a5/'
    },
    {
      icon: FaHandshake,
      label: 'Profil Malt',
      link: 'https://www.malt.fr/profile/axelkarcher',
      isImg: true
    },
    {icon: BsPhoneFill, label: '06 45 43 98 54'}
  ]

  const navigate = useNavigate()

  const [isMailModalOn, setIsMailModalOn] = useState(false)

  return (
    <div id='home-page-container'>
      <MailModal isOn={isMailModalOn} handleClose={() => setIsMailModalOn(false)} />
      <div id='left-part' style={{padding: padding, paddingLeft: padding * 2}}>
        <div style={{flexDirection: 'column'}}>
          <div id='title'>STAK</div>
          <h1>
            Auto-entreprise de développement web.
            <br /><br />
            À la recherche de missions Front ou Full-Stack pour
            <br />
            donner vie à vos maquettes à travers un travail rigoureux.
          </h1>
        </div>
        <div id='left-btns'>
          <Button
            label='Portfolio'
            style={{marginRight: margin}}
            icon={<BiShowAlt />}
            action={() => navigate('/projects')}
          />
          <a download='Axel_Karcher_CV_2022.pdf' href='cv.pdf' style={{textDecoration: 'none'}}>
            <Button label='CV' icon={<IoMdDownload />} />
          </a>
        </div>
        <div id='skills'>
          {skills?.map((elem, i) => (
            <Skill
              key={i}
              data={elem}
              style={{marginRight: i !== skills?.length - 1 ? margin * 2 : 0}}
            />
          ))}
        </div>
      </div>
      <div id='right-part'>
        {contacts?.map((elem, i) => (
          <Contact
            key={i}
            data={elem}
            style={{marginBottom: i < contacts?.length - 1 ? margin * 3 : 0}}
          />
        ))}
      </div>
    </div>
  )
}

export default HomePage
