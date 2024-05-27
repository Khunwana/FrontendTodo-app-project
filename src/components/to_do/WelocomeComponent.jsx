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
         axios.get('http://localhost:8080/hello-world',{
            auth:{
                username: 'username',
                password: 'password'
            },
            headers:{
                'Content-Type' : 'application/json'
            }

         })
            .then( (response) => succesfulResponse(response) )
            .catch ( (error) => errorResponse(error) )
            .finally ( () => console.log('cleanup') )
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