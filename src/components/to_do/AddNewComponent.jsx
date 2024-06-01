import { Formik,Form,Field,ErrorMessage } from "formik";
import { useAuth } from "./security/AuthContext";
import { createTo_DoApi } from "./api/ListToDoApiService";
import { useNavigate } from "react-router-dom";

export default function AddNewComponent()
{
    const authContext = useAuth()
    const username = authContext.username
    const description = ""
    const targetDate = null
    const navigate = useNavigate()
    function createToDo(values)
    {
        const todo = {
            username : username,
            description : values.description,
            targetDate : values.targetDate,
            done : false
        }
        createTo_DoApi(username,todo)
        .then(response => {
            console.log(response)
            navigate("/listTodo")
        })
        .catch(error => console.log(error))
    }

    function validate()
    {
        
    }
    return (
        <div className="container">
            <h1>Create a new task</h1>
            <div>
                <Formik initialValues={{description,targetDate}}
                    enableReinitialize={true}
                    onSubmit={createToDo}
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
                                    <button className="btn btn-success m-5" type="submit">Create</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}