import React, { useState } from "react";
import { useEffect } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminPrograms.css";

function AdminPrograms() {
  const [openSection, setOpenSection] = useState("hero");

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
    fetch("http://localhost:3000/api/programs", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setHeroData(data.heroData || {});
        setCategoryData(data.categoryData || []);
        setProgramList(data.programList || []);
        setCtaData(data.ctaData || {});
      });
  }, []);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const handleHeroChange = (e) => {
    const { name, value } = e.target;
    setHeroData({ ...heroData, [name]: value });
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
    setCtaData({ ...ctaData, [name]: value });
  };

  const addProgram = () => {
    const newProgram = {
      id: Date.now(),
      name: "",
      category: "",
      duration: "",
      price: "",
    };
    setProgramList([...programList, newProgram]);
  };

  const removeProgram = (id) => {
    const updated = programList.filter((item) => item.id !== id);
    setProgramList(updated);
  };

  const handleSubmit = () => {
    const allData = {
      heroData,
      categoryData,
      programList,
      ctaData,
    };

    const handleSubmit = async () => {
      const allData = {
        heroData,
        categoryData,
        programList,
        ctaData,
      };

      try {
        await fetch("http://localhost:3000/api/programs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(allData),
        });

        alert("Programs updated successfully!");
      } catch (error) {
        console.log(error);
        alert("Error saving data");
      }
    };
  };

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
                <div className="admin-box" key={item.id}>
                  <label>Category Title</label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) =>
                      handleCategoryChange(index, "title", e.target.value)
                    }
                  />

                  <label>Category Description</label>
                  <textarea
                    rows="3"
                    value={item.description}
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
                <div className="admin-box" key={item.id}>
                  <label>Program Name</label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleProgramChange(index, "name", e.target.value)
                    }
                  />

                  <label>Category</label>
                  <input
                    type="text"
                    value={item.category}
                    onChange={(e) =>
                      handleProgramChange(index, "category", e.target.value)
                    }
                  />

                  <div className="multi-field-row">
                    <div>
                      <label>Duration</label>
                      <input
                        type="text"
                        value={item.duration}
                        onChange={(e) =>
                          handleProgramChange(index, "duration", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <label>Price</label>
                      <input
                        type="text"
                        value={item.price}
                        onChange={(e) =>
                          handleProgramChange(index, "price", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeProgram(item.id)}
                  >
                    Remove Program
                  </button>
                </div>
              ))}

              <button className="add-btn" onClick={addProgram}>
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
          <button className="update-btn" onClick={handleSubmit}>
            Update Programs Page
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminPrograms;
