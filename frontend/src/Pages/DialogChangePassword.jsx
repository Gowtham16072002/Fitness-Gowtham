import React, { useState } from "react";
import "../Styles/DialogChangePassword.css";
import { API_BASE_URL } from "../config";
import axios from "axios";

export default function DialogChangePassword({ open, close }) {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  function handlechange(e) {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handlesubmit() {
    try {
      const res = await axios.put(
        `${API_BASE_URL}/auth/changePassword`,
        formData,
        { withCredentials: true },
      );

      alert(res.data.message);

      if (res.data.success) {
        close();
        setFormData({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error(error.response?.data?.message || "Something went wrong");
    }
  }
  if (!open) return null;
  return (
    <div className="DialogChangePassword-Container">
      <div className="changePassword-Content">
        <div>
          <label>Current Password</label>
          <input
            type="password"
            name="oldPassword"
            placeholder="Enter Current Password"
            value={formData.oldPassword}
            onChange={handlechange}
          />
        </div>
        <div>
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter New Password"
            value={formData.newPassword}
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            value={formData.confirmPassword}
            onChange={handlechange}
          />
        </div>
        <div className="PasswordUpdate">
          <button onClick={close}>Cancel</button>
          <button onClick={handlesubmit}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
