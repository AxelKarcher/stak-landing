import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {HiOutlineArrowSmLeft} from 'react-icons/hi'

import Button from '../../components/Button/Button'
import Project from '../../components/Project/Project'
import './ProjectsPage.scss'
import Switch from '../../components/Switch/Switch'
import ScreenSizeModal from '../../components/ScreenSizeModal'
import {margin} from '../../config/ui'
import VisualizerModal from '../../components/VisualizerModal/VisualizerModal'

// omnegy
import omnegyLogo from '../../assets/images/omnegy/logo.png'
import omnegy1 from '../../assets/images/omnegy/1.jpg'
import omnegy2 from '../../assets/images/omnegy/2.jpg'
import omnegy3 from '../../assets/images/omnegy/3.jpg'
import omnegy4 from '../../assets/images/omnegy/4.jpg'

// epitech
import epitechLogo from '../../assets/images/epitech/logo.png'
import epitech1 from '../../assets/images/epitech/1.jpg'
import epitech2 from '../../assets/images/epitech/2.jpg'
import epitech3 from '../../assets/images/epitech/3.png'
import epitech4 from '../../assets/images/epitech/4.png'

// motzer
import motzer1 from '../../assets/images/motzer/1.jpg'

// movieSearcher
import movieSearcher1 from '../../assets/images/movie-searcher/1.jpg'
import movieSearcher2 from '../../assets/images/movie-searcher/2.jpg'
import movieSearcher3 from '../../assets/images/movie-searcher/3.jpg'

// museGiver
import museGiver1 from '../../assets/images/muse-giver/1.jpg'
import museGiver2 from '../../assets/images/muse-giver/2.jpg'

// emg
import emgLogo from '../../assets/images/emg/logo.png'
import emg1 from '../../assets/images/emg/1.jpg'
import emg2 from '../../assets/images/emg/2.jpg'
import emg3 from '../../assets/images/emg/3.jpg'
import emg4 from '../../assets/images/emg/4.jpg'

// TODO
// meilleure façon de get images d'assets

const projects = [
  {
    company: 'Omnegy',
    product: 'Dashboard',
    images: [omnegy1, omnegy2, omnegy3, omnegy4],
    logo: omnegyLogo,
    length: '4 mois',
    year: '2022',
    isPro: true,
    description: 'Dashboard complet pour traders de l\'énergie. ' +
      'Missionné par 5DEGRES, une régie de développeurs. Première expérience ' +
      'professionelle en tant que développeur web Front. Exploitation d\'API, ' +
      'gestion de flux de data et utilisation de "Redux Toolkit".'
  },
  {
    product: 'Muse giver',
    images: [museGiver1, museGiver2],
    length: '1 jour',
    year: '2022',
    isPro: false,
    description: 'Donne aléatoirement un titre du groupe Muse parmi ' +
      'le ou les album(s) séléctionné(s). Le résultat est copié dans le ' +
      'presse-papier pour chercher instantanément la musique sur internet. ' +
      'D\'abord réalisé en JS pur puis en React pour plus de pertinence dans ' +
      'le code.'
  },
  {
    product: 'Movie searcher',
    images: [movieSearcher1, movieSearcher2, movieSearcher3],
    length: '2-3 jours',
    year: '2022',
    isPro: false,
    description: 'Liste de films selon des catégories ou une recherche. Modale avec ' +
      'informations supplémentaires. Exploitation de l\'API "IMDb".'
  },
  {
    product: 'Motzer',
    images: [motzer1],
    length: '1-2 jours',
    year: '2022',
    isPro: false,
    description: 'Réplique du jeu télévisé  "Motus". Back en "Express JS" pour ' +
      'récupérer un mot aléatoirement dans une liste.'
  },
  {
    company: 'EPITECH',
    product: 'AREA',
    images: [epitech1, epitech2, epitech3, epitech4],
    logo: epitechLogo,
    length: '3 mois',
    year: '2022',
    isPro: true,
    description: 'Premier contact avec React & React Native. Project de fin d\'année ' +
      'en équipe. Gestion de widgets et d\'alertes depuis le site web ou ' +
      'l\'application Android. Je m\'étais occupé de faire les Fronts et les liens avec le Back.'
  },
  {
    company: 'EMG',
    product: 'Dashboard',
    images: [emg1, emg2, emg3, emg4],
    logo: emgLogo,
    length: '6 mois',
    year: '2021',
    isPro: true,
    description: 'Premier contact avec le dévelopement web en tout point. ' +
      'Dashboard pour opérateurs/réalisateurs d\'émissions sportives en direct. ' +
      'Exploitation de l\'API Twitch.'
  }
]

const ProjectsPage = () => {

  const navigate = useNavigate()

  const [usedData, setUsedData] = useState()
  const [isProOnly, setIsProOnly] = useState(false)
  const [isDefaultOrder, setIsDefaultOrder] = useState(true)
  const [isScreenModalOn, setIsScreenModalOn] = useState(false)
  const [visualizerData, setVisualizerData] = useState()

  useEffect(() => {
    let newUsedData

    if (isProOnly) {
      newUsedData = projects?.filter((elem) => elem?.isPro)
    } else {
      newUsedData = [...projects]
    }
    setUsedData(isDefaultOrder ? [...newUsedData] : [...newUsedData?.reverse()])
  }, [isProOnly, isDefaultOrder])

  return (
    <div id='projects-page-container'>
      <ScreenSizeModal isOn={isScreenModalOn} handleClose={() => setIsScreenModalOn(false)} />
      <VisualizerModal
        isOn={visualizerData !== undefined}
        handleClose={() => setVisualizerData(undefined)}
        data={visualizerData}
      />
      <div id='header'>
        <Button
          icon={<HiOutlineArrowSmLeft size={30} />}
          label='Retour'
          action={() => navigate('/')}
        />
        <Switch
          value={isProOnly}
          label='Projets pro uniquement'
          setter={setIsProOnly}
        />
        <Switch
          value={isDefaultOrder}
          label='Du plus récent au plus ancien'
          setter={setIsDefaultOrder}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {usedData?.map((elem, i) => (
          <Project
            key={i}
            style={{marginBottom: i === usedData?.length - 1 ? margin : 0}}
            data={elem}
            tooSmallAction={() => setIsScreenModalOn(true)}
            handleVisualizer={() => setVisualizerData(usedData[i])}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage