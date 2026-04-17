import React, { useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminTestimonials.css";

function AdminTestimonials() {
  const [openSection, setOpenSection] = useState("hero");

  const [heroData, setHeroData] = useState({
    title: "What Our Clients Say",
    subtitle:
      "Real stories from our members who transformed their fitness journey with Victory Fit.",
  });

  const [testimonialList, setTestimonialList] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Fitness Member",
      review:
        "The trainers are very supportive and the workouts are effective. I feel stronger and more confident now.",
      rating: "5",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Yoga Member",
      review:
        "Yoga classes helped me improve flexibility and reduce stress. The environment is peaceful and motivating.",
      rating: "5",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    },
    {
      id: 3,
      name: "Arjun Mehta",
      role: "Zumba Member",
      review:
        "Zumba sessions are energetic and fun. I lost weight and gained confidence while enjoying every class.",
      rating: "4",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    },
  ]);

  const [highlightData, setHighlightData] = useState({
    title: "Why Testimonials Matter",
    description:
      "Client reviews build trust and show the real impact of our training programs, expert coaching, and supportive fitness community.",
  });

  const [ctaData, setCtaData] = useState({
    title: "Become Our Next Success Story",
    description:
      "Join Victory Fit today and start your transformation with expert guidance, personalized support, and inspiring fitness programs.",
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

  const handleTestimonialChange = (index, field, value) => {
    const updated = [...testimonialList];
    updated[index][field] = value;
    setTestimonialList(updated);
  };

  const handleImageChange = (index, file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updated = [...testimonialList];
      updated[index].image = imageUrl;
      setTestimonialList(updated);
    }
  };

  const addTestimonial = () => {
    const newTestimonial = {
      id: Date.now(),
      name: "",
      role: "",
      review: "",
      rating: "",
      image: "",
    };
    setTestimonialList([...testimonialList, newTestimonial]);
  };

  const removeTestimonial = (id) => {
    const updated = testimonialList.filter((item) => item.id !== id);
    setTestimonialList(updated);
  };

  const handleSubmit = () => {
    const allData = {
      heroData,
      testimonialList,
      highlightData,
      ctaData,
    };

    console.log("Testimonials Page Data:", allData);
    alert("Testimonials page updated successfully!");
  };

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Edit Testimonials Page</h1>

        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("hero")}>
            <h2>Testimonials Hero Section</h2>
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
          <div
            className="section-header"
            onClick={() => toggleSection("testimonials")}
          >
            <h2>Testimonials List</h2>
            <span>{openSection === "testimonials" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "testimonials" && (
            <div className="section-body">
              {testimonialList.map((item, index) => (
                <div className="admin-box testimonial-box" key={item.id}>
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
                      <input
                        type="text"
                        placeholder="Example: 5"
                        value={item.rating}
                        onChange={(e) =>
                          handleTestimonialChange(index, "rating", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label>Client Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(index, e.target.files[0])}
                      />
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
                    className="remove-btn"
                    onClick={() => removeTestimonial(item.id)}
                  >
                    Remove Testimonial
                  </button>
                </div>
              ))}

              <button className="add-btn" onClick={addTestimonial}>
                + Add Testimonial
              </button>
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
            Update Testimonials Page
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminTestimonials;