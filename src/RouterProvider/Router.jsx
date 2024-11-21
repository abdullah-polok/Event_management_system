import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Auth/Login/Login";
import Main from "../Layout/Main/Main";
import Register from "../Pages/Auth/Register/Register";
import Home from "../Pages/Home/Home";
import EventCreation from "../Pages/EventCreation/EventCreation";
import EventRegistration from "../Pages/EventRegistration/EventRegistration";
import Feedback from "../Pages/Feedback/Feedback";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/eventcreation",
        element: (
          <PrivateRouter>
            <EventCreation></EventCreation>
          </PrivateRouter>
        ),
      },
      {
        path: "/eventregistration",
        element: (
          <PrivateRouter>
            <EventRegistration></EventRegistration>
          </PrivateRouter>
        ),
      },
      {
        path: "/feedback",
        element: (
          <PrivateRouter>
            <Feedback></Feedback>
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouter>
            <Dashboard></Dashboard>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
