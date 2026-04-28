import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Auth.css";
import { ROUTES } from "../constants/routes";
import LoginForm from "../Components/LoginForm";
// import { AuthContext } from "../Context/AuthContext";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user?.role) {
      navigate(user.role === "admin" ? ROUTES.ADMIN_DASHBOARD : ROUTES.ROOT);
    }
  }, [user, navigate]);

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
          <LoginForm />

          <p className="auth-switch">
            Don’t have an account? <Link to={ROUTES.SIGNUP}>Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;