import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../../firebase.config";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Attendence = () => {
  ///Get data from local stoprage if available
  const [specificEvent, setSpecificEvent] = useState(() => {
    const storedEvent = localStorage.getItem("specificEvent");
    return storedEvent ? JSON.parse(storedEvent) : null;
  });
  const paramId = useParams();
  const { user } = useContext(AuthContext);

  // const { name, email } = specificEvent;

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        // Use eventname or eventid to reference the document in Firestore
        const docRef = doc(db, "eventData", paramId.id); // Replace 'events' with your collection name
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setSpecificEvent(docSnap.data());
          localStorage.setItem("specificEvent", JSON.stringify(specificEvent));
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchEventData();
  }, [paramId.id]);

  if (specificEvent != null) {
    console.log("specficEvent:", specificEvent);
  }

  const handleAttendence = async () => {
    try {
      const attenData = {
        eventId: paramId.id,
        eventName: specificEvent != null && specificEvent.name,
        userId: user.uid,
        username: user.displayName,
        orgEmail: specificEvent != null && specificEvent.email,
      };
      console.log("attenData:", attenData);

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
