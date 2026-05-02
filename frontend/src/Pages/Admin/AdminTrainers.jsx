import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminTrainers.css";
import { API_BASE_URL } from "../../config";
import { useAuth } from "../../hooks/useAuth";

function AdminTrainers() {
  const { csrfToken } = useAuth();

  const [openSection, setOpenSection] = useState("hero");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingIndex, setUploadingIndex] = useState(null);

  const [trainerCMSData, setTrainerCMSData] = useState({
    hero: {
      title: "",
      subtitle: "",
    },
    displayLimit: 3,
    trainers: [],
  });

  useEffect(() => {
    fetchTrainerContent();
  }, []);

  const handleDisplayLimitChange = (e) => {
    setTrainerCMSData({
      ...trainerCMSData,
      displayLimit: Number(e.target.value),
    });
  };

  const fetchTrainerContent = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/trainer-content`, {
        withCredentials: true,
      });

      if (res.data.success) {
        setTrainerCMSData(res.data.data);
      }
    } catch (error) {
      alert("Failed to fetch trainer content");
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleHeroChange = (e) => {
    const { name, value } = e.target;

    setTrainerCMSData({
      ...trainerCMSData,
      hero: {
        ...trainerCMSData.hero,
        [name]: value,
      },
    });
  };

  const handleTrainerChange = (index, field, value) => {
    const updatedTrainers = [...trainerCMSData.trainers];
    updatedTrainers[index][field] = value;

    setTrainerCMSData({
      ...trainerCMSData,
      trainers: updatedTrainers,
    });
  };

  const handleTrainerImageUpload = async (index, file) => {
    if (!file) return;

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
        const updatedTrainers = [...trainerCMSData.trainers];
        updatedTrainers[index].image = res.data.imageUrl;

        setTrainerCMSData({
          ...trainerCMSData,
          trainers: updatedTrainers,
        });

        alert("Image uploaded successfully");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Image upload failed");
    } finally {
      setUploadingIndex(null);
    }
  };

  const addTrainer = () => {
    const newTrainer = {
      name: "",
      role: "",
      certificate: "",
      experience: "",
      specialty: "",
      image: "",
    };

    setTrainerCMSData({
      ...trainerCMSData,
      trainers: [...trainerCMSData.trainers, newTrainer],
    });
  };

  const removeTrainer = (index) => {
    const updatedTrainers = trainerCMSData.trainers.filter(
      (_, trainerIndex) => trainerIndex !== index
    );

    setTrainerCMSData({
      ...trainerCMSData,
      trainers: updatedTrainers,
    });
  };

  const validateForm = () => {
    if (!trainerCMSData.hero.title.trim()) {
      alert("Trainer section title is required");
      return false;
    }

    if (!trainerCMSData.hero.subtitle.trim()) {
      alert("Trainer section subtitle is required");
      return false;
    }

    if (trainerCMSData.trainers.length === 0) {
      alert("At least one trainer is required");
      return false;
    }

    for (let trainer of trainerCMSData.trainers) {
      if (
        !trainer.name?.trim() ||
        !trainer.role?.trim() ||
        !trainer.certificate?.trim() ||
        !trainer.experience?.trim() ||
        !trainer.specialty?.trim() ||
        !trainer.image?.trim()
      ) {
        alert("Please fill all trainer fields including image");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setSaving(true);

      const res = await axios.put(
        `${API_BASE_URL}/api/trainer-content`,
        {
          hero: trainerCMSData.hero,
          displayLimit: trainerCMSData.displayLimit,
          trainers: trainerCMSData.trainers,
        },
        {
          withCredentials: true,
          headers: {
            "x-csrf-token": csrfToken,
          },
        }
      );

      if (res.data.success) {
        alert("Trainer section updated successfully");
        setTrainerCMSData(res.data.data);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to update trainer content");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-page">
        <AdminSidebar />
        <main className="admin-content">
          <h1>Loading Trainer CMS...</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Edit Trainers Section</h1>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("hero")}>
            <h2>Trainer Section Heading</h2>
            <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "hero" && (
            <div className="section-body">
              <label>Section Title</label>
              <input
                type="text"
                name="title"
                value={trainerCMSData.hero.title}
                onChange={handleHeroChange}
              />

              <label>Section Subtitle</label>
              <textarea
                name="subtitle"
                rows="4"
                value={trainerCMSData.hero.subtitle}
                onChange={handleHeroChange}
              />

              <label>How many trainers show on homepage?</label>
              <select
                value={trainerCMSData.displayLimit}
                onChange={handleDisplayLimitChange}
              >
                <option value={3}>3 Trainers</option>
                <option value={6}>6 Trainers</option>
                <option value={9}>9 Trainers</option>
                <option value={12}>12 Trainers</option>
              </select>
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("trainers")}
          >
            <h2>Trainer Cards</h2>
            <span>{openSection === "trainers" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "trainers" && (
            <div className="section-body">
              {trainerCMSData.trainers.map((trainer, index) => (
                <div className="admin-box trainer-box" key={index}>
                  <label>Trainer Name</label>
                  <input
                    type="text"
                    value={trainer.name}
                    onChange={(e) =>
                      handleTrainerChange(index, "name", e.target.value)
                    }
                  />

                  <label>Role</label>
                  <input
                    type="text"
                    value={trainer.role}
                    onChange={(e) =>
                      handleTrainerChange(index, "role", e.target.value)
                    }
                  />

                  <label>Certificate</label>
                  <input
                    type="text"
                    value={trainer.certificate}
                    onChange={(e) =>
                      handleTrainerChange(index, "certificate", e.target.value)
                    }
                  />

                  <div className="multi-field-row">
                    <div>
                      <label>Experience</label>
                      <input
                        type="text"
                        value={trainer.experience}
                        onChange={(e) =>
                          handleTrainerChange(
                            index,
                            "experience",
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div>
                      <label>Specialty</label>
                      <input
                        type="text"
                        value={trainer.specialty}
                        onChange={(e) =>
                          handleTrainerChange(
                            index,
                            "specialty",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <label>Trainer Image</label>

                  {trainer.image && (
                    <div className="image-preview-box">
                      <img src={trainer.image} alt="Trainer Preview" />
                    </div>
                  )}

                  <input
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={(e) =>
                      handleTrainerImageUpload(index, e.target.files[0])
                    }
                  />

                  {uploadingIndex === index && <p>Uploading image...</p>}

                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => removeTrainer(index)}
                  >
                    Remove Trainer
                  </button>
                </div>
              ))}

              <button type="button" className="update-btn" onClick={addTrainer}>
                + Add Trainer
              </button>
            </div>
          )}
        </div>

        <div className="update-btn-wrap">
          <button className="update-btn" onClick={handleSubmit} disabled={saving}>
            {saving ? "Updating..." : "Update Trainer Section"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminTrainers;