import React, { useState } from "react";
// import axios from "axios";
// import { API_BASE_URL } from "../config";
import { authService } from "../services/authService";
import { ROUTES } from "../constants/routes";
import { validateEmail, validatePassword } from "../utils/authValidation";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
import { useAuth } from "../hooks/useAuth";

function LoginForm() {
    const navigate = useNavigate();
    // const { login } = useContext(AuthContext);
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        emailAddress: "",
        passWord: "",
    });

    const [errors, setErrors] = useState({
        emailAddress: "",
        passWord: "",
    });

    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    const validateField = (name, value) => {
        let error = "";

        if (name === "emailAddress") {
            error = validateEmail(value);
        }

        if (name === "passWord") {
            error = validatePassword(value);
        }

        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));

        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setServerError("");
        validateField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError("");

        const emailError = validateField("emailAddress", formData.emailAddress);
        const passwordError = validateField("passWord", formData.passWord);

        if (emailError || passwordError) return;

        try {
            setLoading(true);

            const response = await authService.login({
                emailAddress: formData.emailAddress.trim(),
                passWord: formData.passWord.trim(),
            });

            if (response?.data?.success) {
                await login(response.data.user);

                navigate(
                    response.data.user.role === "admin" ? ROUTES.ADMIN_DASHBOARD : ROUTES.ROOT
                );
            } else {
                setServerError(response?.data?.message || "Login failed");
            }
        } catch (error) {
            setServerError(
                error?.response?.data?.message ||
                "Something went wrong while logging in"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label>Email Address</label>
                <input
                    type="email"
                    name="emailAddress"
                    placeholder="Enter your email"
                    value={formData.emailAddress}
                    onChange={handleChange}
                />
                <div className="auth-error">{errors.emailAddress}</div>

                <label>Password</label>
                <input
                    type="password"
                    name="passWord"
                    placeholder="Enter your password"
                    value={formData.passWord}
                    onChange={handleChange}
                />
                <div className="auth-error">{errors.passWord}</div>

                {serverError && <div className="auth-error">{serverError}</div>}

                <button type="submit" className="auth-btn" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </>
    );
}

export default LoginForm;