// import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { API_BASE_URL } from "../config";
import { authService } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [csrfToken, setCsrfToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const csrfRes = await authService.getCsrfToken();

        if (csrfRes?.data?.success) {
          setCsrfToken(csrfRes.data.csrfToken);
        } else {
          setCsrfToken("");
        }

        const profileRes = await authService.getProfile();

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
      // const csrfRes = await axios.get(`${API_BASE_URL}/auth/csrf-token`, {
      //   withCredentials: true,
      // });
      const csrfRes = await authService.login();

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
      // await axios.post(
      //   `${API_BASE_URL}/auth/logout`,
      //   {},
      //   {
      //     withCredentials: true,
      //     headers: {
      //       "x-csrf-token": csrfToken,
      //     },
      //   }
      // );
      await authService.logout(csrfToken);
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