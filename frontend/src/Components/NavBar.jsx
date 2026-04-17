import React, { useState, useEffect } from "react";
import logo from "../assets/LogoIcon.png";
import logoName from "../assets/LogoName.png";
import "../Styles/Navbar.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { IoSettingsOutline } from "react-icons/io5";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  
  const [openDrop, setOpenDrop] = useState(false);
  const navigate  = useNavigate();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <nav className="navbar">
      <div className="imageblock">
        <div className="logo">
          <img src={logo} alt="VictoryFit Logo" />
        </div>

        <div className="logoName">
          <img src={logoName} alt="VictoryFit Logo" />
        </div>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/programs">Programs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Admin</Link>
        </li>
        {user && (
          <li className="mobile-auth-item">
            <Link to="/login" className="auth-link">
              {user && user.fullName}
            </Link>
          </li>
        )}
        {!user && (
          <li className="mobile-auth-item">
            <Link to="/login" className="auth-link">
              loging
            </Link>
          </li>
        )}
      </ul>

      <div className="nav-button">
        {!user ? (
          <Link to="/login" className="auth-link">
            Login
          </Link>
        ) : (
          // <Link to="/" className="auth-link" onClick={logout}>
          //   Logout
          // </Link>
          <div>
            <div className="user-logo" onClick={() => setOpenDrop(!openDrop)}>
              <span>{user.fullName.split("")[0].toUpperCase()}</span>
            </div>
            {openDrop && (
              <div className="dropdown">
                <p className="userName">
                  {user.fullName
                    .split("")
                    .map((w, i) => (i == 0 ? w.toUpperCase() : w))}
                </p>
                <p className="dropdown-settings">
                  <IoSettingsOutline />
                  Settings
                </p>
                <div className="dropdown-button">
                  <button
                    onClick={() => {
                      setOpenDrop(false);
                      logout();
                      navigate("/login")
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
