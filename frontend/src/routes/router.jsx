import { createBrowserRouter } from "react-router";
import NotFount from "../pages/NotFount";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Root from "../Layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFount />,
    children: [
      { path: "/candidate", element: <h1>This is candidate</h1> },
      { path: "/employers", element: <h2>This is employers</h2> },
      { path: "/jobs", element: <h2>This is JOBS</h2> },
      { path: "/blog", element: <h2>This is blogs</h2> },
      { path: "/contact", element: <h2>This is contact</h2> },
      { path: "/price", element: <h2>This is price</h2> },
    ],
  },

  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/dashbord/employer",
    element: <h1>This is dashbord employer</h1>,
  },
]);

export default router;
