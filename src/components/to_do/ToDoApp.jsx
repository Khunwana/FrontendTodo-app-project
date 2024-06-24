import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import './ToDoApp.css'
import LogoutComponent from '../to_do/LogoutComponent'
import FooterComponent from '../to_do/FooterComponent'
import HeaderComponent from '../to_do/HeaderComponent'
import ErrorComponent from '../to_do/ErrorComponent'
import ListToDoComponent from '../to_do/ListToDoComponent'
import WelocomeComponent from '../to_do/WelocomeComponent'
import LoginComponent from '../to_do/LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import ToDoComponent from './ToDoComponent'
import AddNewComponent from './AddNewComponent'
import HomePage from '../profile/HomePage'

function AuthenticatedRoute({children})
{
    const authContext = useAuth()
    if(authContext.isAuthenticated)
    { 
        return children
    }
    return <Navigate to="/"/>
}

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
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute >
                                <WelocomeComponent />
                            </AuthenticatedRoute>
                        
                        }/>

                        <Route path='/listToDo' element={
                            <AuthenticatedRoute>
                                <ListToDoComponent />
                            </AuthenticatedRoute>
                        }/>

                        <Route path='/home' element={
                            <AuthenticatedRoute>
                                <HomePage />
                            </AuthenticatedRoute>
                        }/>

                        <Route path='/listToDo/:id' element={
                            <AuthenticatedRoute>
                                <ToDoComponent />
                            </AuthenticatedRoute>
                        }/>
                        <Route path='/addNew' element={
                            <AuthenticatedRoute>
                                <AddNewComponent />
                            </AuthenticatedRoute>
                        }/>
                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        }/>
                        <Route path='*' element={<ErrorComponent />}/>
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}















