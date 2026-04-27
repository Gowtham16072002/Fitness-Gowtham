import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/AdminSidebar.css";
import { ROUTES } from "../constants/routes";

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-logo">
        <h2>VICTORY FIT</h2>
        <p>Dream it. Do it.</p>
      </div>

      <ul className="sidebar-menu">
        <li>
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
          >
            Go to Website
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.ADMIN_DASHBOARD}
            className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.ADMIN_HOME}
            className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
          >
            Home Page
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.ADMIN_ABOUT}
            className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
          >
            About Page
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.ADMIN_PROGRAMS}
            className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
          >
            Programs
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.ADMIN_TRAINERS}
            className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
          >
            Trainers
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.ADMIN_TESTIMONIALS}
            className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
          >
            Testimonials
          </NavLink>
        </li>

        <li>
          <NavLink
            to={ROUTES.ADMIN_SETTINGS}
            className={({ isActive }) => (isActive ? "sidebar-link active" : "sidebar-link")}
          >
            Settings
          </NavLink>
        </li>
      </ul>

      <div className="admin-user-box">
        <div className="admin-user-image">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Admin"
          />
        </div>

        <div className="admin-user-info">
          <h4>Hello, Admin</h4>
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;