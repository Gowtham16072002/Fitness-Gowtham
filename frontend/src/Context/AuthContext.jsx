import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [csrfToken, setCsrfToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const csrfRes = await axios.get(`${API_BASE_URL}/auth/csrf-token`, {
          withCredentials: true,
        });

        if (csrfRes?.data?.success) {
          setCsrfToken(csrfRes.data.csrfToken);
        } else {
          setCsrfToken("");
        }

        const profileRes = await axios.get(`${API_BASE_URL}/auth/profile`, {
          withCredentials: true,
        });

        if (profileRes?.data?.success) {
          setUser(profileRes.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
        setCsrfToken("");
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (userData) => {
    setUser(userData);

    try {
      const csrfRes = await axios.get(`${API_BASE_URL}/auth/csrf-token`, {
        withCredentials: true,
      });

      if (csrfRes?.data?.success) {
        setCsrfToken(csrfRes.data.csrfToken);
      } else {
        setCsrfToken("");
      }
    } catch (error) {
      setCsrfToken("");
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${API_BASE_URL}/auth/logout`,
        {},
        {
          withCredentials: true,
          headers: {
            "x-csrf-token": csrfToken,
          },
        }
      );
    } catch (error) {
      // console.log("Logout error:", error);
    } finally {
      setUser(null);
      setCsrfToken("");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        csrfToken,
        setCsrfToken,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};