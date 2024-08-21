import React from "react";
import Navbar from "../../components/navbar";
import LoginForm from "../../components/login-form";

function Login() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <LoginForm />
            </div>
        </>
    );
}

export default Login;
