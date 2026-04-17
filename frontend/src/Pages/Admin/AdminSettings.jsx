import React, { useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminSettings.css";

function AdminSettings() {
  const [openSection, setOpenSection] = useState("site");

  const [siteData, setSiteData] = useState({
    siteName: "Victory Fit",
    tagline: "Dream it. Do it.",
    logoText: "VICTORY FIT",
    footerText: "Build strength, confidence, and a healthier lifestyle with our expert-led fitness programs.",
  });

  const [contactData, setContactData] = useState({
    email: "victoryfit@gmail.com",
    phone: "+91 9876543210",
    address: "Thanjavur, Tamil Nadu, India",
    timing: "Mon - Sat : 5.00 AM - 9.00 PM",
  });

  const [socialData, setSocialData] = useState({
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    youtube: "https://youtube.com/",
  });

  const [themeData, setThemeData] = useState({
    primaryColor: "#ef4444",
    secondaryColor: "#111827",
    accentColor: "#fb7185",
    buttonRadius: "12px",
  });

  const [adminData, setAdminData] = useState({
    adminName: "Admin",
    adminEmail: "admin@victoryfit.com",
    role: "Super Admin",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleSiteChange = (e) => {
    const { name, value } = e.target;
    setSiteData({ ...siteData, [name]: value });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setSocialData({ ...socialData, [name]: value });
  };

  const handleThemeChange = (e) => {
    const { name, value } = e.target;
    setThemeData({ ...themeData, [name]: value });
  };

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = () => {
    const allData = {
      siteData,
      contactData,
      socialData,
      themeData,
      adminData,
      passwordData,
    };

    console.log("Settings Data:", allData);
    alert("Settings updated successfully!");
  };

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Settings</h1>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("site")}>
            <h2>Site Settings</h2>
            <span>{openSection === "site" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "site" && (
            <div className="section-body">
              <label>Site Name</label>
              <input
                type="text"
                name="siteName"
                value={siteData.siteName}
                onChange={handleSiteChange}
              />

              <label>Tagline</label>
              <input
                type="text"
                name="tagline"
                value={siteData.tagline}
                onChange={handleSiteChange}
              />

              <label>Logo Text</label>
              <input
                type="text"
                name="logoText"
                value={siteData.logoText}
                onChange={handleSiteChange}
              />

              <label>Footer Description</label>
              <textarea
                rows="4"
                name="footerText"
                value={siteData.footerText}
                onChange={handleSiteChange}
              />
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("contact")}>
            <h2>Contact Settings</h2>
            <span>{openSection === "contact" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "contact" && (
            <div className="section-body">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={contactData.email}
                onChange={handleContactChange}
              />

              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={contactData.phone}
                onChange={handleContactChange}
              />

              <label>Address</label>
              <textarea
                rows="3"
                name="address"
                value={contactData.address}
                onChange={handleContactChange}
              />

              <label>Working Time</label>
              <input
                type="text"
                name="timing"
                value={contactData.timing}
                onChange={handleContactChange}
              />
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("social")}>
            <h2>Social Media Links</h2>
            <span>{openSection === "social" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "social" && (
            <div className="section-body">
              <label>Facebook URL</label>
              <input
                type="text"
                name="facebook"
                value={socialData.facebook}
                onChange={handleSocialChange}
              />

              <label>Instagram URL</label>
              <input
                type="text"
                name="instagram"
                value={socialData.instagram}
                onChange={handleSocialChange}
              />

              <label>Twitter URL</label>
              <input
                type="text"
                name="twitter"
                value={socialData.twitter}
                onChange={handleSocialChange}
              />

              <label>YouTube URL</label>
              <input
                type="text"
                name="youtube"
                value={socialData.youtube}
                onChange={handleSocialChange}
              />
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("theme")}>
            <h2>Theme Settings</h2>
            <span>{openSection === "theme" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "theme" && (
            <div className="section-body">
              <div className="multi-field-row">
                <div>
                  <label>Primary Color</label>
                  <input
                    type="text"
                    name="primaryColor"
                    value={themeData.primaryColor}
                    onChange={handleThemeChange}
                  />
                </div>

                <div>
                  <label>Secondary Color</label>
                  <input
                    type="text"
                    name="secondaryColor"
                    value={themeData.secondaryColor}
                    onChange={handleThemeChange}
                  />
                </div>
              </div>

              <div className="multi-field-row">
                <div>
                  <label>Accent Color</label>
                  <input
                    type="text"
                    name="accentColor"
                    value={themeData.accentColor}
                    onChange={handleThemeChange}
                  />
                </div>

                <div>
                  <label>Button Radius</label>
                  <input
                    type="text"
                    name="buttonRadius"
                    value={themeData.buttonRadius}
                    onChange={handleThemeChange}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("admin")}>
            <h2>Admin Profile</h2>
            <span>{openSection === "admin" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "admin" && (
            <div className="section-body">
              <label>Admin Name</label>
              <input
                type="text"
                name="adminName"
                value={adminData.adminName}
                onChange={handleAdminChange}
              />

              <label>Admin Email</label>
              <input
                type="text"
                name="adminEmail"
                value={adminData.adminEmail}
                onChange={handleAdminChange}
              />

              <label>Role</label>
              <input
                type="text"
                name="role"
                value={adminData.role}
                onChange={handleAdminChange}
              />
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("password")}>
            <h2>Password Settings</h2>
            <span>{openSection === "password" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "password" && (
            <div className="section-body">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
              />

              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />

              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
              />
            </div>
          )}
        </div>

        <div className="update-btn-wrap">
          <button className="update-btn" onClick={handleSubmit}>
            Save Settings
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminSettings;