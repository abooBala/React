import logo from './images/react-facts.png'
import './App.css'

export default function Header() {
    return (
        <header className="App--header">
            <img src={logo} className="App--logo" alt="logo" />
            <p>React Course - Project 1</p>
        </header>
    )
}
