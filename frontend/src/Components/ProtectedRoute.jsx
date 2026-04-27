import { ROUTES } from "../constants/routes";

const { user, loading } = useContext(AuthContext);

if (loading) {
  return <div>Loading...</div>; // 🔥 MUST WAIT
}

if (!user) {
  return <Navigate to={ROUTES.LOGIN} replace />;
}

return children;