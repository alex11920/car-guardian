import { createBrowserRouter } from "react-router-dom";
import Root from "../Controller/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ServiceDetail from "../Pages/ServiceDetail";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/service/:id",
        element: <ServiceDetail />,
        loader: () => fetch("services.json"),
      },
    ],
  },
]);

export default router;
