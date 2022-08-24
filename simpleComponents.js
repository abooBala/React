

function SimpleComponentOne() {
    return(
        <p>Why React?</p>
    )       
}

function SimpleComponentTwo() {
    return(
        <ul>Just a few:
            <li>Flexible</li>
            <li>Easily Create SPA for devices</li>
            <li>Create large web applications that can change data, without reloading the page.</li>
            <li>And more...</li>
        </ul>
    )
}

ReactDOM.render(

    <div>
        <SimpleComponentOne />
        <SimpleComponentTwo />
    </div>
    
    , document.getElementById("root"));