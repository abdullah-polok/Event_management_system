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
  setDoc,
} from "firebase/firestore";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { auth, db } from "../../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([]);

  ///Get all  date from eventdata collection
  const getEventFunc = async () => {
    if (user) {
      try {
        const eventCollectionRef = collection(db, "eventData");
        const events = await getDocs(eventCollectionRef);
        // Array to store data from each document
        const eventsList = [];

        // Loop through each document in the collection
        events.forEach((doc) => {
          // Push the document data with the document ID included
          eventsList.push({ id: doc.id, ...doc.data() });
        });

        setEventData(eventsList);
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

      console.log("event data send successfully");
      Swal.fire({
        title: "Great!",
        text: "Event created successfully",
        icon: "success",
      });
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
    console.log(email);
    return sendPasswordResetEmail(auth, email);
  };

  ///log out user
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      getEventFunc();
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  console.log(eventData);
  const userInfo = {
    user,
    signInUser,
    createUser,
    logoutUser,
    sendEmailVerification,
    resetPassword,
    addEventFunc,
    eventData,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
