import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';

export default function Counter()
{
    const [count,setCount] = useState(0);

    function incrementCounterParentFunction(properties1)
    {
        setCount(count+properties1)
    }
    function decrementCounterParentFunction(properties1)
    {
        setCount(count-properties1)        
    }
    return (
        <>
        <CounterButton properties1 = {1}
            incrementCounterParentFunction = {incrementCounterParentFunction} 
            decrementCounterParentFunction={decrementCounterParentFunction}/>
        <CounterButton properties1 = {2}
            incrementCounterParentFunction = {incrementCounterParentFunction} 
            decrementCounterParentFunction={decrementCounterParentFunction}/>
        <span className="count">{count}</span>
    </>
    )
}
