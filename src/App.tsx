import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Shop from './pages/Shop'
import { ROUTES } from './constants/routes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.SHOP} element={<Shop />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
