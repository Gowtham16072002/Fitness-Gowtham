import React from 'react'
import logo from "./assets/weightlifting.png";
import "./Styles/NavBar.css"
import './App.css'
import { Link, useNavigate } from 'react-router-dom';
import Contact from './Contact'

function NavBar() {

    const navigate  =  useNavigate();
    
  return (
    <div>
          <nav className="navbar">
              <div className="logo">
                  <img
                      src={logo}
                      alt="VictoryFit Logo"
                      className="logo-img"
                  />
                  <h1>VictoryFit</h1>
              </div>
              <ul className="nav-links">
                  
                  <Link className='Nav-route' to="/"><li> Home</li></Link>
                  <Link className='Nav-route' to="/about"><li>About</li></Link>
                  <Link className='Nav-route' to="/service"><li>Services</li></Link>
                  <Link className='Nav-route' to="/programs"><li>Programs</li></Link>
                  <Link className='Nav-route' to="/contact"><li>Contact</li></Link>
                  
              </ul>
              <button onClick={()=>{navigate("/contact")}} className="btn primary"><b>Get started</b></button>
          </nav>
    </div>
  )
}

export default NavBar