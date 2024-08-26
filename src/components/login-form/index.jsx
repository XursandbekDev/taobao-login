import React, { useState } from "react";
import axios from "axios";
import "./login-form.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get("https://fakestoreapi.com/users/1");
            const userData = res.data;

            if (userData.phone === tel && userData.password === password) {
                console.log("Tizimga muvaffaqiyatli kirdingiz!");
                navigate("/home");
            } else {
                setError("Parol yoki tel raqam hato!");
                console.log("Tel raqam yoki parol noto'g'ri!");
            }
        } catch (err) {
            console.error("Xatolik yuz berdi:", err);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="input-data">
                        <input
                            type="tel"
                            id="tel"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            required
                        />
                        <div className="underline"></div>
                        <label htmlFor="tel">Tel raqam</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="underline"></div>
                        <label htmlFor="password">Parolni kiriting</label>
                        <span
                            className="password-toggle-icon"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                </div>
                {error && <p className="error-massage"> {error} </p>}
                <div className="form-row submit-btn">
                    <div className="input-data">
                        <div className="inner"></div>
                        <input type="submit" value="Kirish" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
