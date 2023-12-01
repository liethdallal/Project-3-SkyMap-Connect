import './css/Header.css'; 
import logo from "./imgs/logo.png";

function Header() {
  return (
    <>
      <div id="headerbox">

        <div className="electric-line"></div>

        <img id="logo" src={logo} alt="logo" />

        <h1 id='headertitle'>SkyMap Connect</h1>

        <img id="logo2" src={logo} alt="logo" />
        
        <div className="electric-line"></div>
      </div>
    </>
  );
}

export default Header;