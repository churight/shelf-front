import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Shop from './pages/Shop'
import { ROUTES } from './constants/routes'
import MainLayout from './components/MainLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />} >
          <Route index element={<Shop />} />
          <Route path={ROUTES.SHOP} element={<Shop />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
