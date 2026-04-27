import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";
import "../Styles/Auth.css";
import { API_BASE_URL } from "../config";
import { ROUTES } from "../constants/routes";
import {
  validateConfirmPassword,
  validateEmail,
  validateFullName,
  validatePassword,
  validatePhoneNumber,
} from "../utils/authValidation";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    passWord: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    passWord: "",
    confirmPassword: "",
  });

  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const sanitizeInput = (name, value) => {
    let sanitizedValue = DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });

    if (name === "fullName") {
      sanitizedValue = sanitizedValue.replace(/\s+/g, " ").trim();
    }

    if (name === "emailAddress") {
      sanitizedValue = sanitizedValue.trim().toLowerCase();
    }

    if (name === "phoneNumber") {
      sanitizedValue = sanitizedValue.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "passWord" || name === "confirmPassword") {
      sanitizedValue = sanitizedValue.trim();
    }

    return sanitizedValue;
  };

  const validateField = (name, value, currentFormData = formData) => {
    let error = "";

    if (name === "fullName") {
      error = validateFullName(value);
    }

    if (name === "emailAddress") {
      error = validateEmail(value);
    }

    if (name === "phoneNumber") {
      error = validatePhoneNumber(value);
    }

    if (name === "passWord") {
      error = validatePassword(value);
    }

    if (name === "confirmPassword") {
      error = validateConfirmPassword(currentFormData.passWord, value);
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(name, value);

    const updatedFormData = {
      ...formData,
      [name]: sanitizedValue,
    };

    setFormData(updatedFormData);
    setServerError("");
    validateField(name, sanitizedValue, updatedFormData);

    if (name === "passWord" && updatedFormData.confirmPassword) {
      validateField(
        "confirmPassword",
        updatedFormData.confirmPassword,
        updatedFormData
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const sanitizedFormData = {
      fullName: sanitizeInput("fullName", formData.fullName),
      emailAddress: sanitizeInput("emailAddress", formData.emailAddress),
      phoneNumber: sanitizeInput("phoneNumber", formData.phoneNumber),
      passWord: sanitizeInput("passWord", formData.passWord),
      confirmPassword: sanitizeInput(
        "confirmPassword",
        formData.confirmPassword
      ),
    };

    setFormData(sanitizedFormData);

    const fullNameError = validateField(
      "fullName",
      sanitizedFormData.fullName,
      sanitizedFormData
    );
    const emailError = validateField(
      "emailAddress",
      sanitizedFormData.emailAddress,
      sanitizedFormData
    );
    const phoneError = validateField(
      "phoneNumber",
      sanitizedFormData.phoneNumber,
      sanitizedFormData
    );
    const passwordError = validateField(
      "passWord",
      sanitizedFormData.passWord,
      sanitizedFormData
    );
    const confirmPasswordError = validateField(
      "confirmPassword",
      sanitizedFormData.confirmPassword,
      sanitizedFormData
    );

    if (
      fullNameError ||
      emailError ||
      phoneError ||
      passwordError ||
      confirmPasswordError
    ) {
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        sanitizedFormData
      );

      if (response?.data?.success) {
        alert(response.data.message || "Signup successful");
        navigate(ROUTES.LOGIN);
      } else {
        setServerError(response?.data?.message || "Signup failed");
      }
    } catch (error) {
      setServerError(
        error?.response?.data?.message ||
        "Something went wrong while signing up"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-left">
          <h2>Create Account</h2>
          <p>
            Join our fitness community and start tracking your workouts,
            wellness goals, and transformation.
          </p>
        </div>

        <div className="auth-right">
          <h1>Sign Up</h1>

          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              autoComplete="name"
              maxLength={20}
            />
            <div className="auth-error">{errors.fullName}</div>

            <label htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              type="email"
              name="emailAddress"
              placeholder="Enter your email"
              value={formData.emailAddress}
              onChange={handleChange}
              autoComplete="email"
            />
            <div className="auth-error">{errors.emailAddress}</div>

            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              autoComplete="tel"
              maxLength={10}
            />
            <div className="auth-error">{errors.phoneNumber}</div>

            <label htmlFor="passWord">Password</label>
            <input
              id="passWord"
              type="password"
              name="passWord"
              placeholder="Create password"
              value={formData.passWord}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <div className="auth-error">{errors.passWord}</div>

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <div className="auth-error">{errors.confirmPassword}</div>

            {serverError && <div className="auth-error">{serverError}</div>}

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to={ROUTES.LOGIN}>Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;