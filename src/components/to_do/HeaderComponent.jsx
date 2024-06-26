import { Link } from 'react-router-dom'
import {  useAuth } from './security/AuthContext'

export default function HeaderComponent()
{
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    function logout()
    {
        authContext.logout()
    }
    return (
        <header className="border-bottom border-light border-5  p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https//www.khunwana.co.za">Khunwana</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>}
                                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/welcome/:username">Welcome</Link></li>}
                                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/listTodo">To-Do</Link></li>}
                                {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/home">home</Link></li>}
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            {!isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li> }   
                            {isAuthenticated && <li className="nav-item"><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}