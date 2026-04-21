// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../Styles/Auth.css";
// import { API_BASE_URL } from "../config";

// function SignUp() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     emailAddress: "",
//     phoneNumber: "",
//     passWord: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({
//     fullName: "",
//     emailAddress: "",
//     phoneNumber: "",
//     passWord: "",
//     confirmPassword: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const nameRegex = /^[A-Za-z ]{3,20}$/;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const phoneRegex = /^[0-9]{10}$/;

//   const validateField = (name, value) => {
//     let error = "";

//     if (name === "fullName") {
//       if (!value) {
//         error = "Name is required";
//       } else if (!nameRegex.test(value)) {
//         error = "Name should be 3 to 20 letters only";
//       }
//     }

//     if (name === "emailAddress") {
//       if (!value) {
//         error = "Email is required";
//       } else if (!emailRegex.test(value)) {
//         error = "Enter a valid email address";
//       }
//     }

//     if (name === "phoneNumber") {
//       if (!value) {
//         error = "Phone number is required";
//       } else if (!phoneRegex.test(value)) {
//         error = "Phone number must be exactly 10 digits";
//       }
//     }

//     if (name === "passWord") {
//       if (!value) {
//         error = "Password is required";
//       } else if (value.length < 6) {
//         error = "Password must be at least 6 characters";
//       }
//     }

//     if (name === "confirmPassword") {
//       if (!value) {
//         error = "Confirm password is required";
//       } else if (value !== formData.passWord) {
//         error = "Passwords do not match";
//       }
//     }

//     setErrors((prev) => ({
//       ...prev,
//       [name]: error,
//     }));

//     return error;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     validateField(name, value);

//     if (name === "passWord" && formData.confirmPassword) {
//       validateField("confirmPassword", formData.confirmPassword);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const fullNameError = validateField("fullName", formData.fullName);
//     const emailError = validateField("emailAddress", formData.emailAddress);
//     const phoneError = validateField("phoneNumber", formData.phoneNumber);
//     const passwordError = validateField("passWord", formData.passWord);
//     const confirmPasswordError = validateField(
//       "confirmPassword",
//       formData.confirmPassword
//     );

//     if (
//       fullNameError ||
//       emailError ||
//       phoneError ||
//       passwordError ||
//       confirmPasswordError
//     ) {
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(`${API_BASE_URL}/auth/signup`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert(data.message || "Signup successful");
//         navigate("/login");
//       } else {
//         alert(data.message || "Signup failed");
//       }
//     } catch (error) {
//       console.error("Signup error:", error.message);
//       alert("Something went wrong while signing up");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="auth-page">
//       <div className="auth-card">
//         <div className="auth-left">
//           <h2>Create Account</h2>
//           <p>
//             Join our fitness community and start tracking your workouts,
//             wellness goals, and transformation.
//           </p>
//         </div>

//         <div className="auth-right">
//           <h1>Sign Up</h1>

//           <form onSubmit={handleSubmit} noValidate>
//             <label>Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Enter your full name"
//               value={formData.fullName}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.fullName}</div>

//             <label>Email Address</label>
//             <input
//               type="text"
//               name="emailAddress"
//               placeholder="Enter your email"
//               value={formData.emailAddress}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.emailAddress}</div>

//             <label>Phone Number</label>
//             <input
//               type="text"
//               name="phoneNumber"
//               placeholder="Enter your phone number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.phoneNumber}</div>

//             <label>Password</label>
//             <input
//               type="password"
//               name="passWord"
//               placeholder="Create password"
//               value={formData.passWord}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.passWord}</div>

//             <label>Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//             <div className="auth-error">{errors.confirmPassword}</div>

//             <button type="submit" className="auth-btn" disabled={loading}>
//               {loading ? "Signing up..." : "Sign Up"}
//             </button>
//           </form>

//           <p className="auth-switch">
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SignUp;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";
import "../Styles/Auth.css";
import { API_BASE_URL } from "../config";

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

  const nameRegex = /^[A-Za-z ]{3,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const sanitizeInput = (name, value) => {
    let sanitizedValue = DOMPurify.sanitize(value, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });

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
      if (!value) {
        error = "Name is required";
      } else if (!nameRegex.test(value)) {
        error = "Name should be 3 to 20 letters only";
      }
    }

    if (name === "emailAddress") {
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "phoneNumber") {
      if (!value) {
        error = "Phone number is required";
      } else if (!phoneRegex.test(value)) {
        error = "Phone number must be exactly 10 digits";
      }
    }

    if (name === "passWord") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }

    if (name === "confirmPassword") {
      if (!value) {
        error = "Confirm password is required";
      } else if (value !== currentFormData.passWord) {
        error = "Passwords do not match";
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
    const sanitizedValue = sanitizeInput(name, value);

    const updatedFormData = {
      ...formData,
      [name]: sanitizedValue,
    };

    setFormData(updatedFormData);
    setServerError("");
    validateField(name, sanitizedValue, updatedFormData);

    if (name === "passWord" && updatedFormData.confirmPassword) {
      validateField("confirmPassword", updatedFormData.confirmPassword, updatedFormData);
    }

    if (name === "confirmPassword") {
      validateField("confirmPassword", sanitizedValue, updatedFormData);
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
      confirmPassword: sanitizeInput("confirmPassword", formData.confirmPassword),
    };

    setFormData(sanitizedFormData);

    const fullNameError = validateField("fullName", sanitizedFormData.fullName, sanitizedFormData);
    const emailError = validateField("emailAddress", sanitizedFormData.emailAddress, sanitizedFormData);
    const phoneError = validateField("phoneNumber", sanitizedFormData.phoneNumber, sanitizedFormData);
    const passwordError = validateField("passWord", sanitizedFormData.passWord, sanitizedFormData);
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

      const response = await axios.post(`${API_BASE_URL}/auth/signup`, sanitizedFormData);

      if (response?.data?.success) {
        alert(response.data.message || "Signup successful");
        navigate("/login");
      } else {
        setServerError(response?.data?.message || "Signup failed");
      }
    } catch (error) {
      setServerError(
        error?.response?.data?.message || "Something went wrong while signing up"
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
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
