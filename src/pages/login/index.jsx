import React from "react";
import Navbar from "../../components/navbar";
import LoginForm from "../../components/login-form";
import "./login.css";
function Login() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="form-container">
                <LoginForm />
            </div>
        </>
    );
}

export default Login;
