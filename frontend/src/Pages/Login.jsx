import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Auth.css";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);
  if(user && user.role){
    if(user.role !== "admin")
      navigate('/')
    else
      navigate(`/${user.role}/home`)
  }
  useEffect(() => {
    console.log(user)
  }, [user])
  const [formData, setFormData] = useState({
    emailAddress: "",
    passWord: "",
  });

  const [errors, setErrors] = useState({
    emailAddress: "",
    passWord: "",
  });

  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (name, value) => {
    let error = "";

    if (name === "emailAddress") {
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "passWord") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
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

    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = validateField("emailAddress", formData.emailAddress);
    const passwordError = validateField("passWord", formData.passWord);

    if (emailError || passwordError) {
      return;
    }

    try {
      setLoading(true);

      const data = await axios.post("http://localhost:3000/auth/login", { emailAddress: formData.emailAddress, passWord: formData.passWord }, { withCredentials: true })
      console.log(data);
      localStorage.setItem("token",data.data.token)
      if (data.data.success) {
        alert(data.data.message || "Login successful");
        if (data.data.user.role === "admin") {
          login(data.data.user);
          navigate("/admin/dashboard");
        } else {
          login(data.data.user);
          navigate("/home");
        }

      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Something went wrong while logging in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Welcome Back</h2>
          <p>
            Log in to continue your fitness journey and access your workouts,
            plans, and progress.
          </p>
        </div>

        <div className="auth-right">
          <h1>Login</h1>

          <form onSubmit={handleSubmit} noValidate>
            <label>Email Address</label>
            <input
              type="text"
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

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="auth-switch">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
