import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Plans from '../pages/Plans/Plans'
import Courses from '../pages/Courses/Courses'
import AboutUs from '../pages/AboutUs/AboutUs'
import Contact from '../pages/ContactUs/Contact'
import Support from '../pages/Support/Support'

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/plans' element={<Plans/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/support' element={<Support/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes