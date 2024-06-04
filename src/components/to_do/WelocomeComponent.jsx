import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { GethelloworldBean } from './api/HelloWorldApiService'
// import GethelloworldBean from './api/HelloWorldApiService'
export default function WelocomeComponent()
{
    const {username} = useParams()
    const [data,setData] = useState(null)
   
    function callhelloworldRestApi()
    {
        console.log("callled")
        //axios
        GethelloworldBean()
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
        <div className="Welcome">

        <h1>Welcome {username}</h1>
        <div >
            Manage What To-Do - <Link to="/listToDo">Go here</Link>
        </div>
        <div>
            <button className="btn btn-success m-5" onClick={callhelloworldRestApi}>
                hello world Rest API
                </button>
                <div className="text-info">{data}</div>
        </div>
        </div>
    )
}