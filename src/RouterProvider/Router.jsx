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
import RegisteredEventDetails from "../Components/RegisteredEventDetails/RegisteredEventDetails";
import MyRegistered from "../Pages/Dashboard/RegisteredModal/MyRegistered";
import MyHostedEvent from "../Components/HostedEvent/MyHostedEvent";
import Attendence from "../Components/Attendence/Attendence";

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
    path: "/attendence",
    element: (
      <PrivateRouter>
        <Attendence></Attendence>
      </PrivateRouter>
    ),
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
      {
        path: "/registered_event",
        element: (
          <PrivateRouter>
            <RegisteredEventDetails></RegisteredEventDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/myregistered",
        element: (
          <PrivateRouter>
            <MyRegistered></MyRegistered>
          </PrivateRouter>
        ),
      },
      {
        path: "/myhostedevent",
        element: (
          <PrivateRouter>
            <MyHostedEvent></MyHostedEvent>
          </PrivateRouter>
        ),
      },
      {
        path: "/myhostedevent/:id",
        element: (
          <PrivateRouter>
            <Attendence></Attendence>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
