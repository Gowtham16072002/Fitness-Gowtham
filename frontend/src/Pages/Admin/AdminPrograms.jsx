  import React, { useEffect, useState } from "react";
  import AdminSidebar from "../../Components/AdminSidebar";
  import "../../Styles/AdminPrograms.css";
  import { useAuth } from "../../hooks/useAuth";
  import { authService } from "../../services/authService";
  import { programService } from "../../services/programService";

  function AdminPrograms() {
    const { csrfToken } = useAuth();

    const [openSection, setOpenSection] = useState("hero");
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(true);

    const [heroData, setHeroData] = useState({
      title: "Our Fitness Programs",
      subtitle:
        "Explore gym, yoga, zumba, and sports programs designed for all fitness levels.",
    });

    const [categoryData, setCategoryData] = useState([
      {
        id: 1,
        title: "Gym Training",
        description: "Strength, muscle gain and endurance programs.",
      },
      {
        id: 2,
        title: "Yoga Classes",
        description: "Improve flexibility, balance and mindfulness.",
      },
      {
        id: 3,
        title: "Zumba Sessions",
        description: "Fun dance workouts for energy and weight loss.",
      },
      {
        id: 4,
        title: "Sports Training",
        description: "Build agility, stamina and athletic performance.",
      },
    ]);

    const [programList, setProgramList] = useState([
      {
        id: 1,
        name: "Beginner Gym",
        category: "Gym Training",
        duration: "3 Months",
        price: "1499",
      },
      {
        id: 2,
        name: "Cardio Training",
        category: "Gym Training",
        duration: "2 Months",
        price: "1299",
      },
      {
        id: 3,
        name: "Beginner Yoga",
        category: "Yoga Classes",
        duration: "3 Months",
        price: "1199",
      },
      {
        id: 4,
        name: "Zumba Fitness",
        category: "Zumba Sessions",
        duration: "2 Months",
        price: "1399",
      },
    ]);

    const [ctaData, setCtaData] = useState({
      title: "Start Your Fitness Journey Today",
      description:
        "Choose a program that fits your goals and begin transforming your body and mind.",
      button1: "Join Now",
      button2: "View Pricing",
    });

    useEffect(() => {
      fetchPrograms();
    }, []);

    const fetchPrograms = async () => {
      try {
        const response = await programService.getPrograms();
        const data = response?.data || {};

        if (data.heroData) {
          setHeroData({
            title: data.heroData.title || "",
            subtitle: data.heroData.subtitle || "",
          });
        }

        if (Array.isArray(data.categoryData) && data.categoryData.length > 0) {
          setCategoryData(data.categoryData);
        }

        if (Array.isArray(data.programList) && data.programList.length > 0) {
          setProgramList(data.programList);
        }

        if (data.ctaData) {
          setCtaData({
            title: data.ctaData.title || "",
            description: data.ctaData.description || "",
            button1: data.ctaData.button1 || "",
            button2: data.ctaData.button2 || "",
          });
        }
      } catch (error) {
        alert(error?.response?.data?.message || "Failed to load programs data");
      } finally {
        setLoading(false);
      }
    };

    const toggleSection = (section) => {
      setOpenSection((prev) => (prev === section ? "" : section));
    };

    const handleHeroChange = (e) => {
      const { name, value } = e.target;

      setHeroData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleCategoryChange = (index, field, value) => {
      const updated = [...categoryData];
      updated[index][field] = value;
      setCategoryData(updated);
    };

    const handleProgramChange = (index, field, value) => {
      const updated = [...programList];
      updated[index][field] = value;
      setProgramList(updated);
    };

    const handleCtaChange = (e) => {
      const { name, value } = e.target;

      setCtaData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const addProgram = () => {
      const newProgram = {
        id: Date.now(),
        name: "",
        category: "",
        duration: "",
        price: "",
      };

      setProgramList((prev) => [...prev, newProgram]);
    };

    const removeProgram = (id) => {
      const updated = programList.filter((item) => item.id !== id);
      setProgramList(updated);
    };

    const validateBeforeSubmit = () => {
      if (!heroData.title.trim() || !heroData.subtitle.trim()) {
        alert("Please fill the hero section completely.");
        return false;
      }

      const hasEmptyCategory = categoryData.some(
        (item) => !item.title?.trim() || !item.description?.trim()
      );

      if (hasEmptyCategory) {
        alert("Please fill all category fields.");
        return false;
      }

      const hasEmptyProgram = programList.some(
        (item) =>
          !item.name?.trim() ||
          !item.category?.trim() ||
          !item.duration?.trim() ||
          !item.price?.trim()
      );

      if (hasEmptyProgram) {
        alert("Please fill all program fields before saving.");
        return false;
      }

      const hasInvalidPrice = programList.some((item) =>
        Number.isNaN(Number(item.price))
      );

      if (hasInvalidPrice) {
        alert("Program price must be a valid number.");
        return false;
      }

      if (
        !ctaData.title.trim() ||
        !ctaData.description.trim() ||
        !ctaData.button1.trim() ||
        !ctaData.button2.trim()
      ) {
        alert("Please fill the CTA section completely.");
        return false;
      }

      return true;
    };

    const handleSubmit = async () => {
      if (!validateBeforeSubmit()) {
        return;
      }

      try {
        setSaving(true);

        const csrfRes = await authService.getCsrfToken();
        const freshToken = csrfRes?.data?.csrfToken;

        if (!freshToken) {
          alert("CSRF token not ready. Please try again.");
          return;
        }

        const payload = {
          heroData,
          categoryData,
          programList,
          ctaData,
        };

        const response = await programService.updatePrograms(payload, freshToken);

        if (response?.data?.success === false) {
          alert(response?.data?.message || "Update failed");
          return;
        }

        alert("Programs updated successfully!");
        fetchPrograms();
      } catch (error) {
        alert(error?.response?.data?.message || "Error saving programs data");
      } finally {
        setSaving(false);
      }
    };

    if (loading) {
      return (
        <div className="admin-page">
          <AdminSidebar />
          <main className="admin-content">
            <h1>Edit Programs Page</h1>
            <p>Loading program data...</p>
          </main>
        </div>
      );
    }

    return (
      <div className="admin-page">
        <AdminSidebar />

        <main className="admin-content">
          <h1>Edit Programs Page</h1>

          <div className="admin-section">
            <div className="section-header" onClick={() => toggleSection("hero")}>
              <h2>Programs Hero Section</h2>
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
              onClick={() => toggleSection("categories")}
            >
              <h2>Program Categories</h2>
              <span>{openSection === "categories" ? "⌃" : "⌄"}</span>
            </div>

            {openSection === "categories" && (
              <div className="section-body">
                {categoryData.map((item, index) => (
                  <div className="admin-box" key={item.id || index}>
                    <label>Category Title</label>
                    <input
                      type="text"
                      value={item.title || ""}
                      onChange={(e) =>
                        handleCategoryChange(index, "title", e.target.value)
                      }
                    />

                    <label>Category Description</label>
                    <textarea
                      rows="3"
                      value={item.description || ""}
                      onChange={(e) =>
                        handleCategoryChange(index, "description", e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="admin-section">
            <div
              className="section-header"
              onClick={() => toggleSection("programs")}
            >
              <h2>Programs List</h2>
              <span>{openSection === "programs" ? "⌃" : "⌄"}</span>
            </div>

            {openSection === "programs" && (
              <div className="section-body">
                {programList.map((item, index) => (
                  <div className="admin-box" key={item.id || index}>
                    <label>Program Name</label>
                    <input
                      type="text"
                      value={item.name || ""}
                      onChange={(e) =>
                        handleProgramChange(index, "name", e.target.value)
                      }
                    />

                    <label>Category</label>
                    <input
                      type="text"
                      value={item.category || ""}
                      onChange={(e) =>
                        handleProgramChange(index, "category", e.target.value)
                      }
                    />

                    <div className="multi-field-row">
                      <div>
                        <label>Duration</label>
                        <input
                          type="text"
                          value={item.duration || ""}
                          onChange={(e) =>
                            handleProgramChange(index, "duration", e.target.value)
                          }
                        />
                      </div>

                      <div>
                        <label>Price</label>
                        <input
                          type="text"
                          value={item.price || ""}
                          onChange={(e) =>
                            handleProgramChange(index, "price", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeProgram(item.id)}
                    >
                      Remove Program
                    </button>
                  </div>
                ))}

                <button type="button" className="add-btn" onClick={addProgram}>
                  + Add Program
                </button>
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
            <button
              type="button"
              className="update-btn"
              onClick={handleSubmit}
              disabled={saving || !csrfToken}
            >
              {saving
                ? "Saving..."
                : !csrfToken
                  ? "Preparing security token..."
                  : "Update Programs Page"}
            </button>
          </div>
        </main>
      </div>
    );
  }

  export default AdminPrograms;