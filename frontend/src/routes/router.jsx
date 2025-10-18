import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFount from "../pages/NotFount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFount />,
    children: [
      { path: "/", index: true },
      { path: "/candidate", element: <h1>This is candidate</h1> },
      { path: "/employers", element: <h2>This is employers</h2> },
      { path: "/jobs", element: <h2>This is JOBS</h2> },
      { path: "/blog", element: <h2>This is blogs</h2> },
      { path: "/contact", element: <h2>This is contact</h2> },
      { path: "/price", element: <h2>This is price</h2> },
    ],
  },
  {
    path: "/dashbord/candidate",
    element: <h1>This is dashbord layout candidate</h1>,
  },
  {
    path: "/dashbord/employer",
    element: <h1>This is dashbord employer</h1>,
  },
]);

export default router;
