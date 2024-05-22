import { useState } from 'react'
import './ToDoApp.css'
export default function ToDoApp()
{
    return(
        <div className="ToDoApp">
            To-Do Management Application
            <LoginComponent />
            {/* <WelocomeComponent /> */}
        </div>
    )
}

function LoginComponent()
{
    const [username,setUser]=useState('khunwana')
    const [password,setPassword] = useState('')

    function UserNameChange(event)
    {
        setUser(event.target.value)
    }

    function ChangedPassword(event)
    {
        setPassword(event.target.value)
    }
    return (
        <div className="Login">
            <div className="LoginForm">
                <div>
                    <label>User Name </label>
                    <input type="text" name="username"onChange={UserNameChange} value={username}/>
                </div>
                <div>
                    <label>Password  </label>
                    <input type="password" name="password" onChange={ChangedPassword} value={password}/>
                </div>
                <div>
                    <button className="" type="submit" name="login" >login</button>
                </div>
            </div>
        </div>
    )
}

function WelocomeComponent()
{
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )
}