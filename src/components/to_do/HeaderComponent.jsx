import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';
import { Link as ScrollLink } from 'react-scroll';  // Import react-scroll's Link component
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
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="about" smooth={true} duration={500}>
                    About Me
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="education" smooth={true} duration={500}>
                    Education
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="experience" smooth={true} duration={500}>
                    Experience
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="skills" smooth={true} duration={500}>
                    Skills
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink className="nav-link" to="contact" smooth={true} duration={500}>
                    Contact Me
                  </ScrollLink>
                </li>
              </>
            )}

            {/* Authenticated links */}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/welcome/:username">
                    Welcome
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/listTodo">
                    To-Do
                  </Link>
                </li>
              </>
            )}

            {/* Admin / Logout links */}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Admin
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={logout}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
