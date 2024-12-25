import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../../firebase.config";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Attendence = () => {
  const navigate = useNavigate();
  const [specificEvent, setSpecificEvent] = useState(null);
  const paramId = useParams();
  const { user } = useContext(AuthContext);

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

      const eventCollectionRef = collection(db, "attendence");
      const docRef = await addDoc(eventCollectionRef, attenData);
      toast("Attendence succeed");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {}
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
