import '../assets/css/AuthPages.css';
import api from "../api";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function SigninPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signin = async (username, password) => {
        try {
            const response = await api.post("/auth/signin", {
                username: username,
                password: password
            });
            const token = await response.data.accessToken;

            localStorage.setItem("token", token);
        }
        catch(err){
            console.log(err);
        }
    };

    const onSignin = async (e) => {
        e.preventDefault();
        await signin(username, password);
        window.location.href = '/';
    }

    return (
        <div className="auth-page-container">
        <div className="auth-form-container">
            <form className="auth-form">
                <div className="auth-form-content">
                    <h3 className="auth-form-title">Sign In</h3>
                    <div className="auth-form-inputs">
                        <div className="username-signin-wrapper">
                            <label>Username</label>
                            <input
                                type="username"
                                value={username}
                                className="username-signin-input"
                                placeholder="Enter username"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="password-signin-wrapper">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                className="password-signin-input"
                                placeholder="Enter password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="submit-btn-wrapper">
                        <button type="submit" className="submit-btn" onClick={(e) => {onSignin(e)}}>
                            Login
                        </button>
                    </div>
                    <p className="signup-text">
                        Don’t have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
            </form>
        </div>
            <div className="back-to-main-text">
                <Link to="/" className="back-to-main-link">
                    Back to main page
                </Link>
            </div>
        </div>
    )
}