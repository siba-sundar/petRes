import loginImg from "../assets/loginImage.svg"
import "./signup.css"

function LoginPage (){
    return(
        <>
        <div className="loginMainContainer">
            <div className="loginContentContainer">
                <div className="loginImage">
                    <img src={loginImg} alt="" />
                </div>
                <div className="loginData">
                    <h2>Create Account</h2>
                    
                    <label htmlFor="loginName">Username</label>
                    <input type="text" className="loginName" />
                    <label htmlFor="signupEmail">E-mail</label>
                    <input type="text" className="signupEmail"  />
                    <label htmlFor="loginPass">Password</label>
                    <input type="password" className="loginPass" />
                    <button className="loginLoginButton">Sign up</button>
                    <div className="signInOption">
                        <p>Already have an Account?</p>
                        <a href="#">Login</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default LoginPage