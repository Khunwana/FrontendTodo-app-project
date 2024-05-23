import { useState } from 'react'
import { BrowserRouter,Routes,Route,useNavigate, useParams, Link } from 'react-router-dom'
import './ToDoApp.css'
export default function ToDoApp()
{
    return(
        <div className="ToDoApp">
            <HeaderComponent />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LoginComponent />}/>
                        <Route path='/login' element={<LoginComponent />}/>
                        <Route path='/welcome/:username' element={<WelocomeComponent />}/>
                        <Route path='/listToDo' element={<ListToDoComponent />}/>
                        <Route path='/logout' element={<LogoutComponent />}/>
                        <Route path='*' element={<ErrorComponent />}/>
                    </Routes>
                </BrowserRouter>
            <FooterComponent />
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
            Manage What To-Do - <Link to="/listToDo">Go here</Link>
        </div>
        </div>
    )
}

function ListToDoComponent()
{
    const today = new Date()
    const targetDate = new Date(today.getFullYear(),today.getMonth(),today.getDay())

    const toDo = [  {id:1,description:'Learn full-stack', done : false, targetDate :targetDate },
                    {id:2,description:'Learn nodeJs', done : false, targetDate : targetDate},
                    {id:3,description:'Learn flutter', done : false, targetDate :targetDate }]
    return (
        <div className="ListToDoComponent">
            <h1>Things You Want To Do!</h1>
            <div >
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>done</td>
                        <td>targetDate</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        toDo.map(
                            todoList => (
                                <tr key={todoList.id}>
                                    <td>{todoList.id}</td>
                                    <td>{todoList.description}</td>
                                    <td>{todoList.done.toString()}</td>
                                    <td>{todoList.targetDate.toDateString()}</td>
                                </tr> 
                            )
                        )
                    }
                                   
                </tbody>
            </table>
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

function HeaderComponent()
{
    return (
        <div className="HeaderComponent">
            Header <hr/>
        </div>
    )
}

function FooterComponent()
{
    return (
        <div className="FooterComponent">
            <hr/> Footer
        </div>
    )
}

function LogoutComponent()
{
    return (
        <div className="LogoutComponent">
            <h1>You are Logged out</h1>
            <div>
                Thank You For Using Our App
            </div>
        </div>
    )
}