import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';
import '../profile/assets/css/style.css';
import { useState } from 'react';

export default function HeaderComponent() {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  const [showNav, setShowNav] = useState(false);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  function logout() {
    authContext.logout();
  }

  return (
    <nav className="navbar fixed-top border-bottom border-light border-5 p-2">
      <div className="navbar-container">
        {/* Logo Section (Left side) */}
        <div className="logo">
          <h1>Khunwana</h1>
        </div>

        {/* Menu Icon */}
        <div className="menu-icon" onClick={handleShowNavbar}>
          <h1>=</h1>
        </div>

        {/* Navbar Items (Right side) */}
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            {/* Non-authenticated links */}
            {!isAuthenticated && (
              <>
                <li className="nav-item"><Link className="nav-link" to="#about">About Me</Link></li>
                <li className="nav-item"><Link className="nav-link" to="#education">Education</Link></li>
                <li className="nav-item"><Link className="nav-link" to="#experience">Experience</Link></li>
                <li className="nav-item"><Link className="nav-link" to="#skills">Skills</Link></li>
                <li className="nav-item"><Link className="nav-link" to="#contact">Contact Me</Link></li>
              </>
            )}

            {/* Authenticated links */}
            {isAuthenticated && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/welcome/:username">Welcome</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/listTodo">To-Do</Link></li>
              </>
            )}

            {/* Admin / Logout links */}
            {!isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/login">Admin</Link></li>}
            {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}
          </ul>
        </div>
      </div>
    </nav>
  );
}
