// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFcCL0R0K-7qm8MLcPbBPyNGjDnrZvP5o",
  authDomain: "event-management-system-a6e42.firebaseapp.com",
  projectId: "event-management-system-a6e42",
  storageBucket: "event-management-system-a6e42.firebasestorage.app",
  messagingSenderId: "1024224375941",
  appId: "1:1024224375941:web:922ecebe2896c0310225ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export { firebase, db };
