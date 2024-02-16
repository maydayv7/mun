
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs/aboutUs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/AboutUs' element={<AboutUs/>}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
