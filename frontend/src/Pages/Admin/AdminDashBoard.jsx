import React, { useEffect, useState } from "react";
import AdminSidebar from "../../Components/AdminSidebar";
import "../../Styles/AdminDashBoard.css";
import axios from "axios";
import {
    FaUsers,
    FaDumbbell,
    FaClipboardList,
    FaQuoteRight,
    FaArrowUp,
    FaUserPlus,
    FaChalkboardTeacher,
    FaLayerGroup,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { API_BASE_URL } from "../../config";

function AdminDashBoard() {
    const navigate = useNavigate();

    const [dashboardData, setDashboardData] = useState({
        totalMembers: 0,
        totalTrainers: 0,
        totalPrograms: 0,
        totalTestimonials: 0,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);

            const res = await axios.get(`${API_BASE_URL}/api/admin/dashboard`, {
                withCredentials: true,
            });

            if (res.data.success) {
                setDashboardData(res.data.data);
            }
        } catch (error) {
            console.error("Dashboard fetch error:", error);
            alert(error.response?.data?.message || "Failed to load dashboard data");
        } finally {
            setLoading(false);
        }
    };

    const stats = [
        {
            id: 1,
            title: "Total Members",
            value: dashboardData.totalMembers,
            icon: <FaUsers />,
            growth: "Registered users",
        },
        {
            id: 2,
            title: "Total Trainers",
            value: dashboardData.totalTrainers,
            icon: <FaDumbbell />,
            growth: "Trainer profiles",
        },
        {
            id: 3,
            title: "Total Programs",
            value: dashboardData.totalPrograms,
            icon: <FaClipboardList />,
            growth: "Program content",
        },
        {
            id: 4,
            title: "Total Testimonials",
            value: dashboardData.totalTestimonials,
            icon: <FaQuoteRight />,
            growth: "Client reviews",
        },
    ];

    const recentActivities = [
        {
            id: 1,
            title: "Member data connected",
            desc: "Dashboard is now reading registered users from database.",
            icon: <FaUserPlus />,
        },
        {
            id: 2,
            title: "Trainer CMS connected",
            desc: "Trainer count is fetched from TrainerContent collection.",
            icon: <FaChalkboardTeacher />,
        },
        {
            id: 3,
            title: "Testimonial CMS connected",
            desc: "Testimonial count is fetched from TestimonialContent collection.",
            icon: <FaQuoteRight />,
        },
        {
            id: 4,
            title: "Program CMS pending",
            desc: "Program count will show after creating real Program model.",
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

                    <button
                        className="dashboard-main-btn"
                        onClick={() => navigate(ROUTES.ADMIN_HOME)}
                    >
                        + Add New Content
                    </button>
                </div>

                {loading ? (
                    <div className="dashboard-loading">Loading dashboard...</div>
                ) : (
                    <>
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
                                    <button onClick={() => navigate(ROUTES.ADMIN_TRAINERS)}>
                                        Add Trainer
                                    </button>

                                    <button onClick={() => navigate(ROUTES.ADMIN_PROGRAMS)}>
                                        Add Program
                                    </button>

                                    <button onClick={() => navigate(ROUTES.ADMIN_TESTIMONIALS)}>
                                        Add Testimonial
                                    </button>

                                    <button onClick={() => navigate(ROUTES.ADMIN_HOME)}>
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
                    </>
                )}
            </main>
        </div>
    );
}

export default AdminDashBoard;