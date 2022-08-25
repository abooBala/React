

function Navbar() {
    return(
        <nav>
            <h1>Aboo's Website</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )       
}

ReactDOM.render(
    
        <Navbar />
    
    , document.getElementById("root"));