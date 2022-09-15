import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import {background} from '../config/colors'

const Router = ({routes}) => {
  return (
    <div style={{height: '100vh', backgroundColor: background}}>
      <BrowserRouter>
        <Routes>
          {routes.map(({path, elem}, i) => (
            <Route
              key={i}
              path={path}
              element={typeof elem === 'string' ? <Navigate replace to={elem} /> : elem}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router