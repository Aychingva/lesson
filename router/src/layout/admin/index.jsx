import React from 'react'
import Navbar from './navbar'
import Foot from './footer'
import { Outlet } from 'react-router'

function Adminlayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Foot/>
    </div>
  )
}

export default Adminlayout