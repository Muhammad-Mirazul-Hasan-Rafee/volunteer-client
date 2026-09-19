import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // While Firebase is still checking auth state, show a spinner.
  // If we redirect now, we'd kick out users who ARE logged in.
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  // Logged in → render the protected page
  if (user) {
    return children;
  }

  // Not logged in → send to login, remember where they came from
  return <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

export default PrivateRoute;