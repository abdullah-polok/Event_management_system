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
import { auth, db } from "../../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([]);

  ///Get event date from data

  const getEventFunc = async () => {
    if (user) {
      try {
        const userDocRef = doc(db, "eventData");
        const eventCollection = await getDoc(userDocRef);

        // Get all documents in the collection
        const events = await getDocs(eventCollection);

        // Create an array to store the documents
        // const eventsList = [];

        // Loop through the documents in the querySnapshot and push the data to eventsList

        events.forEach((doc) => {
          // doc.id is the document ID, doc.data() is the document data
          setEventData.push({ id: doc.id, ...doc.data() });
        });

        // console.log('All event data:', eventsList);  // Log the array containing all documents data
        // return eventsList;
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    }
  };

  ///Save event in the database
  const addEventFunc = async (eventData) => {
    try {
      console.log("event data get:", eventData);

      // setDoc(doc(db, "eventData", 1), {
      //   eventData,
      // });

      const eventCollectionRef = collection(db, "eventData");
      const docRef = await addDoc(eventCollectionRef, eventData);

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
  // console.log(user);
  const userInfo = {
    user,
    signInUser,
    createUser,
    logoutUser,
    sendEmailVerification,
    resetPassword,
    addEventFunc,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
