import "./css/Header.css"
import logo from "./imgs/logo.png"

function Header() {
    return(
    <>

        <div id="headerbox">
            <img id="logo" src= {logo} alt="logo" />
            <h1>SkyMap Connect</h1>
            <img id="logo" src= {logo} alt="logo" />
        </div>

    </>    

    )
}


export default Header