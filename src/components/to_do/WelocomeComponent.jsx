import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
export default function WelocomeComponent()
{
    const {username} = useParams()
    console.log(username)
    function callhelloworldRestApi()
    {
        console.log("callled")
        //axios
        axios.get('http://localhost:8080/hello-world')
            .then( (respone) => succesfulResponse(respone))
            .catch((error) => errorResponse(error))
            .finally(() => console.log("clean up"))
    }

    function succesfulResponse(response)
    {
        console.log(response)
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
        </div>
        </div>
    )
}