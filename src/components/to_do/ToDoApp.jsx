import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './ToDoApp.css'
import LogoutComponent from '../to_do/LogoutComponent'
import FooterComponent from '../to_do/FooterComponent'
import HeaderComponent from '../to_do/HeaderComponent'
import ErrorComponent from '../to_do/ErrorComponent'
import ListToDoComponent from '../to_do/ListToDoComponent'
import WelocomeComponent from '../to_do/WelocomeComponent'
import LoginComponent from '../to_do/LoginComponent'
import AuthProvider from './security/AuthContext'

export default function ToDoApp()
{
    return(
        <div className="ToDoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />}/>
                        <Route path='/login' element={<LoginComponent />}/>
                        <Route path='/welcome/:username' element={<WelocomeComponent />}/>
                        <Route path='/listToDo' element={<ListToDoComponent />}/>
                        <Route path='/logout' element={<LogoutComponent />}/>
                        <Route path='*' element={<ErrorComponent />}/>
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}















