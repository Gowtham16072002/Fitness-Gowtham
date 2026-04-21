const { user, loading } = useContext(AuthContext);

if (loading) {
  return <div>Loading...</div>; // 🔥 MUST WAIT
}

if (!user) {
  return <Navigate to="/login" replace />;
}

return children;