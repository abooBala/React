import React from "react"

export default function LearnStates() {
    const [result, setRresult] = React.useState("Yes")
    console.log(result)
    return(
        <div>
            <p>{result}</p>
        </div>
    )
}