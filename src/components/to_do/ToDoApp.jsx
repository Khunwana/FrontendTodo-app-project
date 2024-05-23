import { useState } from 'react'
import { BrowserRouter,Routes,Route,useNavigate, useParams } from 'react-router-dom'
import './ToDoApp.css'
export default function ToDoApp()
{
    return(
        <div className="ToDoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelocomeComponent />}></Route>
                    <Route path='*' element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
            
            
        </div>
    )
}

function LoginComponent()
{
    const [username,setUser]=useState('Khunwana')
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
            navigate(`/welcome/${username}`)
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
            <h1>Login Information</h1>
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
    const {username} = useParams()
    console.log(username)
    return (
        <div className="Welcome">

        <h1>Welcome {username}</h1>
        <div >
            Welcome Component
        </div>
        </div>
    )
}

function ErrorComponent()
{
    const navigate = useNavigate();
    function GotoHome()
    {
        navigate('/welcome')
    }
    return (
        <div className="ErrorComponent">
            <h1>We are working very hard to resolve this!</h1>
            <div>
                Page not found. Please reach out to our team.
            </div>
            <div>
            <button  type="button"  onClick={GotoHome} >Goto Home</button>
            </div>
        </div>
    )
}