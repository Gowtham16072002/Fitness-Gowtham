export const validateEmail = (email) => {
    const value = email.trim();

    if (!value) return "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        return "Enter a valid email address";
    }

    return "";
};

export const validatePassword = (password) => {
    const value = password.trim();

    if (!value) return "Password is required";

    if (value.length < 6) {
        return "Password must be at least 6 characters";
    }

    return "";
};

export const validateFullName = (fullName) => {
    const value = fullName.trim();

    if (!value) return "Name is required";

    const nameRegex = /^[A-Za-z ]{3,20}$/;

    if (!nameRegex.test(value)) {
        return "Name should be 3 to 20 letters only";
    }

    return "";
};

export const validatePhoneNumber = (phoneNumber) => {
    const value = phoneNumber.trim();

    if (!value) return "Phone number is required";

    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(value)) {
        return "Phone number must be exactly 10 digits";
    }

    return "";
};

export const validateConfirmPassword = (password, confirmPassword) => {
    const value = confirmPassword.trim();

    if (!value) return "Confirm password is required";

    if (value !== password.trim()) {
        return "Passwords do not match";
    }

    return "";
};