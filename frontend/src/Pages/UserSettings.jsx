import "../Styles/UserSettings.css";
import { useState, useEffect } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import userSampleImage from "../assets/userSampleImage.jpeg";
import DialogChangePassword from "./DialogChangePassword";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";
import { API_BASE_URL } from "../config";
import axios from "axios";
function UserSettings({ open, close }) {
  const [form, setForm] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    profile: null,
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const { user, setUser, csrfToken } = useAuth();

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const uploadData = new FormData();
    uploadData.append("image", file);
    if (file && file.size < 2 * 1024 * 1024) {
      const res = await axios.post(`${API_BASE_URL}/api/upload`, uploadData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          "x-csrf-token": csrfToken,
        },
      });
      const data = await res.data;
      console.log(data, "data");
      setForm({ ...form, profile: data.imageUrl });
    } else {
      alert("File must be less than 2MB");
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!form.emailAddress) {
      newErrors.emailAddress = "emailAddress is required";
    } else if (!/\S+@\S+\.\S+/.test(form.emailAddress)) {
      newErrors.emailAddress = "Invalid email format";
    }

    if (!form.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Phone must be 10 digits";
    }

    // if (!form.password) {
    //   newErrors.password = "Password is required";
    // } else if (form.password.length < 6) {
    //   newErrors.password = "Minimum 6 characters";
    // }

    // if (form.confirmPassword !== form.password) {
    //   newErrors.confirmPassword = "Passwords do not match";
    // } else if (!form.confirmPassword) {
    //   newErrors.confirmPassword = "confirm Password requied";
    // }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);
      if (!Object.keys(validationErrors).length === 0) return null;
      console.log("Form Submitted:", form);

      const formData = new FormData();

      formData.append("fullName", form.fullName);
      formData.append("emailAddress", form.emailAddress);
      formData.append("phoneNumber", form.phoneNumber);

      // THIS LINE YOU ASKED ABOUT
      if (form.profile) {
        formData.append("profile", form.profile);
      }
      let res = await axios.put(
        `${API_BASE_URL}/auth/saveChanges`,
        {
          emailAddress: form.emailAddress,
          phoneNumber: form.phoneNumber,
          fullName: form.fullName,
          profile: form.profile,
        },
        { withCredentials: true },
      );
      setUser((p) => ({
        ...p,
        emailAddress: form.emailAddress,
        phoneNumber: form.phoneNumber,
        fullName: form.fullName,
        profile: form.profile,
      }));
      close();
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        fullName: user.fullName || "",
        emailAddress: user.emailAddress || "",
        phoneNumber: user.phoneNumber || "",
        profile: user.profile || "",
      }));
      console.log(user);
    }
  }, [user]);
  if (!open) return null;
  return (
    <div className="userSettingContainer">
      <div className="userSettingCard">
        <div className="userHeading">
          <h2 className="heading">Profile Settings</h2>
        </div>

        {/* Profile */}
        <div className="profileSection">
          <div className="userImage">
            <img src={form.profile || userSampleImage} alt="profile" />
          </div>

          <div className="userContent">
            <h5>{user.fullName}</h5>
            <p>Uploaded image format Should be PNG/JPG less than 2MB</p>

            <label className="uploadBtn">
              <MdOutlineCloudUpload />
              <p>Upload Photo</p>
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="formContainer">
          <div className="row">
            <div className="formGroup">
              <label>Full Name</label>
              <input
                name="fullName"
                placeholder="Enter Your fullName"
                value={form.fullName}
                onChange={handleChange}
              />
              <span>{errors.fullName}</span>
            </div>

            <div className="formGroup">
              <label>Email</label>
              <input
                name="emailAddress"
                placeholder="Enter Your emailAddress"
                value={form.emailAddress}
                onChange={handleChange}
              />
              <span>{errors.emailAddress}</span>
            </div>
          </div>

          <div className="row1">
            <div className="formGroup Phone">
              <label>Phone</label>
              <input
                name="phoneNumber"
                placeholder="Enter Your PhoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
              />
              <span>{errors.phoneNumber}</span>
            </div>
            <div className="formGroup">
              <div className="changePassword">
                <label>Change Password</label>
                <button type="button" onClick={() => setDialogOpen(true)}>
                  Change
                </button>
              </div>
            </div>
          </div>

          {/* Divider above buttons */}
          <div className="divider"></div>

          <div className="buttonGroup">
            <button type="button" className="cancelBtn" onClick={close}>
              Cancel
            </button>
            <button type="submit" className="saveBtn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <DialogChangePassword
        open={dialogOpen}
        close={() => setDialogOpen(false)}
      />
    </div>
  );
}

export default UserSettings;
