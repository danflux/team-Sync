import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { isLoading, employee } = useSelector((state) => state.auth);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!employee) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
