import { useNavigate, useParams } from "react-router-dom"
import { retrieveTo_DoApi, updateTo_DoApi } from "./api/ListToDoApiService"
import {  useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { Formik,Form, Field, ErrorMessage } from "formik"


export default function ToDoComponent()
{
    const [description,setDescription] = useState('')
    const [targetDate,setTargetDate] = useState('')
    const {id} = useParams()
    const authContext = useAuth()
    const username = authContext.username;
    const navigate = useNavigate();

    useEffect(
        () => retrieveToDo(),[id]
    )

    function retrieveToDo()
    {
        retrieveTo_DoApi(id,username)
        .then(response => {
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)            
        })
        .catch(error => console.log(error))
    }
    function onSubmit(values)
    {
        const todo = {
            id : id,
            username : username,
            description : values.description,
            targetDate : values.targetDate,
            done : false
        }

        updateTo_DoApi(id,username,todo)
        .then(response => {
            console.log(response)
            navigate("/listTodo")
        })
        .catch(error => console.log(error))
    }

    function validate(values)
    {
        let errors = {}

        let str = values.targetDate;
        let result = str.split('-');
        let int_result = parseInt(result[0])
     
        if(values.targetDate == null && int_result < 2024 )
        {
            errors.targetDate = "Enter a valid target date"   
        }
        return errors
    }
    return (
        <div className="container" style={{ paddingTop : '100px' }}>
            <h1>Enter To-Do Details</h1>
            <div>                
               <Formik initialValues={{description,targetDate}}
                enableReinitialize={true}
                onSubmit={onSubmit}
                validate={validate}
                validateOnChange = {false}
                validateOnBlur = {false}
               >
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                                name = "description"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage 
                                name = "targetDate"
                                component="div"
                                className="alert alert-warning"
                            />

                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name = "description"/>
                            </fieldset>
                            
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control"name="targetDate"/>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
               </Formik>
            </div>
        </div>
    )
}