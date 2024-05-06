import { useState } from "react";
import loginImg from "../assets/loginImage.svg";
import{Link, NavLink} from 'react-router-dom'
import "./signup.css";
import axios from 'axios';

function SignupPage (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameExists, setUsernameExists] = useState(false);
    const [emailExists, setEmailExists] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if password meets criteria
        if (!validatePassword(password)) {
            setPasswordError('Password must be 8 characters long and contain at least one special character');
            return;
        }

        try {
            // Check if username exists
            const usernameResponse = await axios.get(`http://localhost:4001/api/user/exists?username=${name}`);
            if (usernameResponse.data.exists) {
                setUsernameExists(true);
                return;
            }
            
            // Check if email exists
            const emailResponse = await axios.get(`http://localhost:4001/api/user/exists?email=${email}`);
            if (emailResponse.data.exists) {
                setEmailExists(true);
                return;
            }

            // If no errors, register user
            const response = await axios.post('http://localhost:4001/api/user/register', {
                username: name,
                email,
                password
            });
            
            // Check if registration was successful
            if (response.status === 201) {
                alert("User registered successfully");
                // Clear form fields after successful registration
                setName('');
                setEmail('');
                setPassword('');
            } else {
                alert("User registered successfully");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred");
        }
    }

    const validatePassword = (password) => {
        const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        return password.length >= 8 && specialCharacters.test(password);
    }

    return(
        <div className="signupMainContainer">
            <div className="signupContentContainer">
                <div className="signupImage">
                    <img src={loginImg} alt="" />
                </div>
                <div className="signupData">
                    <h2>Create Account</h2>
                    {usernameExists && <p className="errorText">Username already exists</p>}
                    {emailExists && <p className="errorText">Email already registered</p>}
                    {passwordError && <p className="errorText">{passwordError}</p>}
                    <form  className="formData" onSubmit={handleSubmit}>
                        <label htmlFor="signupName">Username</label>
                        <input type="text" className="signupName" value={name} onChange={(e) => setName(e.target.value)} required />
                        <label htmlFor="signupEmail">E-mail</label>
                        <input type="email" className="signupEmail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="signupPass">Password</label>
                        <input type="password" className="signupPass" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit" className="signupsignupButton">Sign up</button>
                    </form>
                    <div className="signInOption">
                        <p>Already have an Account?</p>
                        <Link to='/login'>Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
