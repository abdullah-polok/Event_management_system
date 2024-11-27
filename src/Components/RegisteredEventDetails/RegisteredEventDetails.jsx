import React from "react";
import { useLocation } from "react-router-dom";

const RegisteredEventDetails = () => {
  const location = useLocation();
  const result = location.state?.event;
  console.log(result);
  return (
    <div>
      <h1>registered_event</h1>
    </div>
  );
};

export default RegisteredEventDetails;
