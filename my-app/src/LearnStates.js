import React from "react"

export default function LearnStates() {
    const [result, setResult] = React.useState("Yes")

    function handleClick() {
        setResult("No")
    }

    return(
        <div>
            <h2>Is state important?</h2>
            <div onClick={handleClick}>
                <button type="button">Find out</button>
                <p>{result}</p>
            </div>
        </div>
    )
}