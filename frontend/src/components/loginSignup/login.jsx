import { useState } from "react";
import loginImg from "../assets/loginImage.svg";
import "./login.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:4001/api/user/login/${username}`);

            if (response.data.error) {
                setError('Please sign in');
            } else {
                const userData = response.data;
                if (userData.password === password) {
                    // Redirect user to home page if login is successful
                    history.push('/home');
                } else {
                    setError('Wrong password, please try again');
                }
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred');
        }
    }

    return (
        <div className="loginMainContainer">
            <div className="loginContentContainer">
                <div className="loginImage">
                    <img src={loginImg} alt="" />
                </div>
                <div className="loginData">
                    <h2>LogIn To Your Account</h2>
                    {error && <p className="errorText">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="loginName">Username</label>
                        <input type="text" className="loginName" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <label htmlFor="loginPass">Password</label>
                        <input type="password" className="loginPass" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit" className="loginLoginButton">Login</button>
                    </form>
                    <div className="signInOption">
                        <p>Don't have an Account?</p>
                        <Link to='/signup' style={{ textDecoration: 'none', color: 'orange' }}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
