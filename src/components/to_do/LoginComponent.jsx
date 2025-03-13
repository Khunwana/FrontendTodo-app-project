import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {  useAuth } from './security/AuthContext'
import './ToDoApp.css'
export default function LoginComponent()
{
    const [username,setUser]=useState('Khunwana')
    const [password,setPassword] = useState('')
    const [showErrorMessage,setShowErrorMessage] = useState(false)
    const navigate = useNavigate();
    const authContext = useAuth()
    
    function UserNameChange(event)
    {
        setUser(event.target.value)
    }

    function ChangedPassword(event)
    {
        setPassword(event.target.value)
    }
   
    async function HandleSubmit()
    {
        if(await authContext.login(username,password))
        {
            // navigate(`/welcome/${username}`)
            navigate('/')
        }
        else
        {
            setShowErrorMessage(true)
        }
    }

    
    return (
        <div className="container">
            <div className="form-container">
                <h1>Login Information</h1>
                {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials</div>}
                <div className="form">
                    <div>
                        <label>User Name </label>
                        <input type="text" name="username" onChange={UserNameChange} value={username} />
                    </div>
                    <div>
                        <label>Password  </label>
                        <input type="password" name="password" onChange={ChangedPassword} value={password} />
                    </div>
                    <div>
                        <button type="button" name="login" onClick={HandleSubmit}>login</button>
                    </div>
                </div>
            </div>
        </div>

    )
}