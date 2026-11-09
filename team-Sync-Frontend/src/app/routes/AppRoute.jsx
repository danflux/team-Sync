import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Home from "../../features/dashboard/ui/pages/Home";
import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import { currentLoggedEmployee } from "../../features/auth/state/auth/authActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AppRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentLoggedEmployee());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashBoardLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
