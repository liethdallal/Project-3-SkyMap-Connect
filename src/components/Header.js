import "./Header.css"
import logo from "./logo.png"

function Header() {
    return(
    <>

        <div id="headerbox">
            <img id="logo" src= {logo} alt="logo" />
            <h1>Welcome To My Weather-Tracker Application</h1>
            <img id="logo" src= {logo} alt="logo" />
        </div>

    </>    

    )
}


export default Header