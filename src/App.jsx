import Router from './components/Router'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'

// page projets sur tel un peu à chier
// textarea de TextField va pas à la ligne auto

const routes = [
  {path: '/', elem: '/home'},
  {path: '/home', elem: <HomePage />},
  {path: '/projects', elem: <ProjectsPage />},
  {path: '*', elem: '/home'}
]

const App = () => {return (<Router routes={routes} />)}

export default App
