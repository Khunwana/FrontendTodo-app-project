import { useEffect, useState } from "react"
import { retrieveAllToDoForusername, deleteTo_DoApi } from "./api/ListToDoApiService"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"


export default function ListToDoComponent()
{
    const [toDo,setTo_Do] = useState([])
    const [message,setmessage] = useState("")
    const refreshTime = 2000
    const authContext = useAuth()
    const username = authContext.username
    const token = authContext.token
    const navigate = useNavigate()
   
    useEffect(
        () => resfreshTo_Do()
    )

    function resfreshTo_Do()
    {
        retrieveAllToDoForusername(username,token)
            .then(response => setTo_Do(response.data,refreshTime),
            
            )
            .catch(error => console.log(error))
            
    }


    function deleteToDo(id)
    {
        console.log("deleted" + id)
        deleteTo_DoApi(id,username,token)
            .then(
                //Display message
                setmessage(`Deleted To-Do ${id}`),
                //update To-Do table
                () => resfreshTo_Do()
            )
    }

    function updateToDo(id)
    {
        console.log("Create To-Do function")
        navigate(`/listTodo/${id}`)
    }

    function addNew()
    {
        console.log("adding new Task")
        navigate("/addNew")
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
                                    <td><button className="btn btn-success" onClick={() => updateToDo(todoList.id)}>Update</button></td>
                                </tr> 
                            )
                        )
                    }                                   
                </tbody>
            </table>
            </div>
            <div className="btn btn-success" onClick={addNew}>Add New</div>
        </div>
    )
}