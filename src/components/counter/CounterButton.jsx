import { useState } from 'react'
export default function CounterButton({properties1,incrementCounterParentFunction,decrementCounterParentFunction})
{
    const [count,setCount] = useState(0);

    function incrementCounterFunction()
    {
        setCount(count +parseInt(properties1));
        console.log(count)
        incrementCounterParentFunction(properties1)
    }
    function decrementCounterFunction()
    {
        setCount(count -parseInt(properties1));
        console.log(count)
        decrementCounterParentFunction(properties1)
    }
    return (
        <div className="CounterButton">
            <div>
            <button className="countButton" onClick={incrementCounterFunction}>+{properties1}</button>
            <button className="countButton" onClick={decrementCounterFunction}>-{properties1}</button>
            </div>
        </div>
    )
}