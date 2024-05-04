import { createBrowserRouter } from "react-router-dom";
import Root from "../Controller/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ServiceDetail from "../Pages/ServiceDetail";
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
        path: "/service/:id",
        element: <ServiceDetail />,
        loader: () => fetch("services.json"),
      },
    ],
  },
]);

export default router;
