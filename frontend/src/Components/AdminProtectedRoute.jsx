// import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
import { ROUTES } from "../constants/routes";
import { useAuth } from "../hooks/useAuth";

function AdminProtectedRoute() {
  // const { user, loading } = useContext(AuthContext);
  const { user,loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
}

export default AdminProtectedRoute;