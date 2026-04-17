import axios from "axios";
import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      // let res = await fetch("http://localhost:3000/auth/profile", {
      //   credentials: "include",
      // });
      // let userData = await res.json();
      try {
        const response = await axios.get('http://localhost:3000/auth/profile', { withCredentials: true })
        response && response.data.success == false && (response.data.message == "Not authorized, token missing" || response.data.message == "Not authorized, invalid token" || response.data.message == "User not found") && setUser(null)
        response && response.data.success == true && setUser(response.data.user);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  // login function
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  // logout function
  const logout = async () => {
    try {
      await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error(err);
    }
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
