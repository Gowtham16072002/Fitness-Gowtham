import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminTestimonials.css";
import { API_BASE_URL } from "../../config";
import { useAuth } from "../../hooks/useAuth";

function AdminTestimonials() {
  const { csrfToken, loading: authLoading } = useAuth();

  const [openSection, setOpenSection] = useState("hero");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState(null);

  const [testimonialCMSData, setTestimonialCMSData] = useState({
    hero: {
      title: "",
      subtitle: "",
    },
    displayLimit: 4,
    testimonials: [],
  });

  useEffect(() => {
    fetchTestimonialContent();
  }, []);

  const fetchTestimonialContent = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/testimonial-content`, {
        withCredentials: true,
      });

      if (res.data.success) {
        setTestimonialCMSData(res.data.data);
      }
    } catch (error) {
      alert("Failed to fetch testimonial content");
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleHeroChange = (e) => {
    const { name, value } = e.target;

    setTestimonialCMSData({
      ...testimonialCMSData,
      hero: {
        ...testimonialCMSData.hero,
        [name]: value,
      },
    });
  };

  const handleDisplayLimitChange = (e) => {
    setTestimonialCMSData({
      ...testimonialCMSData,
      displayLimit: Number(e.target.value),
    });
  };

  const handleTestimonialChange = (index, field, value) => {
    const updatedTestimonials = [...testimonialCMSData.testimonials];

    updatedTestimonials[index][field] =
      field === "rating" ? Number(value) : value;

    setTestimonialCMSData({
      ...testimonialCMSData,
      testimonials: updatedTestimonials,
    });
  };

  const handleImageUpload = async (index, file) => {
    if (!file) return;

    if (authLoading || !csrfToken) {
      alert("Please wait... authentication loading");
      return;
    }

    try {
      setUploadingIndex(index);

      const formData = new FormData();
      formData.append("image", file);

      const res = await axios.post(`${API_BASE_URL}/api/upload`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          "x-csrf-token": csrfToken,
        },
      });

      if (res.data.success) {
        const updatedTestimonials = [...testimonialCMSData.testimonials];
        updatedTestimonials[index].image = res.data.imageUrl;

        setTestimonialCMSData({
          ...testimonialCMSData,
          testimonials: updatedTestimonials,
        });

        alert("Image uploaded successfully");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Image upload failed");
    } finally {
      setUploadingIndex(null);
    }
  };

  const addTestimonial = () => {
    const newTestimonial = {
      name: "",
      role: "",
      review: "",
      rating: 5,
      image: "",
    };

    setTestimonialCMSData({
      ...testimonialCMSData,
      testimonials: [...testimonialCMSData.testimonials, newTestimonial],
    });
  };

  const removeTestimonial = (index) => {
    const updatedTestimonials = testimonialCMSData.testimonials.filter(
      (_, itemIndex) => itemIndex !== index
    );

    setTestimonialCMSData({
      ...testimonialCMSData,
      testimonials: updatedTestimonials,
    });
  };

  const validateForm = () => {
    if (!testimonialCMSData.hero.title.trim()) {
      alert("Testimonials title is required");
      return false;
    }

    if (!testimonialCMSData.hero.subtitle.trim()) {
      alert("Testimonials subtitle is required");
      return false;
    }

    if (testimonialCMSData.testimonials.length === 0) {
      alert("At least one testimonial is required");
      return false;
    }

    for (let item of testimonialCMSData.testimonials) {
      if (
        !item.name?.trim() ||
        !item.role?.trim() ||
        !item.review?.trim() ||
        !item.image?.trim()
      ) {
        alert("Please fill all testimonial fields including image");
        return false;
      }

      if (item.rating < 1 || item.rating > 5) {
        alert("Rating must be between 1 and 5");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async () => {
    if (authLoading || !csrfToken) {
      alert("Please wait... authentication loading");
      return;
    }

    if (!validateForm()) return;

    try {
      setSaving(true);

      const res = await axios.put(
        `${API_BASE_URL}/api/testimonial-content`,
        {
          hero: testimonialCMSData.hero,
          displayLimit: testimonialCMSData.displayLimit,
          testimonials: testimonialCMSData.testimonials,
        },
        {
          withCredentials: true,
          headers: {
            "x-csrf-token": csrfToken,
          },
        }
      );

      if (res.data.success) {
        alert("Testimonials section updated successfully");
        setTestimonialCMSData(res.data.data);
      }
    } catch (error) {
      alert(
        error.response?.data?.message || "Failed to update testimonial content"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading || authLoading) {
    return (
      <div className="admin-page">
        <AdminSidebar />
        <main className="admin-content">
          <h1>Loading Testimonials CMS...</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Edit Testimonials Section</h1>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("hero")}>
            <h2>Testimonials Section Heading</h2>
            <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "hero" && (
            <div className="section-body">
              <label>Section Title</label>
              <input
                type="text"
                name="title"
                value={testimonialCMSData.hero.title}
                onChange={handleHeroChange}
              />

              <label>Section Subtitle</label>
              <textarea
                name="subtitle"
                rows="4"
                value={testimonialCMSData.hero.subtitle}
                onChange={handleHeroChange}
              />

              <label>How many testimonials show on homepage?</label>
              <select
                value={testimonialCMSData.displayLimit}
                onChange={handleDisplayLimitChange}
              >
                <option value={3}>3 Testimonials</option>
                <option value={4}>4 Testimonials</option>
                <option value={6}>6 Testimonials</option>
                <option value={9}>9 Testimonials</option>
                <option value={12}>12 Testimonials</option>
              </select>
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("testimonials")}
          >
            <h2>Testimonials Cards</h2>
            <span>{openSection === "testimonials" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "testimonials" && (
            <div className="section-body">
              {testimonialCMSData.testimonials.map((item, index) => (
                <div className="admin-box testimonial-box" key={item._id || index}>
                  <label>Client Name</label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleTestimonialChange(index, "name", e.target.value)
                    }
                  />

                  <label>Client Role</label>
                  <input
                    type="text"
                    value={item.role}
                    onChange={(e) =>
                      handleTestimonialChange(index, "role", e.target.value)
                    }
                  />

                  <div className="multi-field-row">
                    <div>
                      <label>Rating</label>
                      <select
                        value={item.rating}
                        onChange={(e) =>
                          handleTestimonialChange(index, "rating", e.target.value)
                        }
                      >
                        <option value={1}>1 Star</option>
                        <option value={2}>2 Stars</option>
                        <option value={3}>3 Stars</option>
                        <option value={4}>4 Stars</option>
                        <option value={5}>5 Stars</option>
                      </select>
                    </div>

                    <div>
                      <label>Client Image</label>
                      <input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,image/webp"
                        onChange={(e) =>
                          handleImageUpload(index, e.target.files[0])
                        }
                      />

                      {uploadingIndex === index && <p>Uploading image...</p>}
                    </div>
                  </div>

                  {item.image && (
                    <div className="image-preview-box">
                      <img src={item.image} alt="Client Preview" />
                    </div>
                  )}

                  <label>Review</label>
                  <textarea
                    rows="4"
                    value={item.review}
                    onChange={(e) =>
                      handleTestimonialChange(index, "review", e.target.value)
                    }
                  />

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeTestimonial(index)}
                  >
                    Remove Testimonial
                  </button>
                </div>
              ))}

              <button type="button" className="add-btn" onClick={addTestimonial}>
                + Add Testimonial
              </button>
            </div>
          )}
        </div>

        <div className="update-btn-wrap">
          <button
            className="update-btn"
            onClick={handleSubmit}
            disabled={saving || authLoading || !csrfToken}
          >
            {saving ? "Updating..." : "Update Testimonials Section"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminTestimonials;