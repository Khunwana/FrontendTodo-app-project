import { useParams, Link } from 'react-router-dom'

export default function WelocomeComponent()
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