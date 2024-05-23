import { useState } from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import './ToDoApp.css'
export default function ToDoApp()
{
    return(
        <div className="ToDoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome' element={<WelocomeComponent />}></Route>
                </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}

function LoginComponent()
{
    const [username,setUser]=useState('khunwana')
    const [password,setPassword] = useState('')
    const [showSuccessMessage,setShowSuccessMessage] = useState(false)
    const [showErrorMessage,setShowErrorMessage] = useState(false)
    const navigate = useNavigate();

    function UserNameChange(event)
    {
        setUser(event.target.value)
    }

    function ChangedPassword(event)
    {
        setPassword(event.target.value)
    }

    function HandleSubmit()
    {
        if( username === 'Khunwana' && password === '1234')
        {
            console.log('Success')
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate('/welcome')
        }
        else
        {
            console.log('Failed')
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    
    return (
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials</div>}

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
                    <button  type="button" name="login" onClick={HandleSubmit} >login</button>
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

function ErrorComponent()
{
    return (
        <div className="ErrorComponent">
            <H1></H1>
        </div>
    )
}