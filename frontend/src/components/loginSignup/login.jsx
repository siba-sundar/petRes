import loginImg from "../assets/loginImage.svg"
import "./login.css"

function LoginPage (){
    return(
        <>
        <div className="loginMainContainer">
            <div className="loginContentContainer">
                <div className="loginImage">
                    <img src={loginImg} alt="" />
                </div>
                <div className="loginData">
                    <h2>LogIn To Your Account</h2>
                    <label htmlFor="loginName">Username</label>
                    <input type="text" className="loginName" />
                    <label htmlFor="loginPass">Password</label>
                    <input type="password" className="loginPass" />
                    <button className="loginLoginButton">Login</button>
                    <div className="signInOption">
                        <p>Don't have an Account?</p>
                        <a href="#">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default LoginPage