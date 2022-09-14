import React from "react"

export default function LearnStates() {
    const [result, setResult] = React.useState("Yes")
    const [count, setCount] = React.useState(0)

    function handleClick() {
        setResult("No")
    }

    function addCount() {
        setCount(prevCount => prevCount + 1)
    }

    function minusCount() {
        setCount(prevCount => prevCount - 1)
    }

    return(
        <div>
            <h2>Is state important?</h2>
            <div onClick={handleClick}>
                <button type="button">Find out</button>
                <p>{result}</p>
            </div>

            <div>
                <button className="decrease" onClick={minusCount}>Minus</button>
                <h1>{count}</h1>
                <button className="increase" onClick={addCount}>Add</button>
            </div>

        </div>
    )
}