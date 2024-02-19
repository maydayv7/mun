
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/aboutUs'
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home from "./pages/Home"
import  './App.css'
import ContactUs from './pages/contactUs'






function App(){
  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route path='/ContactUs' element={<ContactUs/>}  />
          <Route path='/AboutUs' element={<AboutUs/>}  />
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
       </>
   
  )
}


export default App;