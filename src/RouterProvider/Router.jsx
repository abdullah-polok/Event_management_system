import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Auth/Login/Login";
import Main from "../Layout/Main/Main";
import Register from "../Pages/Auth/Register/Register";
import Home from "../Pages/Home/Home";
import EventCreation from "../Pages/EventCreation/EventCreation";
import EventRegistration from "../Pages/EventRegistration/EventRegistration";
import Feedback from "../Pages/Feedback/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/eventcreation",
        element: <EventCreation></EventCreation>,
      },
      {
        path: "/eventregistration",
        element: <EventRegistration></EventRegistration>,
      },
      {
        path: "/feedback",
        element: <Feedback></Feedback>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
