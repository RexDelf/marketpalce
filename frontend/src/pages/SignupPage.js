import '../assets/css/AuthPages.css';
import api from "../api";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function SignupPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signup = async (username, password) => {
        try {
            const response = await api.post("/auth/signup", {
                username: username,
                password: password
            });

            const token = response.data.accessToken;

            localStorage.setItem("token", token);
        }
        catch(err){
            console.log(err);
        }
    };

    const onSignup = async (e) => {
        e.preventDefault();
        await signup(username, password);
        window.location.href = '/';
    }

    return (
        <div className="auth-page-container">
            <div className="auth-form-container">
                <form className="auth-form">
                    <div className="auth-form-content">
                        <h3 className="auth-form-title">Sign Up</h3>
                        <div className="already-registered-text">
                            Already registered?{" "}
                            <Link to="/signin" className="signin-link">
                                Sign In
                            </Link>
                        </div>
                        <div className="auth-form-inputs">
                            <div className="username-signup-wrapper">
                                <label>Username</label>
                                <input
                                    type="username"
                                    value={username}
                                    className="username-signup-input"
                                    placeholder="Enter username"
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="username-signup-wrapper">
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={username}
                                    className="email-signup-input"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="password-signup-wrapper">
                                <label>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    className="password-signup-input"
                                    placeholder="Enter password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="submit-btn-wrapper">
                            <button type="submit" className="submit-btn" onClick={(e) => {onSignup(e)}}>
                                Register
                            </button>
                        </div>
                        <p></p>
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