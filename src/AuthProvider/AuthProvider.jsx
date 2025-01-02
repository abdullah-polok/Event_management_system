import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { auth, db } from "../../firebase.config";
import emailjs from "@emailjs/browser";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([]);
  const [eventRegisterData, setEventRegisterData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);
  const [feedbackCounter, setFeedbackCounter] = useState([]);
  const [participant, setParticipant] = useState([]);
  const [partiCounter, setPartiCounter] = useState([]);

  ////
  ///Get all data from Participantdata Collection
  const getEventParticipant = async () => {
    if (user) {
      try {
        const eventCollectionRef = collection(db, "attendence");
        const events = await getDocs(eventCollectionRef);
        // Array to store data from each document
        const participantsList = [];
        const participantCounts = {};

        // Loop through each document in the collection
        events.forEach((doc) => {
          // Push the document data with the document ID included
          participantsList.push({ id: doc.id, ...doc.data() });
        });

        events.forEach((doc) => {
          const feedback = doc.data();
          const eventId = feedback.eventName;

          if (participantCounts[eventId]) {
            participantCounts[eventId]++;
          } else {
            participantCounts[eventId] = 1;
          }
        });

        // Convert the object to an array of objects
        const eventsArray = Object.entries(participantCounts).map(
          ([key, value]) => ({
            name: key,
            Partipants_Count: value,
          })
        );

        setParticipant(participantsList);
        setPartiCounter(eventsArray);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    }
  };
  ////send event feedback data into database
  const eventFeedback = async (feedbackData) => {
    try {
      console.log("event data get:", feedbackData);

      // setDoc(doc(db, "eventData", 1), {
      //   eventData,
      // });

      const eventCollectionRef = collection(db, "feedbackData");
      ///This function auto generate Document ID
      const docRef = await addDoc(eventCollectionRef, feedbackData);

      Swal.fire({
        title: "Great!",
        text: "Event feedback sent successfully",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
    }
  };

  ///Get all data from feedbackdata Collection
  const getEventFeedback = async () => {
    if (user) {
      try {
        const eventCollectionRef = collection(db, "feedbackData");
        const events = await getDocs(eventCollectionRef);
        // Array to store data from each document
        const feedbacksList = [];
        const eventCounts = {};

        // Loop through each document in the collection
        events.forEach((doc) => {
          // Push the document data with the document ID included
          feedbacksList.push({ id: doc.id, ...doc.data() });
        });

        events.forEach((doc) => {
          const feedback = doc.data();
          const eventId = feedback.eventName;

          if (eventCounts[eventId]) {
            eventCounts[eventId]++;
          } else {
            eventCounts[eventId] = 1;
          }
        });

        // Convert the object to an array of objects
        const eventsArray = Object.entries(eventCounts).map(([key, value]) => ({
          name: key,
          feedbackCount: value,
        }));

        setFeedbackData(feedbacksList);
        setFeedbackCounter(eventsArray);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    }
  };

  ///send event registered data into database
  const eventRegisterFunc = async (registerData, email) => {
    try {
      // console.log("event registerData get:", registerData);

      ///reference to the firebase collection
      const eventRegisterCollection = collection(db, "eventRegister");

      //query if the data is exists or not
      const dataQuery = query(
        eventRegisterCollection,
        where("eventId", "==", registerData.eventId),
        where("email", "==", registerData.email)
      );

      const queryResult = await getDocs(dataQuery);

      if (!queryResult.empty) {
        Swal.fire({
          text: "Already registered in this event",
          icon: "error",
        });
      } else {
        // setDoc(doc(db, "eventRegister", registerData.eventId), {
        //   registerData,
        // });
        const eventCollectionRef = collection(db, "eventRegister");
        ///This function auto generate Document ID
        const docRef = await addDoc(eventCollectionRef, registerData);

        const subject = `Thank you for registering ${registerData.name}`;

        const emailData = {
          name: user?.displayName,
          from_email: email,
          to_email: user?.email,
          eventname: registerData.name,
          subject: subject,
          event_time: `start at ${registerData.starttime} - End at ${registerData.endtime} `,
          event_location: `Location: ${registerData.location}`,
        };

        emailjs
          .send(
            "service_cr5dd8h",
            "template_lntfldw",
            emailData,
            "k4ruNgk8eV0OfinVM"
          )
          .then(
            (response) => {
              // console.log("success", response.status, response.text);
            },
            (error) => {
              // console.error("Error:", error);
            }
          );
        Swal.fire({
          title: "Great!",
          text: "Thank you for registering event,Email has been sent successfully.",
          icon: "success",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  ///Get all  date from eventdata collection
  const getEventRegisterFunc = async () => {
    if (user) {
      try {
        const eventCollectionRef = collection(db, "eventRegister");
        const events = await getDocs(eventCollectionRef);
        // Array to store data from each document
        const eventsList = [];

        // Loop through each document in the collection
        events.forEach((doc) => {
          // Push the document data with the document ID included
          eventsList.push({ id: doc.id, ...doc.data() });
        });

        setEventRegisterData(eventsList);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    }
  };

  ///Get all  date from eventdata collection
  const getEventFunc = async () => {
    if (user) {
      try {
        const eventCollectionRef = collection(db, "eventData");
        const events = await getDocs(eventCollectionRef);

        // Query to order by the 'createdAt' field
        const q = query(eventCollectionRef, orderBy("createdAt", "asc"));

        const querySnapshot = await getDocs(q);
        // Loop through each document in the collection
        const sortedEvents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEventData(sortedEvents);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    }
  };

  ///Save event in the database
  const addEventFunc = async (eachEventData) => {
    try {
      console.log("event data get:", eachEventData);

      // setDoc(doc(db, "eventData", 1), {
      //   eventData,
      // });

      const eventCollectionRef = collection(db, "eventData");
      ///This function auto generate Document ID
      const docRef = await addDoc(eventCollectionRef, eachEventData);

      // console.log("event data send successfully");
    } catch (err) {
      console.log(err);
    }
  };

  ///create user using firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  ///signInUser

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // ///log out user
  // const logoutUser = () => {
  //   setLoading(true);
  //   setUser(null);
  //   return signOut(auth);
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      getEventFunc();
      getEventRegisterFunc();
      getEventFeedback();
      getEventParticipant();
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {}, [eventData]);

  const userInfo = {
    user,
    setUser,
    setLoading,
    signInUser,
    createUser,
    sendEmailVerification,
    resetPassword,
    addEventFunc,
    eventData,
    eventRegisterFunc,
    eventRegisterData,
    chartData,
    setChartData,
    eventFeedback,
    feedbackData,
    feedbackCounter,
    participant,
    partiCounter,
  };
  // console.log(partiCounter);
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
