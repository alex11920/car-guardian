import { createBrowserRouter } from "react-router-dom";
import Root from "../Controller/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
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
    ],
  },
]);

export default router;
