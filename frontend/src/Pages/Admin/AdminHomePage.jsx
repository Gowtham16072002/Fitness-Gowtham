// import React, { useState, useEffect, useContext } from "react";
// import AdminSidebar from "../../Components/AdminSidebar";
// import "../../Styles/AdminHomePage.css";
// import { AuthContext } from "../../Context/AuthContext";
// import axios from "axios";

// function AdminHomePage() {
//   // const {user} = useContext(AuthContext);
//   const [openSection, setOpenSection] = useState("hero");
//   const [uploading, setUploading] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [uploadMessage, setUploadMessage] = useState("");
//   const [formData, setFormData] = useState({
//     hero: {
//       heading: "",
//       description: "",
//       primaryButtonText: "",
//       secondaryButtonText: "",
//       backgroundImage: "",
//     },
//     stats: [
//       { number: "", label: "" },
//       { number: "", label: "" },
//       { number: "", label: "" },
//     ],
//     whyChooseUs: {
//       heading: "",
//       cards: [
//         { title: "", description: "", icon: "" },
//         { title: "", description: "", icon: "" },
//         { title: "", description: "", icon: "" },
//       ],
//     },
//     cta: {
//       heading: "",
//       subHeading: "",
//       description: "",
//       primaryButtonText: "",
//       secondaryButtonText: "",
//     },
//   });

//   useEffect(() => {
//     fetchHomeContent();
//   }, []);

//   const fetchHomeContent = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/home-content");
//       const data = await res.json();
//       console.log(data);
//       if (data.success) {
//         setFormData(data.data);
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };

//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? "" : section);
//   };

//   const handleHeroChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       hero: {
//         ...prev.hero,
//         [name]: value,
//       },
//     }));
//   };

//   const handleStatChange = (index, field, value) => {
//     const updated = [...formData.stats];
//     updated[index][field] = value;

//     setFormData((prev) => ({
//       ...prev,
//       stats: updated,
//     }));
//   };

//   const handleWhyHeadingChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       whyChooseUs: {
//         ...prev.whyChooseUs,
//         heading: e.target.value,
//       },
//     }));
//   };

//   const handleWhyCardChange = (index, field, value) => {
//     const updatedCards = [...formData.whyChooseUs.cards];
//     updatedCards[index][field] = value;

//     setFormData((prev) => ({
//       ...prev,
//       whyChooseUs: {
//         ...prev.whyChooseUs,
//         cards: updatedCards,
//       },
//     }));
//   };

//   const addWhyCard = () => {
//     setFormData((prev) => ({
//       ...prev,
//       whyChooseUs: {
//         ...prev.whyChooseUs,
//         cards: [
//           ...prev.whyChooseUs.cards,
//           { title: "", description: "", icon: "" },
//         ],
//       },
//     }));
//   };

//   const deleteWhyCard = (index) => {
//     if (formData.whyChooseUs.cards.length === 1) return;

//     const updatedCards = formData.whyChooseUs.cards.filter(
//       (_, cardIndex) => cardIndex !== index
//     );

//     setFormData((prev) => ({
//       ...prev,
//       whyChooseUs: {
//         ...prev.whyChooseUs,
//         cards: updatedCards,
//       },
//     }));
//   };

//   const handleCTAChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       cta: {
//         ...prev.cta,
//         [name]: value,
//       },
//     }));
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     //const token = localStorage.getItem("token");
//     // if (!token) {
//     //   alert("Please login first");
//     //   return;
//     // }

//     const imageData = new FormData();
//     imageData.append("image", file);

//     setUploading(true);
//     setUploadMessage("Uploading image... Please wait.");

//     try {
//       const response = await fetch("http://localhost:3000/api/upload", {
//         method: "POST",
//         credentials:"include",
//         body: imageData,
//       });
//       console.log(response);

//       const result = await response.json();

//       if (result.success) {
//         setFormData((prev) => ({
//           ...prev,
//           hero: {
//             ...prev.hero,
//             backgroundImage: result.imageUrl,
//           },
//         }));

//         setUploadMessage("Image uploaded successfully.");
//       } else {
//         setUploadMessage(result.message || "Image upload failed.");
//         alert(result.message || "Image upload failed");
//       }
//     } catch (error) {
//       console.error("Upload error:", error);
//       setUploadMessage("Error uploading image.");
//       alert("Error uploading image");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = async () => {
//     if (uploading) {
//       alert("Please wait until image upload is completed.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please login first");
//       return;
//     }

//     try {
//       const response = await axios.put(`http://localhost:3000/api/home-content`, {
//         hero: formData.hero,
//         stats: formData.stats,
//         whyChooseUs:formData.whyChooseUs,
//         cta:formData.cta
//       }, { withCredentials: true })
//       response && response.data.success && alert("content updated")
//       // const response = await fetch("http://localhost:3000/api/home-content", {
//       //   method: "PUT",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //     Authorization: `Bearer ${token}`,
//       //   },
//       //   body: JSON.stringify(formData),
//       // });

//       // const result = await response.json();

//       // if (result.success) {
//       //   alert("Content updated successfully!");
//       //   fetchHomeContent();
//       // } else {
//       //   alert(result.message || "Update failed");
//       // }
//     } catch (error) {
//       console.error("Update error:", error);
//       alert("Error updating content");
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="admin-page">
//       <AdminSidebar />

//       <main className="admin-content">
//         <h1>Edit Home Page Content</h1>

//         {/* HERO */}
//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("hero")}>
//             <h2>Hero Section</h2>
//             <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "hero" && (
//             <div className="section-body">
//               <label>Heading</label>
//               <input
//                 type="text"
//                 name="heading"
//                 value={formData.hero.heading}
//                 onChange={handleHeroChange}
//               />

//               <label>Description</label>
//               <textarea
//                 name="description"
//                 rows="4"
//                 value={formData.hero.description}
//                 onChange={handleHeroChange}
//               />

//               <label>Primary Button</label>
//               <input
//                 type="text"
//                 name="primaryButtonText"
//                 value={formData.hero.primaryButtonText}
//                 onChange={handleHeroChange}
//               />

//               <label>Secondary Button</label>
//               <input
//                 type="text"
//                 name="secondaryButtonText"
//                 value={formData.hero.secondaryButtonText}
//                 onChange={handleHeroChange}
//               />

//               <label>Upload Background Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//               />

//               {uploadMessage && (
//                 <p className="upload-status-text">{uploadMessage}</p>
//               )}

//               {formData.hero.backgroundImage && (
//                 <div className="image-preview-box">
//                   <img
//                     src={formData.hero.backgroundImage}
//                     alt="Hero Preview"
//                   />
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* STATS */}
//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("stats")}>
//             <h2>Stats Section</h2>
//             <span>{openSection === "stats" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "stats" && (
//             <div className="section-body">
//               {formData.stats.map((item, index) => (
//                 <div className="multi-field-row" key={index}>
//                   <div>
//                     <label>Number</label>
//                     <input
//                       type="text"
//                       value={item.number}
//                       onChange={(e) =>
//                         handleStatChange(index, "number", e.target.value)
//                       }
//                     />
//                   </div>

//                   <div>
//                     <label>Label</label>
//                     <input
//                       type="text"
//                       value={item.label}
//                       onChange={(e) =>
//                         handleStatChange(index, "label", e.target.value)
//                       }
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* WHY CHOOSE US */}
//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("why")}>
//             <h2>Why Choose Us</h2>
//             <span>{openSection === "why" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "why" && (
//             <div className="section-body">
//               <label>Heading</label>
//               <input
//                 type="text"
//                 value={formData.whyChooseUs.heading}
//                 onChange={handleWhyHeadingChange}
//               />

//               {formData.whyChooseUs.cards.map((card, index) => (
//                 <div className="trainer-box" key={index}>
//                   <div className="card-top-bar">
//                     <h3>Card {index + 1}</h3>
//                     <button
//                       type="button"
//                       className="delete-card-btn"
//                       onClick={() => deleteWhyCard(index)}
//                       disabled={formData.whyChooseUs.cards.length === 1}
//                     >
//                       Delete
//                     </button>
//                   </div>

//                   <label>Card Title</label>
//                   <input
//                     type="text"
//                     value={card.title}
//                     onChange={(e) =>
//                       handleWhyCardChange(index, "title", e.target.value)
//                     }
//                   />

//                   <label>Card Description</label>
//                   <input
//                     type="text"
//                     value={card.description}
//                     onChange={(e) =>
//                       handleWhyCardChange(index, "description", e.target.value)
//                     }
//                   />

//                   <label>Icon Class</label>
//                   <input
//                     type="text"
//                     value={card.icon}
//                     onChange={(e) =>
//                       handleWhyCardChange(index, "icon", e.target.value)
//                     }
//                     placeholder="fa-dumbbell"
//                   />
//                 </div>
//               ))}

//               <div className="add-card-wrap">
//                 <button
//                   type="button"
//                   className="add-card-btn"
//                   onClick={addWhyCard}
//                 >
//                   + Add New Card
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* CTA */}
//         <div className="admin-section">
//           <div className="section-header" onClick={() => toggleSection("cta")}>
//             <h2>CTA Section</h2>
//             <span>{openSection === "cta" ? "⌃" : "⌄"}</span>
//           </div>

//           {openSection === "cta" && (
//             <div className="section-body">
//               <label>Heading</label>
//               <input
//                 type="text"
//                 name="heading"
//                 value={formData.cta.heading}
//                 onChange={handleCTAChange}
//               />

//               <label>Sub Heading</label>
//               <input
//                 type="text"
//                 name="subHeading"
//                 value={formData.cta.subHeading}
//                 onChange={handleCTAChange}
//               />

//               <label>Description</label>
//               <textarea
//                 rows="4"
//                 name="description"
//                 value={formData.cta.description}
//                 onChange={handleCTAChange}
//               />

//               <label>Primary Button Text</label>
//               <input
//                 type="text"
//                 name="primaryButtonText"
//                 value={formData.cta.primaryButtonText}
//                 onChange={handleCTAChange}
//               />

//               <label>Secondary Button Text</label>
//               <input
//                 type="text"
//                 name="secondaryButtonText"
//                 value={formData.cta.secondaryButtonText}
//                 onChange={handleCTAChange}
//               />
//             </div>
//           )}
//         </div>

//         <div className="update-btn-wrap">
//           <button
//             className="update-btn"
//             onClick={handleSubmit}
//             disabled={uploading || saving}
//           >
//             {uploading
//               ? "Please wait, image uploading..."
//               : saving
//                 ? "Saving..."
//                 : "Update Content"}
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AdminHomePage;

import React, { useContext, useEffect, useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminHomePage.css";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { AuthContext } from "../../Context/AuthContext";

function AdminHomePage() {
  const { csrfToken } = useContext(AuthContext);

  const [openSection, setOpenSection] = useState("hero");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [formData, setFormData] = useState({
    hero: {
      heading: "",
      description: "",
      primaryButtonText: "",
      secondaryButtonText: "",
      backgroundImage: "",
    },
    stats: [
      { number: "", label: "" },
      { number: "", label: "" },
      { number: "", label: "" },
    ],
    whyChooseUs: {
      heading: "",
      cards: [
        { title: "", description: "", icon: "" },
        { title: "", description: "", icon: "" },
        { title: "", description: "", icon: "" },
      ],
    },
    cta: {
      heading: "",
      subHeading: "",
      description: "",
      primaryButtonText: "",
      secondaryButtonText: "",
    },
  });

  useEffect(() => {
    fetchHomeContent();
  }, []);

  const fetchHomeContent = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/home-content`, {
        withCredentials: true,
      });

      if (response?.data?.success) {
        setFormData(response.data.data);
      }
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to fetch home content");
    }
  };

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  const handleHeroChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [name]: value,
      },
    }));
  };

  const handleStatChange = (index, field, value) => {
    const updatedStats = [...formData.stats];
    updatedStats[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      stats: updatedStats,
    }));
  };

  const handleWhyHeadingChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      whyChooseUs: {
        ...prev.whyChooseUs,
        heading: e.target.value,
      },
    }));
  };

  const handleWhyCardChange = (index, field, value) => {
    const updatedCards = [...formData.whyChooseUs.cards];
    updatedCards[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      whyChooseUs: {
        ...prev.whyChooseUs,
        cards: updatedCards,
      },
    }));
  };

  const addWhyCard = () => {
    setFormData((prev) => ({
      ...prev,
      whyChooseUs: {
        ...prev.whyChooseUs,
        cards: [
          ...prev.whyChooseUs.cards,
          { title: "", description: "", icon: "" },
        ],
      },
    }));
  };

  const deleteWhyCard = (index) => {
    if (formData.whyChooseUs.cards.length === 1) return;

    const updatedCards = formData.whyChooseUs.cards.filter(
      (_, cardIndex) => cardIndex !== index
    );

    setFormData((prev) => ({
      ...prev,
      whyChooseUs: {
        ...prev.whyChooseUs,
        cards: updatedCards,
      },
    }));
  };

  const handleCTAChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      cta: {
        ...prev.cta,
        [name]: value,
      },
    }));
  };

  const validateBeforeSubmit = () => {
    if (
      !formData.hero.heading.trim() ||
      !formData.hero.description.trim() ||
      !formData.hero.primaryButtonText.trim() ||
      !formData.hero.secondaryButtonText.trim()
    ) {
      alert("Please fill the hero section completely.");
      return false;
    }

    const hasEmptyStats = formData.stats.some(
      (item) => !item.number?.trim() || !item.label?.trim()
    );

    if (hasEmptyStats) {
      alert("Please fill all stats fields.");
      return false;
    }

    if (!formData.whyChooseUs.heading.trim()) {
      alert("Please fill the Why Choose Us heading.");
      return false;
    }

    const hasEmptyCards = formData.whyChooseUs.cards.some(
      (card) =>
        !card.title?.trim() ||
        !card.description?.trim() ||
        !card.icon?.trim()
    );

    if (hasEmptyCards) {
      alert("Please fill all Why Choose Us card fields.");
      return false;
    }

    if (
      !formData.cta.heading.trim() ||
      !formData.cta.subHeading.trim() ||
      !formData.cta.description.trim() ||
      !formData.cta.primaryButtonText.trim() ||
      !formData.cta.secondaryButtonText.trim()
    ) {
      alert("Please fill the CTA section completely.");
      return false;
    }

    return true;
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!csrfToken) {
      alert("CSRF token not ready. Please wait and try again.");
      return;
    }

    const imageData = new FormData();
    imageData.append("image", file);

    setUploading(true);
    setUploadMessage("Uploading image... Please wait.");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/upload`,
        imageData,
        {
          withCredentials: true,
          headers: {
            "x-csrf-token": csrfToken,
          },
        }
      );

      if (response?.data?.success) {
        setFormData((prev) => ({
          ...prev,
          hero: {
            ...prev.hero,
            backgroundImage: response.data.imageUrl,
          },
        }));

        setUploadMessage("Image uploaded successfully.");
      } else {
        setUploadMessage(response?.data?.message || "Image upload failed.");
        alert(response?.data?.message || "Image upload failed");
      }
    } catch (error) {
      console.log("Upload error response:", error?.response);
      console.log("Upload error data:", error?.response?.data);

      setUploadMessage("Error uploading image.");
      alert(error?.response?.data?.message || "Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      setSaving(true);

      // 🔥 ALWAYS GET FRESH CSRF TOKEN
      const csrfRes = await axios.get(`${API_BASE_URL}/auth/csrf-token`, {
        withCredentials: true,
      });

      const freshToken = csrfRes.data.csrfToken;

      const response = await axios.put(
        `${API_BASE_URL}/api/home-content`,
        {
          hero: formData.hero,
          stats: formData.stats,
          whyChooseUs: formData.whyChooseUs,
          cta: formData.cta,
        },
        {
          withCredentials: true,
          headers: {
            "x-csrf-token": freshToken, // 🔥 use fresh token
          },
        }
      );

      alert("Updated successfully!");
    } catch (error) {
      alert(error?.response?.data?.message || "Error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Edit Home Page Content</h1>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("hero")}>
            <h2>Hero Section</h2>
            <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "hero" && (
            <div className="section-body">
              <label>Heading</label>
              <input
                type="text"
                name="heading"
                value={formData.hero.heading}
                onChange={handleHeroChange}
              />

              <label>Description</label>
              <textarea
                name="description"
                rows="4"
                value={formData.hero.description}
                onChange={handleHeroChange}
              />

              <label>Primary Button</label>
              <input
                type="text"
                name="primaryButtonText"
                value={formData.hero.primaryButtonText}
                onChange={handleHeroChange}
              />

              <label>Secondary Button</label>
              <input
                type="text"
                name="secondaryButtonText"
                value={formData.hero.secondaryButtonText}
                onChange={handleHeroChange}
              />

              <label>Upload Background Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={!csrfToken || uploading}
              />

              {uploadMessage && (
                <p className="upload-status-text">{uploadMessage}</p>
              )}

              {formData.hero.backgroundImage && (
                <div className="image-preview-box">
                  <img
                    src={formData.hero.backgroundImage}
                    alt="Hero Preview"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("stats")}>
            <h2>Stats Section</h2>
            <span>{openSection === "stats" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "stats" && (
            <div className="section-body">
              {formData.stats.map((item, index) => (
                <div className="multi-field-row" key={index}>
                  <div>
                    <label>Number</label>
                    <input
                      type="text"
                      value={item.number}
                      onChange={(e) =>
                        handleStatChange(index, "number", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label>Label</label>
                    <input
                      type="text"
                      value={item.label}
                      onChange={(e) =>
                        handleStatChange(index, "label", e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("why")}>
            <h2>Why Choose Us</h2>
            <span>{openSection === "why" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "why" && (
            <div className="section-body">
              <label>Heading</label>
              <input
                type="text"
                value={formData.whyChooseUs.heading}
                onChange={handleWhyHeadingChange}
              />

              {formData.whyChooseUs.cards.map((card, index) => (
                <div className="trainer-box" key={index}>
                  <div className="card-top-bar">
                    <h3>Card {index + 1}</h3>
                    <button
                      type="button"
                      className="delete-card-btn"
                      onClick={() => deleteWhyCard(index)}
                      disabled={formData.whyChooseUs.cards.length === 1}
                    >
                      Delete
                    </button>
                  </div>

                  <label>Card Title</label>
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) =>
                      handleWhyCardChange(index, "title", e.target.value)
                    }
                  />

                  <label>Card Description</label>
                  <input
                    type="text"
                    value={card.description}
                    onChange={(e) =>
                      handleWhyCardChange(index, "description", e.target.value)
                    }
                  />

                  <label>Icon Class</label>
                  <input
                    type="text"
                    value={card.icon}
                    onChange={(e) =>
                      handleWhyCardChange(index, "icon", e.target.value)
                    }
                    placeholder="fa-dumbbell"
                  />
                </div>
              ))}

              <div className="add-card-wrap">
                <button
                  type="button"
                  className="add-card-btn"
                  onClick={addWhyCard}
                >
                  + Add New Card
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("cta")}>
            <h2>CTA Section</h2>
            <span>{openSection === "cta" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "cta" && (
            <div className="section-body">
              <label>Heading</label>
              <input
                type="text"
                name="heading"
                value={formData.cta.heading}
                onChange={handleCTAChange}
              />

              <label>Sub Heading</label>
              <input
                type="text"
                name="subHeading"
                value={formData.cta.subHeading}
                onChange={handleCTAChange}
              />

              <label>Description</label>
              <textarea
                rows="4"
                name="description"
                value={formData.cta.description}
                onChange={handleCTAChange}
              />

              <label>Primary Button Text</label>
              <input
                type="text"
                name="primaryButtonText"
                value={formData.cta.primaryButtonText}
                onChange={handleCTAChange}
              />

              <label>Secondary Button Text</label>
              <input
                type="text"
                name="secondaryButtonText"
                value={formData.cta.secondaryButtonText}
                onChange={handleCTAChange}
              />
            </div>
          )}
        </div>

        <div className="update-btn-wrap">
          <button
            className="update-btn"
            onClick={handleSubmit}
            disabled={uploading || saving || !csrfToken}
          >
            {uploading
              ? "Please wait, image uploading..."
              : saving
                ? "Saving..."
                : !csrfToken
                  ? "Preparing security token..."
                  : "Update Content"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminHomePage;