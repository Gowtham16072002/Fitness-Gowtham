import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminHomePage.css";
import "../../Styles/AdminServices.css";
import { useAuth } from "../../hooks/useAuth";
import { authService } from "../../services/authService";
import { serviceService } from "../../services/serviceService";

function AdminServices() {
  const { csrfToken } = useAuth();

  const [openSection, setOpenSection] = useState("hero");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    hero: {
      title: "",
      description: "",
      leftTexts: [{ text: "" }, { text: "" }],
      rightTexts: [{ text: "" }, { text: "" }],
      buttonText: "",
    },
    serviceCards: [],
    faqs: [],
  });

  useEffect(() => {
    fetchServiceContent();
  }, []);

  const fetchServiceContent = async () => {
    try {
      setLoading(true);
      const response = await serviceService.getServiceContent();

      if (response?.data?.success) {
        setFormData(response.data.data);
      }
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to fetch service content");
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  const updateHeroField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value,
      },
    }));
  };

  const updateHeroArray = (arrayName, index, value) => {
    const updated = [...formData.hero[arrayName]];
    updated[index].text = value;

    setFormData((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [arrayName]: updated,
      },
    }));
  };

  const updateServiceCard = (index, field, value) => {
    const updated = [...formData.serviceCards];
    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      serviceCards: updated,
    }));
  };

  const addServiceCard = () => {
    setFormData((prev) => ({
      ...prev,
      serviceCards: [
        ...prev.serviceCards,
        {
          icon: "fa-solid fa-dumbbell",
          title: "",
          description: "",
          includes: [{ text: "" }],
          layout: "small",
        },
      ],
    }));
  };

  const deleteServiceCard = (index) => {
    if (formData.serviceCards.length === 1) return;

    setFormData((prev) => ({
      ...prev,
      serviceCards: prev.serviceCards.filter((_, i) => i !== index),
    }));
  };

  const updateInclude = (cardIndex, includeIndex, value) => {
    const updated = [...formData.serviceCards];
    updated[cardIndex].includes[includeIndex].text = value;

    setFormData((prev) => ({
      ...prev,
      serviceCards: updated,
    }));
  };

  const addInclude = (cardIndex) => {
    const updated = [...formData.serviceCards];
    updated[cardIndex].includes.push({ text: "" });

    setFormData((prev) => ({
      ...prev,
      serviceCards: updated,
    }));
  };

  const deleteInclude = (cardIndex, includeIndex) => {
    const updated = [...formData.serviceCards];

    if (updated[cardIndex].includes.length === 1) return;

    updated[cardIndex].includes = updated[cardIndex].includes.filter(
      (_, i) => i !== includeIndex
    );

    setFormData((prev) => ({
      ...prev,
      serviceCards: updated,
    }));
  };

  const updateFaq = (index, field, value) => {
    const updated = [...formData.faqs];
    updated[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      faqs: updated,
    }));
  };

  const addFaq = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  };

  const deleteFaq = (index) => {
    if (formData.faqs.length === 1) return;

    setFormData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  const validateBeforeSubmit = () => {
    if (
      !formData.hero.title.trim() ||
      !formData.hero.description.trim() ||
      !formData.hero.buttonText.trim()
    ) {
      alert("Please fill the hero section completely.");
      return false;
    }

    const hasEmptyHeroText = [
      ...formData.hero.leftTexts,
      ...formData.hero.rightTexts,
    ].some((item) => !item.text?.trim());

    if (hasEmptyHeroText) {
      alert("Please fill all hero side texts.");
      return false;
    }

    const hasEmptyServiceCard = formData.serviceCards.some(
      (card) =>
        !card.icon?.trim() ||
        !card.title?.trim() ||
        !card.description?.trim() ||
        !card.layout?.trim()
    );

    if (hasEmptyServiceCard) {
      alert("Please fill all service card fields.");
      return false;
    }

    const hasEmptyIncludes = formData.serviceCards.some((card) =>
      card.includes.some((item) => !item.text?.trim())
    );

    if (hasEmptyIncludes) {
      alert("Please fill all include points.");
      return false;
    }

    const hasEmptyFaq = formData.faqs.some(
      (faq) => !faq.question?.trim() || !faq.answer?.trim()
    );

    if (hasEmptyFaq) {
      alert("Please fill all FAQ fields.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateBeforeSubmit()) return;

    try {
      setSaving(true);

      const csrfRes = await authService.getCsrfToken();
      const freshToken = csrfRes?.data?.csrfToken;

      if (!freshToken) {
        alert("CSRF token not ready. Please try again.");
        return;
      }

      const response = await serviceService.updateServiceContent(
        {
          hero: formData.hero,
          serviceCards: formData.serviceCards,
          faqs: formData.faqs,
        },
        freshToken
      );

      if (response?.data?.success) {
        alert("Service content updated successfully!");
        fetchServiceContent();
      } else {
        alert(response?.data?.message || "Update failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message || "Error updating service content");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-page">
        <AdminSidebar />
        <main className="admin-content">
          <h1>Loading Services CMS...</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Edit Services Page Content</h1>

        {/* HERO */}
        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("hero")}>
            <h2>Hero Section</h2>
            <span>{openSection === "hero" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "hero" && (
            <div className="section-body">
              <label>Title</label>
              <input
                type="text"
                value={formData.hero.title}
                onChange={(e) => updateHeroField("title", e.target.value)}
              />

              <label>Description</label>
              <textarea
                rows="4"
                value={formData.hero.description}
                onChange={(e) =>
                  updateHeroField("description", e.target.value)
                }
              />

              <label>Button Text</label>
              <input
                type="text"
                value={formData.hero.buttonText}
                onChange={(e) => updateHeroField("buttonText", e.target.value)}
              />

              <div className="multi-field-row">
                <div>
                  <label>Left Text 1</label>
                  <input
                    type="text"
                    value={formData.hero.leftTexts[0]?.text || ""}
                    onChange={(e) =>
                      updateHeroArray("leftTexts", 0, e.target.value)
                    }
                  />
                </div>

                <div>
                  <label>Left Text 2</label>
                  <input
                    type="text"
                    value={formData.hero.leftTexts[1]?.text || ""}
                    onChange={(e) =>
                      updateHeroArray("leftTexts", 1, e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="multi-field-row">
                <div>
                  <label>Right Text 1</label>
                  <input
                    type="text"
                    value={formData.hero.rightTexts[0]?.text || ""}
                    onChange={(e) =>
                      updateHeroArray("rightTexts", 0, e.target.value)
                    }
                  />
                </div>

                <div>
                  <label>Right Text 2</label>
                  <input
                    type="text"
                    value={formData.hero.rightTexts[1]?.text || ""}
                    onChange={(e) =>
                      updateHeroArray("rightTexts", 1, e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SERVICE CARDS */}
        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("services")}
          >
            <h2>Service Cards</h2>
            <span>{openSection === "services" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "services" && (
            <div className="section-body">
              {formData.serviceCards.map((card, cardIndex) => (
                <div className="trainer-box" key={cardIndex}>
                  <div className="card-top-bar">
                    <h3>Service Card {cardIndex + 1}</h3>

                    <button
                      type="button"
                      className="delete-card-btn"
                      onClick={() => deleteServiceCard(cardIndex)}
                      disabled={formData.serviceCards.length === 1}
                    >
                      Delete
                    </button>
                  </div>

                  <label>Icon Class</label>
                  <input
                    type="text"
                    value={card.icon}
                    onChange={(e) =>
                      updateServiceCard(cardIndex, "icon", e.target.value)
                    }
                    placeholder="fa-solid fa-dumbbell"
                  />

                  <label>Layout</label>
                  <select
                    className="admin-select"
                    value={card.layout}
                    onChange={(e) =>
                      updateServiceCard(cardIndex, "layout", e.target.value)
                    }
                  >
                    <option value="large">Large Left Card</option>
                    <option value="small">Small Right Card</option>
                  </select>

                  <label>Title</label>
                  <input
                    type="text"
                    value={card.title}
                    onChange={(e) =>
                      updateServiceCard(cardIndex, "title", e.target.value)
                    }
                  />

                  <label>Description</label>
                  <textarea
                    rows="5"
                    value={card.description}
                    onChange={(e) =>
                      updateServiceCard(
                        cardIndex,
                        "description",
                        e.target.value
                      )
                    }
                  />

                  <label>Includes</label>

                  {card.includes.map((item, includeIndex) => (
                    <div className="include-field-row" key={includeIndex}>
                      <input
                        type="text"
                        value={item.text}
                        onChange={(e) =>
                          updateInclude(
                            cardIndex,
                            includeIndex,
                            e.target.value
                          )
                        }
                      />

                      <button
                        type="button"
                        className="mini-delete-btn"
                        onClick={() => deleteInclude(cardIndex, includeIndex)}
                        disabled={card.includes.length === 1}
                      >
                        X
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    className="add-card-btn service-small-add"
                    onClick={() => addInclude(cardIndex)}
                  >
                    + Add Include
                  </button>
                </div>
              ))}

              <div className="add-card-wrap">
                <button
                  type="button"
                  className="add-card-btn"
                  onClick={addServiceCard}
                >
                  + Add New Service Card
                </button>
              </div>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="admin-section">
          <div className="section-header" onClick={() => toggleSection("faq")}>
            <h2>FAQ Section</h2>
            <span>{openSection === "faq" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "faq" && (
            <div className="section-body">
              {formData.faqs.map((faq, index) => (
                <div className="trainer-box" key={index}>
                  <div className="card-top-bar">
                    <h3>FAQ {index + 1}</h3>

                    <button
                      type="button"
                      className="delete-card-btn"
                      onClick={() => deleteFaq(index)}
                      disabled={formData.faqs.length === 1}
                    >
                      Delete
                    </button>
                  </div>

                  <label>Question</label>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) =>
                      updateFaq(index, "question", e.target.value)
                    }
                  />

                  <label>Answer</label>
                  <textarea
                    rows="4"
                    value={faq.answer}
                    onChange={(e) => updateFaq(index, "answer", e.target.value)}
                  />
                </div>
              ))}

              <div className="add-card-wrap">
                <button type="button" className="add-card-btn" onClick={addFaq}>
                  + Add New FAQ
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="update-btn-wrap">
          <button
            className="update-btn"
            onClick={handleSubmit}
            disabled={saving || !csrfToken}
          >
            {saving
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

export default AdminServices;