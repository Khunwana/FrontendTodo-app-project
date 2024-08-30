import { Link } from 'react-router-dom'
import {  useAuth } from './security/AuthContext'
import '../profile/assets/css/style.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
export default function HeaderComponent()
{
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    const [showNav, setShowNav] = useState(false)

    const toggleNavItems = () => {
    setShowNav(!showNav)
    }

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    function logout()
    {
        authContext.logout()
    }
    return (
      
        <nav className="navbar fixed-top border-bottom border-light border-5  p-2">
        {/* <div className="container"> */}
          <div className="logo">
            <h1>Khunwana</h1>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
          {/* <Hamburger /> */}
          <h1>=</h1>
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                {/* <NavLink to="/">Home</NavLink> */}
                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>}
              </li>
              <li>
                {/* <NavLink to="/blog">Blog</NavLink> */}
                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/welcome/:username">Welcome</Link></li>}
              </li>
              <li>
                {/* <NavLink to="/projects">Projects</NavLink> */}
                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/listTodo">To-Do</Link></li>}
              </li>
              <li>
                {/* <NavLink to="/about">About</NavLink> */}
                {/* {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/">home</Link></li>} */}
              </li>
              <li>
                {/* <NavLink to="/contact">Contact</NavLink> */}
                {!isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/login">Admin</Link></li> }   
                 {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}
              </li>
            </ul>
          </div>
        {/* </div> */}
      </nav>
       
    )
}