import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/user/home'
import Contact from './pages/user/contact'
import About from './pages/user/about'
import { Route, Routes } from 'react-router'
import Navbar from './layout/user/navbar'
import Footer from './layout/user/footer'
import Routesss from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routesss/>

      </BrowserRouter>
    
     
    </div>
  )
}

export default App
