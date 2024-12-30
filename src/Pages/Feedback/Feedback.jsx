import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import EachRegisteredDetails from "../Dashboard/RegisteredModal/EachRegisteredDetails";

const Feedback = () => {
  const { eventRegisterData, user } = useContext(AuthContext);

  const eventRegisteredFilter = eventRegisterData.filter(
    (event) => event.email === user?.email
  );
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 justify-items-center overflow-y-auto">
      {eventRegisteredFilter.map((event, index) => (
        <EachRegisteredDetails
          event={event}
          key={index}
        ></EachRegisteredDetails>
      ))}
    </div>
  );
};

export default Feedback;
