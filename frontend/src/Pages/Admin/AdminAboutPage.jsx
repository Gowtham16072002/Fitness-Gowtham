import React, { useState, useEffect } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminAboutPage.css";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { useAuth } from "../../hooks/useAuth";

function AdminAboutPage() {
  const { csrfToken } = useAuth();

  const [openSection, setOpenSection] = useState("about");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState(null);

  const defaultData = {
    aboutTop: {
      title: "About us",
      description:
        "Helping people achieve strength, flexibility, and confidence through gym training, yoga, Zumba dance programs.",
      gallery: [
        { title: "Cardio Zone", image: "" },
        { title: "Yoga Section", image: "" },
        { title: "Zumba Section", image: "" },
        { title: "Modern Gym Equipment", image: "" },
      ],
      buttons: [
        { text: "Explore Programs" },
        { text: "Get Started" },
        { text: "Join Now" },
      ],
    },
    banner: {
      description:
        "Train stronger, move better, and live healthier with our gym, yoga, Zumba, and athletic programs designed to build strength, flexibility, endurance, and confidence.",
    },
    missionVision: {
      missionTitle: "Our Mission",
      missionDescription:
        "To empower people through fitness, wellness, and education so they can live healthier, more confident lives.",
      visionTitle: "Our Vision",
      visionDescription:
        "To create a supportive community where fitness and wellness are sustainable, enjoyable, and part of everyday life.",
    },
    transformation: {
      title: "Real Transformations From Our Members",
      description:
        "See how our gym, yoga, zumba, and dance programs help members achieve their fitness goals and transform their lifestyle.",
      cards: [
        {
          beforeImage: "",
          afterImage: "",
          category: "Weight Loss",
          description: "Strength & Weight Loss Transformation",
        },
        {
          beforeImage: "",
          afterImage: "",
          category: "Yoga",
          description: "Yoga Flexibility & Wellness Transformation",
        },
        {
          beforeImage: "",
          afterImage: "",
          category: "Zumba",
          description: "Zumba Fitness Transformation",
        },
        {
          beforeImage: "",
          afterImage: "",
          category: "Zumba Dance",
          description: "Zumba Dance Fitness Transformation",
        },
        {
          beforeImage: "",
          afterImage: "",
          category: "Overall Fitness",
          description: "Complete Fitness Transformation",
        },
        {
          beforeImage: "",
          afterImage: "",
          category: "Weight Gain",
          description: "Strength & Weight Gain Transformation",
        },
      ],
    },
    community: {
      title: "Start Your Fitness Transformation Today",
      description:
        "Join hundreds of members improving their health and lifestyle.",
      buttons: [
        { text: "View Programs" },
        { text: "Get Started today" },
        { text: "Join Now" },
      ],
    },
  };

  const [formData, setFormData] = useState(defaultData);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  useEffect(() => {
    fetchAboutContent();
  }, []);

  const fetchAboutContent = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/about-content`);

      if (res.data.success) {
        const dbData = res.data.data;

        setFormData({
          ...defaultData,
          ...dbData,
          aboutTop: {
            ...defaultData.aboutTop,
            ...dbData.aboutTop,
            gallery:
              dbData.aboutTop?.gallery?.length > 0
                ? dbData.aboutTop.gallery
                : defaultData.aboutTop.gallery,
            buttons:
              dbData.aboutTop?.buttons?.length > 0
                ? dbData.aboutTop.buttons.map((btn) => ({
                  text: btn.text || "",
                }))
                : defaultData.aboutTop.buttons,
          },
          banner: {
            ...defaultData.banner,
            ...dbData.banner,
          },
          missionVision: {
            ...defaultData.missionVision,
            ...dbData.missionVision,
          },
          transformation: {
            ...defaultData.transformation,
            ...dbData.transformation,
            cards:
              dbData.transformation?.cards?.length > 0
                ? dbData.transformation.cards
                : defaultData.transformation.cards,
          },
          community: {
            ...defaultData.community,
            ...dbData.community,
            buttons:
              dbData.community?.buttons?.length > 0
                ? dbData.community.buttons.map((btn) => ({
                  text: btn.text || "",
                }))
                : defaultData.community.buttons,
          },
        });
      }
    } catch (error) {
      console.error("About content fetch failed:", error);
      alert("Failed to fetch About page content");
    } finally {
      setLoading(false);
    }
  };

  const handleGalleryChange = (index, field, value) => {
    const updatedGallery = [...formData.aboutTop.gallery];

    updatedGallery[index] = {
      ...updatedGallery[index],
      [field]: value,
    };

    setFormData({
      ...formData,
      aboutTop: {
        ...formData.aboutTop,
        gallery: updatedGallery,
      },
    });
  };

  const handleGalleryImageUpload = async (index, file) => {
    if (!file) return;

    try {
      setUploadingIndex(index);

      const uploadData = new FormData();
      uploadData.append("image", file);

      const res = await axios.post(`${API_BASE_URL}/api/upload`, uploadData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          "x-csrf-token": csrfToken,
        },
      });

      const imageUrl =
        res.data?.imageUrl ||
        res.data?.secure_url ||
        res.data?.url ||
        res.data?.data?.imageUrl ||
        res.data?.data?.secure_url ||
        res.data?.data?.url;

      if (!imageUrl) {
        alert("Image uploaded, but image URL not found in response");
        console.log("Upload response:", res.data);
        return;
      }

      handleGalleryChange(index, "image", imageUrl);
      alert("Image uploaded successfully. Now click Update About Page.");
    } catch (error) {
      console.error("Image upload failed:", error);
      alert(error.response?.data?.message || "Image upload failed");
    } finally {
      setUploadingIndex(null);
    }
  };

  const handleTransformationImageUpload = async (index, field, file) => {
    if (!file) return;

    try {
      setUploadingIndex(`${field}-${index}`);

      const uploadData = new FormData();
      uploadData.append("image", file);

      const res = await axios.post(`${API_BASE_URL}/api/upload`, uploadData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          "x-csrf-token": csrfToken,
        },
      });

      const imageUrl =
        res.data?.imageUrl ||
        res.data?.secure_url ||
        res.data?.url ||
        res.data?.data?.secure_url;

      if (!imageUrl) {
        alert("Image upload failed");
        return;
      }

      // 🔥 THIS IS IMPORTANT
      handleTransformationChange(index, field, imageUrl);

      alert("Image uploaded successfully. Now click Update About Page.");
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    } finally {
      setUploadingIndex(null);
    }
  };

  const handleButtonChange = (index, value) => {
    const updatedButtons = [...formData.aboutTop.buttons];
    updatedButtons[index] = { text: value };

    setFormData({
      ...formData,
      aboutTop: {
        ...formData.aboutTop,
        buttons: updatedButtons,
      },
    });
  };

  const handleCommunityButtonChange = (index, value) => {
    const updatedButtons = [...formData.community.buttons];
    updatedButtons[index] = { text: value };

    setFormData({
      ...formData,
      community: {
        ...formData.community,
        buttons: updatedButtons,
      },
    });
  };


  const handleTransformationChange = (index, field, value) => {
    const updatedCards = [...formData.transformation.cards];

    updatedCards[index] = {
      ...updatedCards[index],
      [field]: value,
    };

    setFormData({
      ...formData,
      transformation: {
        ...formData.transformation,
        cards: updatedCards,
      },
    });
  };

  const handleAddTransformationCard = () => {
    const newCard = {
      beforeImage: "",
      afterImage: "",
      category: "New Transformation",
      description: "Transformation description",
    };

    setFormData((prev) => ({
      ...prev,
      transformation: {
        ...prev.transformation,
        cards: [...prev.transformation.cards, newCard],
      },
    }));
  };

  const handleDeleteTransformationCard = (index) => {
    const confirmDelete = window.confirm("Are you sure to delete this card?");
    if (!confirmDelete) return;

    const updatedCards = formData.transformation.cards.filter(
      (_, i) => i !== index
    );

    setFormData({
      ...formData,
      transformation: {
        ...formData.transformation,
        cards: updatedCards,
      },
    });
  };

  const handleSubmit = async () => {
    try {
      setSaving(true);

      const res = await axios.put(
        `${API_BASE_URL}/api/about-content`,
        formData,
        {
          withCredentials: true,
          headers: {
            "x-csrf-token": csrfToken,
          },
        }
      );

      if (res.data.success) {
        alert("About page updated successfully");
        fetchAboutContent();
      }
    } catch (error) {
      console.error("About update failed:", error);
      alert(error.response?.data?.message || "About page update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-page">
        <AdminSidebar />
        <main className="admin-content">
          <h1>Loading About CMS...</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Edit About Page</h1>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("about")}>
            <h2>About Section</h2>
            <span>{openSection === "about" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "about" && (
            <div className="section-body">
              <label>Title</label>
              <input
                value={formData.aboutTop.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    aboutTop: {
                      ...formData.aboutTop,
                      title: e.target.value,
                    },
                  })
                }
              />

              <label>Description</label>
              <textarea
                rows="4"
                value={formData.aboutTop.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    aboutTop: {
                      ...formData.aboutTop,
                      description: e.target.value,
                    },
                  })
                }
              />
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("gallery")}
          >
            <h2>Gallery Cards</h2>
            <span>{openSection === "gallery" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "gallery" && (
            <div className="section-body">
              {formData.aboutTop.gallery.map((item, index) => (
                <div className="admin-card-box" key={index}>
                  <label>Card {index + 1} Title</label>
                  <input
                    value={item.title}
                    onChange={(e) =>
                      handleGalleryChange(index, "title", e.target.value)
                    }
                  />

                  <label>Card {index + 1} Image</label>
                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={(e) =>
                      handleGalleryImageUpload(index, e.target.files[0])
                    }
                  />

                  {uploadingIndex === index && <p>Uploading image...</p>}

                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="admin-preview-img"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("buttons")}
          >
            <h2>About Buttons</h2>
            <span>{openSection === "buttons" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "buttons" && (
            <div className="section-body">
              {formData.aboutTop.buttons.map((btn, index) => (
                <div className="admin-card-box" key={index}>
                  <label>Button {index + 1} Text</label>
                  <input
                    value={btn.text}
                    onChange={(e) => handleButtonChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("banner")}
          >
            <h2>Banner Section</h2>
            <span>{openSection === "banner" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "banner" && (
            <div className="section-body">
              <label>Banner Description</label>
              <textarea
                rows="4"
                value={formData.banner.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    banner: {
                      ...formData.banner,
                      description: e.target.value,
                    },
                  })
                }
              />
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("mission")}
          >
            <h2>Mission & Vision</h2>
            <span>{openSection === "mission" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "mission" && (
            <div className="section-body">
              <label>Mission Title</label>
              <input
                value={formData.missionVision.missionTitle}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    missionVision: {
                      ...formData.missionVision,
                      missionTitle: e.target.value,
                    },
                  })
                }
              />

              <label>Mission Description</label>
              <textarea
                rows="3"
                value={formData.missionVision.missionDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    missionVision: {
                      ...formData.missionVision,
                      missionDescription: e.target.value,
                    },
                  })
                }
              />

              <label>Vision Title</label>
              <input
                value={formData.missionVision.visionTitle}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    missionVision: {
                      ...formData.missionVision,
                      visionTitle: e.target.value,
                    },
                  })
                }
              />

              <label>Vision Description</label>
              <textarea
                rows="3"
                value={formData.missionVision.visionDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    missionVision: {
                      ...formData.missionVision,
                      visionDescription: e.target.value,
                    },
                  })
                }
              />
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("transformation")}
          >
            <h2>Transformation Section</h2>
            <span>{openSection === "transformation" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "transformation" && (
            <div className="section-body">
              <label>Title</label>
              <input
                value={formData.transformation.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    transformation: {
                      ...formData.transformation,
                      title: e.target.value,
                    },
                  })
                }
              />

              <label>Description</label>
              <textarea
                rows="4"
                value={formData.transformation.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    transformation: {
                      ...formData.transformation,
                      description: e.target.value,
                    },
                  })
                }
              />

              {formData.transformation.cards.map((card, index) => (
                <div className="admin-card-box" key={index}>
                  <h3>Transformation Card {index + 1}</h3>

                  <label>Before Image</label>
                  <input
                    type="file"
                    onChange={(e) =>
                      handleTransformationImageUpload(index, "beforeImage", e.target.files[0])
                    }
                  />

                  {uploadingIndex === `beforeImage-${index}` && <p>Uploading...</p>}

                  {card.beforeImage && (
                    <img src={card.beforeImage} className="admin-preview-img" />
                  )}

                  <label>After Image</label>
                  <input
                    type="file"
                    onChange={(e) =>
                      handleTransformationImageUpload(index, "afterImage", e.target.files[0])
                    }
                  />

                  {uploadingIndex === `afterImage-${index}` && <p>Uploading...</p>}

                  {card.afterImage && (
                    <img src={card.afterImage} className="admin-preview-img" />
                  )}

                  <label>Category</label>
                  <input
                    value={card.category}
                    onChange={(e) =>
                      handleTransformationChange(index, "category", e.target.value)
                    }
                  />

                  <label>Description</label>
                  <textarea
                    rows="3"
                    value={card.description}
                    onChange={(e) =>
                      handleTransformationChange(index, "description", e.target.value)
                    }
                  />
                  <button
                    className="delete-card-btn"
                    onClick={() => handleDeleteTransformationCard(index)}
                  >
                    Delete Card
                  </button>
                </div>

              ))}
              <button
                type="button"
                className="update-btn"
                onClick={handleAddTransformationCard}
              >
                + Add New Transformation
              </button>
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("community")}
          >
            <h2>Community Section</h2>
            <span>{openSection === "community" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "community" && (
            <div className="section-body">
              <label>Title</label>
              <input
                value={formData.community.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    community: {
                      ...formData.community,
                      title: e.target.value,
                    },
                  })
                }
              />

              <label>Description</label>
              <textarea
                rows="4"
                value={formData.community.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    community: {
                      ...formData.community,
                      description: e.target.value,
                    },
                  })
                }
              />

              {formData.community.buttons.map((btn, index) => (
                <div className="admin-card-box" key={index}>
                  <label>Button {index + 1} Text</label>
                  <input
                    value={btn.text}
                    onChange={(e) =>
                      handleCommunityButtonChange(index, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="update-btn-wrap">
          <button className="update-btn" onClick={handleSubmit} disabled={saving}>
            {saving ? "Updating..." : "Update About Page"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminAboutPage;