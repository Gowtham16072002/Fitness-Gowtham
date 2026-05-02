import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminHomePage.css"; 
import { useAuth } from "../../hooks/useAuth";
import { programService } from "../../services/programService";
import { authService } from "../../services/authService";

function AdminPrograms() {
  const { csrfToken } = useAuth();

  const [openSection, setOpenSection] = useState("programs");
  const [saving, setSaving] = useState(false);

  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const res = await programService.getPrograms();
      if (res?.data?.success) {
        setPrograms(res.data.data.programs || []);
      }
    } catch (err) {
      alert("Failed to fetch programs");
    }
  };

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  const handleProgramChange = (index, field, value) => {
    const updated = [...programs];
    updated[index][field] = value;
    setPrograms(updated);
  };

  const handleFeatureChange = (pIndex, fIndex, value) => {
    const updated = [...programs];
    updated[pIndex].features[fIndex] = value;
    setPrograms(updated);
  };

  const addProgram = () => {
    setPrograms([
      ...programs,
      {
        title: "",
        image: "",
        route: "",
        features: ["", "", ""],
      },
    ]);
  };

  const deleteProgram = (index) => {
    const updated = programs.filter((_, i) => i !== index);
    setPrograms(updated);
  };

  const handleSubmit = async () => {
    try {
      setSaving(true);

      const csrfRes = await authService.getCsrfToken();
      const freshToken = csrfRes?.data?.csrfToken;

      await programService.updatePrograms(
        { programs },
        freshToken
      );

      alert("Programs updated successfully");
      fetchPrograms();
    } catch (err) {
      alert("Error saving programs");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-page">
      <AdminSidebar />

      <main className="admin-content">
        <h1>Edit Programs</h1>

        {/* ===== PROGRAM SECTION ===== */}
        <div className="admin-section">
          <div
            className="section-header"
            onClick={() => toggleSection("programs")}
          >
            <h2>Programs Section</h2>
            <span>{openSection === "programs" ? "⌃" : "⌄"}</span>
          </div>

          {openSection === "programs" && (
            <div className="section-body">
              {programs.map((program, index) => (
                <div className="trainer-box" key={index}>
                  <div className="card-top-bar">
                    <h3>Program {index + 1}</h3>

                    <button
                      className="delete-card-btn"
                      onClick={() => deleteProgram(index)}
                    >
                      Delete
                    </button>
                  </div>

                  <label>Title</label>
                  <input
                    type="text"
                    value={program.title}
                    onChange={(e) =>
                      handleProgramChange(index, "title", e.target.value)
                    }
                  />

                  <label>Image URL</label>
                  <input
                    type="text"
                    value={program.image}
                    onChange={(e) =>
                      handleProgramChange(index, "image", e.target.value)
                    }
                  />

                  <label>Route (Example: BEGINNER_GYM)</label>
                  <input
                    type="text"
                    value={program.route}
                    onChange={(e) =>
                      handleProgramChange(index, "route", e.target.value)
                    }
                  />

                  {/* FEATURES */}
                  {program.features.map((feature, fIndex) => (
                    <div key={fIndex}>
                      <label>Feature {fIndex + 1}</label>
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) =>
                          handleFeatureChange(
                            index,
                            fIndex,
                            e.target.value
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              ))}

              <div className="add-card-wrap">
                <button className="add-card-btn" onClick={addProgram}>
                  + Add Program
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ===== UPDATE BUTTON ===== */}
        <div className="update-btn-wrap">
          <button
            className="update-btn"
            onClick={handleSubmit}
            disabled={saving || !csrfToken}
          >
            {saving ? "Saving..." : "Update Programs"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default AdminPrograms;