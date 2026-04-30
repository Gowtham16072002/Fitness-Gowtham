import React, { useState, useEffect } from "react";
import logo from "../assets/LogoIcon.png";
import logoName from "../assets/LogoName.png";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { IoSettingsOutline } from "react-icons/io5";
import { ROUTES } from "../constants/routes";
import UserSettings from "../Pages/UserSettings";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setOpenDrop(false);
    await logout();
    navigate(ROUTES.LOGIN);
  };

  const getInitial = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase();
  };

  const formatName = (name) => {
    if (!name) return "";
    return name
      .split("")
      .map((char, index) => (index === 0 ? char.toUpperCase() : char))
      .join("");
  };

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
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li>
          <Link to={ROUTES.SERVICE}>Services</Link>
        </li>
        <li>
          <Link to={ROUTES.PROGRAMS}>Programs</Link>
        </li>
        <li>
          <Link to={ROUTES.CONTACT}>Contact</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN_DASHBOARD}>Admin</Link>
        </li>

        {user ? (
          <li className="mobile-auth-item">
            <Link to={ROUTES.LOGIN} className="auth-link">
              {user.fullName}
            </Link>
          </li>
        ) : (
          <li className="mobile-auth-item">
            <Link to={ROUTES.LOGIN} className="auth-link">
              Login
            </Link>
          </li>
        )}
      </ul>

      <div className="nav-button">
        {!user ? (
          <Link to={ROUTES.LOGIN} className="auth-link">
            Login
          </Link>
        ) : (
          <div>
            {!user?.profile ? (
              <div className="user-logo" onClick={() => setOpenDrop(!openDrop)}>
                <span>{getInitial(user.fullName)}</span>
              </div>
            ) : (
              <div className="user-logo" onClick={() => setOpenDrop(!openDrop)}>
                <img src={user.profile} alt="" />
              </div>
            )}

            {openDrop && (
              <div className="dropdown">
                <p className="userName">{formatName(user.fullName)}</p>

                <p
                  className="dropdown-settings"
                  onClick={() => setDialogOpen(true)}
                >
                  <IoSettingsOutline />
                  Settings
                </p>

                <div className="dropdown-button">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <UserSettings open={dialogOpen} close={() => setDialogOpen(false)} />
    </nav>
  );
}

export default NavBar;
