import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import PublicRoutes from './utils/PublicRoutes'
import Section from './Pages/Section'

function App () {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/:section' element={<Section />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
