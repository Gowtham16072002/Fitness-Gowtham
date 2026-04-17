import React, { useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminAboutPage.css";

function AdminAboutPage() {
  const [openSection, setOpenSection] = useState("about");

  const [aboutData, setAboutData] = useState({
    title: "About Us",
    description:
      "Helping people achieve strength, flexibility, and confidence through gym training, yoga, and Zumba programs.",
  });

  const [cardsData, setCardsData] = useState([
    { id: 1, title: "Cardio Zone" },
    { id: 2, title: "Yoga Section" },
    { id: 3, title: "Zumba Section" },
    { id: 4, title: "Modern Gym Equipment" },
  ]);

  const [highlightData, setHighlightData] = useState({
    text: "Train stronger, move better, and live healthier with our fitness programs.",
  });

  const [missionVision, setMissionVision] = useState({
    mission:
      "To empower people through fitness, wellness and dedication.",
    vision:
      "To create a supportive fitness community for everyone.",
  });

  const [trainerData, setTrainerData] = useState([
    { id: 1, name: "Emilia", role: "Strength Trainer" },
    { id: 2, name: "Michael", role: "Yoga Trainer" },
  ]);

  const [testimonialData, setTestimonialData] = useState([
    { id: 1, name: "Rahul", review: "Amazing experience!" },
    { id: 2, name: "Priya", review: "Best trainers!" },
  ]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleSubmit = () => {
    const data = {
      aboutData,
      cardsData,
      highlightData,
      missionVision,
      trainerData,
      testimonialData,
    };

    console.log("About Page Data:", data);
    alert("About page updated!");
  };

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Edit About Page</h1>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("about")}
          >
            <h2>About Section</h2>
            <span>{openSection === "about" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "about" && (
            <div className="section-body">
              <label>Title</label>
              <input
                value={aboutData.title}
                onChange={(e) =>
                  setAboutData({ ...aboutData, title: e.target.value })
                }
              />

              <label>Description</label>
              <textarea
                rows="4"
                value={aboutData.description}
                onChange={(e) =>
                  setAboutData({ ...aboutData, description: e.target.value })
                }
              />
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("cards")}
          >
            <h2>About Cards</h2>
            <span>{openSection === "cards" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "cards" && (
            <div className="section-body">
              {cardsData.map((card, index) => (
                <div key={card.id}>
                  <label>Card {index + 1}</label>
                  <input
                    value={card.title}
                    onChange={(e) => {
                      const updated = [...cardsData];
                      updated[index].title = e.target.value;
                      setCardsData(updated);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("highlight")}
          >
            <h2>Highlight Section</h2>
            <span>{openSection === "highlight" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "highlight" && (
            <div className="section-body">
              <label>Text</label>
              <textarea
                rows="4"
                value={highlightData.text}
                onChange={(e) =>
                  setHighlightData({ text: e.target.value })
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
              <label>Mission</label>
              <textarea
                rows="3"
                value={missionVision.mission}
                onChange={(e) =>
                  setMissionVision({
                    ...missionVision,
                    mission: e.target.value,
                  })
                }
              />

              <label>Vision</label>
              <textarea
                rows="3"
                value={missionVision.vision}
                onChange={(e) =>
                  setMissionVision({
                    ...missionVision,
                    vision: e.target.value,
                  })
                }
              />
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("trainers")}
          >
            <h2>Trainers</h2>
            <span>{openSection === "trainers" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "trainers" && (
            <div className="section-body">
              {trainerData.map((trainer, index) => (
                <div className="trainer-box" key={trainer.id}>
                  <label>Name</label>
                  <input
                    value={trainer.name}
                    onChange={(e) => {
                      const updated = [...trainerData];
                      updated[index].name = e.target.value;
                      setTrainerData(updated);
                    }}
                  />

                  <label>Role</label>
                  <input
                    value={trainer.role}
                    onChange={(e) => {
                      const updated = [...trainerData];
                      updated[index].role = e.target.value;
                      setTrainerData(updated);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("testimonials")}
          >
            <h2>Testimonials</h2>
            <span>{openSection === "testimonials" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "testimonials" && (
            <div className="section-body">
              {testimonialData.map((item, index) => (
                <div className="testimonial-box" key={item.id}>
                  <label>Name</label>
                  <input
                    value={item.name}
                    onChange={(e) => {
                      const updated = [...testimonialData];
                      updated[index].name = e.target.value;
                      setTestimonialData(updated);
                    }}
                  />

                  <label>Review</label>
                  <textarea
                    rows="3"
                    value={item.review}
                    onChange={(e) => {
                      const updated = [...testimonialData];
                      updated[index].review = e.target.value;
                      setTestimonialData(updated);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="update-btn-wrap">
          <button className="update-btn" onClick={handleSubmit}>
            Update About Page
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminAboutPage;