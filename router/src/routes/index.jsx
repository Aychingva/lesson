import React from 'react'
import Home from '../pages/user/home'
import Contact from '../pages/user/contact'
import About from '../pages/user/about'
import { Route, Routes } from 'react-router'
import Navbar from '../layout/user/navbar'
import Footer from '../layout/user/footer'
import Userlayout from '../layout/user'
import Adminlayout from '../layout/admin'
import Dashboard from '../pages/admin/dashboard'
import Categories from '../pages/admin/categories'
import Table from '../pages/admin/tables'
import Blogs from '../pages/user/blogs'
import Singleblog from '../pages/user/singleblog'

function Routesss() {
  return (
    <div>
       
        <Routes>
            <Route path="/" element={<Userlayout/>}>
                <Route path="/" index element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="blogs" element={<Blogs/>}/>

                <Route path="blogs/:id" element={<Singleblog/>}/>
                <Route path="Contact" element={<Contact/>}/>

            </Route>
                <Route path="/admin" element={<Adminlayout/>}>
                    <Route path="dashboard" index element={<Dashboard/>}/>
                    <Route path="categories" element={<Categories/>}/>
                    <Route path="table" element={<Table/>}/>
            </Route>
            {/* <Route path="*" element={<Notfound/>}/> */}
       
        </Routes>
      
    </div>
  )
}

export default  Routesss