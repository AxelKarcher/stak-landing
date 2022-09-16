import Router from './components/Router'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'

// background-color de right-part en dur dans le scss version tel
// textarea de TextField va pas à la ligne auto
// margin-bottom de left-btns en dur vesion tel

const routes = [
  {path: '/', elem: '/home'},
  {path: '/home', elem: <HomePage />},
  {path: '/projects', elem: <ProjectsPage />},
  {path: '*', elem: '/home'}
]

const App = () => {return (<Router routes={routes} />)}

export default App
