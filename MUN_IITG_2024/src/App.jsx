
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/AboutUs/aboutUs'
import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home from "./pages/Home"
import  './App.css'






function App(){
  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route path='/AboutUs' element={<AboutUs/>}  />
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
       </>
   
  )
}


export default App;