import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { GethelloworldBean } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'
import './ToDoApp.css'
export default function WelocomeComponent()
{
    const {username} = useParams()
    const [data,setData] = useState(null)
    const authContext = useAuth()
    const tok = authContext.token
   
    function callhelloworldRestApi()
    {
        console.log("callled")
        //axios
        GethelloworldBean(tok)
            .then( (response) => succesfulResponse(response) )
            .catch ( (error) => errorResponse(error) )
            .finally ( () => console.log('cleanup') )
    }

    function succesfulResponse(response)
    {
        setData(response.data)
    }

    function errorResponse(error)
    {
        console.log(error)
    }

    return (
        <div className="welcome" style={{ paddingTop : '120px' }}>

        <h1>Welcome {username}</h1>
        <div >
            Manage What To-Do - <Link to="/listToDo">Go here</Link>
        </div>
        <div className='welcome'>
            <button className="btn btn-success m-5 " onClick={callhelloworldRestApi}>
                hello world Rest API
                </button>
                <div className="text-info">{data}</div>
        </div>
        </div>
    )
}