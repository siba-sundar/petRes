import { useState } from "react";
import loginImg from "../assets/loginImage.svg";
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import "./login.css";
import axios from 'axios';
import bcrypt from 'bcryptjs'; // Import bcrypt library

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); // State to track login status
    const navigate = useNavigate(); // Get access to navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:4001/api/user/login/${username}`);

            console.log("Data from backend:", response.data); // Log the data received from the backend

            if (response.data.error) {
                setError('User not found');
            } else {
                // Compare hashed password
                const hashedPassword = response.data.password; // Hashed password from the backend
                const passwordMatch = await bcrypt.compare(password, hashedPassword);
                
                if (passwordMatch) {
                    // Set login status to true
                    setLoggedIn(true);
                    // Redirect to '/Listing'
                    navigate('/listing');
                } else {
                    setError('Wrong password');
                }
            }
        } catch (error) {
            console.error(error);
            setError('User not Found');
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
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <label htmlFor="loginName">Username</label>
                        <input type="text" className="loginName" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <label htmlFor="loginPass">Password</label>
                        <input type="password" className="loginPass" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit" className="loginLoginButton">Login</button>
                    </form>

                    <div className="loginInOption">
                        <p>Don't have an Account?</p>
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default LoginPage;
