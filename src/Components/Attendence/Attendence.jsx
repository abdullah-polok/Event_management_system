import React from "react";

const Attendence = () => {
  const handleAttendence = () => {
    console.log("click user");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={handleAttendence}
        className="btn bg-blue-400 w-32 h-32 text-white text-base"
      >
        Present
      </button>
    </div>
  );
};

export default Attendence;
