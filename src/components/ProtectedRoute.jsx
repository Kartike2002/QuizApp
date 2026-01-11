import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("registeredUser");

  // If user is not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, allow access
  return children;
}
