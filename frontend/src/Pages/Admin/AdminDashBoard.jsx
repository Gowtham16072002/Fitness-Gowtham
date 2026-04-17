import React from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminDashBoard.css";
import {
    FaUsers,
    FaDumbbell,
    FaClipboardList,
    FaCrown,
    FaArrowUp,
    FaUserPlus,
    FaChalkboardTeacher,
    FaQuoteRight,
    FaLayerGroup,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AdminDashBoard() {

    const navigate = useNavigate();
    const stats = [
        {
            id: 1,
            title: "Total Members",
            value: "520+",
            icon: <FaUsers />,
            growth: "+12% this month",
        },
        {
            id: 2,
            title: "Total Trainers",
            value: "12",
            icon: <FaDumbbell />,
            growth: "+3 new trainers",
        },
        {
            id: 3,
            title: "Total Programs",
            value: "18",
            icon: <FaClipboardList />,
            growth: "+5 updated",
        },
        {
            id: 4,
            title: "Premium Plans",
            value: "320",
            icon: <FaCrown />,
            growth: "+18% this week",
        },
    ];

    const recentActivities = [
        {
            id: 1,
            title: "New member registered",
            desc: "A new user joined the premium fitness plan.",
            icon: <FaUserPlus />,
        },
        {
            id: 2,
            title: "Trainer profile updated",
            desc: "Yoga trainer details were edited successfully.",
            icon: <FaChalkboardTeacher />,
        },
        {
            id: 3,
            title: "New testimonial added",
            desc: "A new client review was added to the website.",
            icon: <FaQuoteRight />,
        },
        {
            id: 4,
            title: "Program content updated",
            desc: "Strength training page content was modified.",
            icon: <FaLayerGroup />,
        },
    ];

    return (
        <div className="admin-page">
            <AdminSidebar />

            <main className="admin-content">
                <div className="dashboard-header">
                    <div>
                        <h1>Dashboard Overview</h1>
                        <p>Welcome back, Admin! Here’s what’s happening in Victory Fit.</p>
                    </div>

                    <button className="dashboard-main-btn">+ Add New Content</button>
                </div>

                <div className="dashboard-cards">
                    {stats.map((item) => (
                        <div className="dashboard-card" key={item.id}>
                            <div className="card-top">
                                <div className="card-icon">{item.icon}</div>
                                <div className="growth-badge">
                                    <FaArrowUp /> {item.growth}
                                </div>
                            </div>

                            <h3>{item.title}</h3>
                            <h2>{item.value}</h2>
                        </div>
                    ))}
                </div>

                <div className="dashboard-grid">
                    <div className="dashboard-box activity-box">
                        <div className="box-header">
                            <h2>Recent Activity</h2>
                            <span>View All</span>
                        </div>

                        <div className="activity-list">
                            {recentActivities.map((item) => (
                                <div className="activity-item" key={item.id}>
                                    <div className="activity-icon">{item.icon}</div>
                                    <div className="activity-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="dashboard-box quick-box">
                        <div className="box-header">
                            <h2>Quick Actions</h2>
                        </div>

                        <div className="quick-actions">
                            <button onClick={() => navigate("/admin/trainers")}>
                                Add Trainer
                            </button>

                            <button onClick={() => navigate("/admin/programs")}>
                                Add Program
                            </button>

                            <button onClick={() => navigate("/admin/testimonials")}>
                                Add Testimonial
                            </button>

                            <button onClick={() => navigate("/admin/home")}>
                                Update Home Page
                            </button>
                        </div>

                        <div className="progress-area">
                            <h3>Website Completion</h3>

                            <div className="progress-item">
                                <div className="progress-label">
                                    <span>Home Page</span>
                                    <span>90%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill fill-90"></div>
                                </div>
                            </div>

                            <div className="progress-item">
                                <div className="progress-label">
                                    <span>About Page</span>
                                    <span>80%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill fill-80"></div>
                                </div>
                            </div>

                            <div className="progress-item">
                                <div className="progress-label">
                                    <span>Programs Page</span>
                                    <span>60%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill fill-60"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminDashBoard;