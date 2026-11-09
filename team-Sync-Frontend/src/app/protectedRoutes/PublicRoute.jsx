
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
const PublicRoute = () => {
  let { isLoading, employee } = useSelector((state) => state.auth);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (employee) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};

export default PublicRoute;
