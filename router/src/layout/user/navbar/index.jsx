import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="About">about</Link></li>
            <li><Link to="Contact">contact</Link></li>
            <li><Link to="blogs">blogs</Link></li>

        </ul>
    </div>
  )
}

export default Navbar