import React from 'react'
import './Header.css'
import logo from '../../../src/assets/img/4.png'
import { Link } from 'react-router-dom'

function Header() {
    const navlist=[
        {
        path:'/',display:'Home'
        },
        {
            path:'/plans',display:'Services'
        },
        {
            path:'/courses',display:'Courses'
        },
        {
            path:'/about',display:'About Us'
        },
    ]
  return (
    <header className='header'>
        <div className="container">
            <div className="nav-container">
                <div className="logo">
                    <div className="logo-image">
                    <img src={logo} alt="" />
                    </div>
                    <h2>Asiet</h2>
                </div>
               
           
            <div className="navigation">
                <ul className='menu'>
                    { navlist.map((item)=>(
                         <li className='nav-item'><Link to={item.path}>{item.display}</Link></li>

                    ))
                       
                    }
                    
                </ul>
            </div>
            </div>
        </div>
    </header>
    

  )
}

export default Header