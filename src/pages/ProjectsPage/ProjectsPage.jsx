import {useNavigate} from 'react-router-dom'

import './ProjectsPage.scss'
import Button from '../../components/Button/Button'

const ProjectsPage = () => {

  const navigate = useNavigate()

  return (
    <div id='projects-page-container'>
      <Button label='Retourner en arrière' action={() => navigate('/')} />
    </div>
  )
}

export default ProjectsPage