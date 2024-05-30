import { useEffect, useState } from "react"
import { retrieveAllToDoForusername,deleteTo_Do } from "./api/ListToDoApiService"
import { useParams } from "react-router-dom"
import { useAuth } from "./security/AuthContext"


export default function ListToDoComponent()
{
    const [toDo,setTo_Do] = useState([])
    const [message,setmessage] = useState("")
    const refreshTime = 2000
    const authContext = useAuth()
    const username = authContext.username
   
    useEffect(
        () => resfreshTo_Do()
    )

    function resfreshTo_Do()
    {
        retrieveAllToDoForusername(username)
            .then(response => setTo_Do(response.data,refreshTime),
            
            )
            .catch(error => console.log(error))
            
    }


    function deleteToDo(id)
    {
        console.log("deleted" + id)
        deleteTo_Do(id,username)
            .then(
                //Display message
                setmessage(`Deleted To-Do ${id}`),
                //update To-Do table
                () => resfreshTo_Do()
            )
    }

    function createToDo()
    {
        console.log("Create To-Do function")
    }

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div >
            <table className='table'>
                <thead>
                    <tr>
                        <th>description</th>
                        <th>done</th>
                        <th>targetDate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toDo.map(
                            todoList => (
                                <tr key={todoList.id}>
                                    <td>{todoList.description}</td>
                                    <td>{todoList.done.toString()}</td>
                                    <td>{todoList.targetDate.toString()}</td>
                                    <td><button className="btn btn-warning" onClick={() => deleteToDo(todoList.id)}>Delete</button></td>
                                    <td><button className="btn btn-success" onClick={() => createToDo(todoList.id)}>Create</button></td>
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