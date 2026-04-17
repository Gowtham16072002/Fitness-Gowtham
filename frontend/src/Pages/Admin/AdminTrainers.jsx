import React, { useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminTrainers.css";

function AdminTrainers() {
  const [openSection, setOpenSection] = useState("hero");

  const [heroData, setHeroData] = useState({
    title: "Our Expert Trainers",
    subtitle:
      "Meet our certified fitness professionals who guide, motivate, and support every member on their journey.",
  });

  const [trainerList, setTrainerList] = useState([
    {
      id: 1,
      name: "Emilia Clarke",
      role: "Strength Trainer",
      experience: "8 Years",
      specialty: "Muscle Gain & Strength",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    },
    {
      id: 2,
      name: "Michael Lee",
      role: "Yoga Trainer",
      experience: "6 Years",
      specialty: "Flexibility & Balance",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500",
    },
    {
      id: 3,
      name: "Sophia Martin",
      role: "Zumba Trainer",
      experience: "5 Years",
      specialty: "Dance Fitness & Weight Loss",
      image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=500",
    },
  ]);

  const [highlightData, setHighlightData] = useState({
    title: "Why Our Trainers Stand Out",
    description:
      "Our trainers combine knowledge, experience, and motivation to create safe and result-driven workouts for every fitness level.",
  });

  const [ctaData, setCtaData] = useState({
    title: "Train With The Best Coaches",
    description:
      "Choose expert guidance, personalized support, and the right training environment to reach your goals faster.",
    button1: "Join Now",
    button2: "Contact Us",
  });

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setHeroData({ ...heroData, [name]: value });
  };

  const handleHighlightChange = (e) => {
    const { name, value } = e.target;
    setHighlightData({ ...highlightData, [name]: value });
  };

  const handleCtaChange = (e) => {
    const { name, value } = e.target;
    setCtaData({ ...ctaData, [name]: value });
  };

  const handleTrainerChange = (index, field, value) => {
    const updated = [...trainerList];
    updated[index][field] = value;
    setTrainerList(updated);
  };

  const handleTrainerImageChange = (index, file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updated = [...trainerList];
      updated[index].image = imageUrl;
      setTrainerList(updated);
    }
  };

  const addTrainer = () => {
    const newTrainer = {
      id: Date.now(),
      name: "",
      role: "",
      experience: "",
      specialty: "",
      image: "",
    };
    setTrainerList([...trainerList, newTrainer]);
  };

  const removeTrainer = (id) => {
    const updated = trainerList.filter((trainer) => trainer.id !== id);
    setTrainerList(updated);
  };

  const handleSubmit = () => {
    const allData = {
      heroData,
      trainerList,
      highlightData,
      ctaData,
    };

    console.log("Trainers Page Data:", allData);
    alert("Trainers page updated successfully!");
  };

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Edit Trainers Page</h1>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("hero")}>
            <h2>Trainers Hero Section</h2>
            <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "hero" && (
            <div className="section-body">
              <label>Page Title</label>
              <input
                type="text"
                name="title"
                value={heroData.title}
                onChange={handleHeroChange}
              />

              <label>Page Subtitle</label>
              <textarea
                name="subtitle"
                rows="4"
                value={heroData.subtitle}
                onChange={handleHeroChange}
              />
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("trainers")}>
            <h2>Trainer List</h2>
            <span>{openSection === "trainers" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "trainers" && (
            <div className="section-body">
              {trainerList.map((trainer, index) => (
                <div className="admin-box trainer-box" key={trainer.id}>
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

                  <div className="multi-field-row">
                    <div>
                      <label>Experience</label>
                      <input
                        type="text"
                        value={trainer.experience}
                        onChange={(e) =>
                          handleTrainerChange(index, "experience", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label>Specialty</label>
                      <input
                        type="text"
                        value={trainer.specialty}
                        onChange={(e) =>
                          handleTrainerChange(index, "specialty", e.target.value)
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
                    accept="image/*"
                    onChange={(e) =>
                      handleTrainerImageChange(index, e.target.files[0])
                    }
                  />

                  <button
                    className="remove-btn"
                    onClick={() => removeTrainer(trainer.id)}
                  >
                    Remove Trainer
                  </button>
                </div>
              ))}

              <button className="add-btn" onClick={addTrainer}>
                + Add Trainer
              </button>
            </div>
          )}
        </div>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("highlight")}>
            <h2>Highlight Section</h2>
            <span>{openSection === "highlight" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "highlight" && (
            <div className="section-body">
              <label>Highlight Title</label>
              <input
                type="text"
                name="title"
                value={highlightData.title}
                onChange={handleHighlightChange}
              />

              <label>Highlight Description</label>
              <textarea
                rows="4"
                name="description"
                value={highlightData.description}
                onChange={handleHighlightChange}
              />
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
              <label>CTA Title</label>
              <input
                type="text"
                name="title"
                value={ctaData.title}
                onChange={handleCtaChange}
              />

              <label>CTA Description</label>
              <textarea
                rows="4"
                name="description"
                value={ctaData.description}
                onChange={handleCtaChange}
              />

              <label>Button 1 Text</label>
              <input
                type="text"
                name="button1"
                value={ctaData.button1}
                onChange={handleCtaChange}
              />

              <label>Button 2 Text</label>
              <input
                type="text"
                name="button2"
                value={ctaData.button2}
                onChange={handleCtaChange}
              />
            </div>
          )}
        </div>

        <div className="update-btn-wrap">
          <button className="update-btn" onClick={handleSubmit}>
            Update Trainers Page
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminTrainers;

