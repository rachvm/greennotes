import logo from "../../images/istockphoto-1359659563-612x612.jpg"
import "./style.css"

export default function Header () {
    return(
        <div>
            <h1>Green Notes</h1>
            <img classname="logo" src={logo} alt="green earth logo"></img>
        </div>
    )
}