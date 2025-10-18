import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFount from "../pages/NotFount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFount />,
  },
]);

export default router;
