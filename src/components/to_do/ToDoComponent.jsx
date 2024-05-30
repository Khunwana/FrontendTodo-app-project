import { useParams } from "react-router-dom"
import { retrieveTo_DoApi } from "./api/ListToDoApiService"
import {  useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"


export default function ToDoComponent()
{
    const [description,setDescription] = useState('')
    const {id} = useParams()
    const authContext = useAuth()
    const username = authContext.username;

    useEffect(
        () => retrieveToDo(),[id]
    )

    function retrieveToDo()
    {
        retrieveTo_DoApi(id,username)
        .then(response => {
            setDescription(response.data.description)
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="container">
            <h1>Enter To-Do Details</h1>
            <div>
               description : {description}
            </div>
        </div>
    )
}