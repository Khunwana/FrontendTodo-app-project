export default function CounterButton({properties1,incrementCounterParentFunction,decrementCounterParentFunction})
{
    return (
        <div className="CounterButton">
            <div>
            <button className="countButton" onClick={() => incrementCounterParentFunction(properties1)}>+{properties1}</button>
            <button className="countButton" onClick={() => decrementCounterParentFunction(properties1)}>-{properties1}</button>
            </div>
        </div>
    )
}