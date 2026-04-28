// import { useContext } from "react";
import { ROUTES } from "../constants/routes";
// import { AuthContext } from "../Context/AuthContext";
import { useAuth } from "../hooks/useAuth";


// const { user, loading } = useContext(AuthContext);
const { user,loading } = useAuth();

if (loading) {
  return <div>Loading...</div>; // 🔥 MUST WAIT
}

if (!user) {
  return <Navigate to={ROUTES.LOGIN} replace />;
}

return children;