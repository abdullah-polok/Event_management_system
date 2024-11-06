import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Auth/Login/Login";
import Main from "../Layout/Main/Main";
import Register from "../Pages/Auth/Register/Register";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
