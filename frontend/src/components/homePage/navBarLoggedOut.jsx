import "./navBarLoggedOut.css"
import logo from "../assets/logo.svg"
import {Link,NavLink} from 'react-router-dom'

function LandingBar (){
    return  (
        <>
        <div className="navBarContainer">
            <img src={logo} alt="logo" class="logoNav"/>
            <div className="navOptionsContainer">
                <ul>
                    {/* <li><NavLink to="/" class>Home</NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li> */}
                    <li className="navOptions"><NavLink to="/">Home</NavLink></li>
                    <li className="navOptions"><NavLink to="/adopt">Adopt</NavLink></li>
                    <li className="navOptions"><NavLink to="/aboutus">About Us</NavLink></li>
                </ul>
            </div>

            <div className="navButton">
                <button className="loginButton" >
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login
                    </Link>   
                </button>

                
                <button className="signupButton">
                    <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>Sign Up</Link>
                </button>
            </div>

        </div>
        </>
    )
}

export default LandingBar