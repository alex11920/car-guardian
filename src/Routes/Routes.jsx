import { createBrowserRouter } from "react-router-dom";
import Root from "../Controller/Root";
import ErrorPage from "../Components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        // element: <Contact />,
      },
    ],
  },
]);

export default router;
