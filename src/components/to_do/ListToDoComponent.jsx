export default function ListToDoComponent()
{
    const today = new Date()
    const targetDate = new Date(today.getFullYear(),today.getMonth(),today.getDay())

    const toDo = [  {id:1,description:'Learn full-stack', done : false, targetDate :targetDate },
                    {id:2,description:'Learn nodeJs', done : false, targetDate : targetDate},
                    {id:3,description:'Learn flutter', done : false, targetDate :targetDate }]
    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            <div >
            <table className='table'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>description</td>
                        <td>done</td>
                        <td>targetDate</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        toDo.map(
                            todoList => (
                                <tr key={todoList.id}>
                                    <td>{todoList.id}</td>
                                    <td>{todoList.description}</td>
                                    <td>{todoList.done.toString()}</td>
                                    <td>{todoList.targetDate.toDateString()}</td>
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