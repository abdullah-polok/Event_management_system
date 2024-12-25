import { addDoc, collection } from "firebase/firestore";
import React, { useContext } from "react";
import { db } from "../../../firebase.config";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Attendence = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const result = location.state;
  const { id, name, email, starttime, endtime } = result.event;
  const handleAttendence = async () => {
    try {
      const attenData = {
        eventId: id,
        eventName: name,
        userId: user.uid,
        orgEmail: email,
      };
      const eventCollectionRef = collection(db, "attendence");
      ///This function auto generate Document ID
      const docRef = await addDoc(eventCollectionRef, attenData);
      // console.log("event data send successfully");
      toast("Attendence succeed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={handleAttendence}
        className="btn bg-blue-400 w-32 h-32 text-white text-base"
      >
        Present
      </button>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Attendence;
