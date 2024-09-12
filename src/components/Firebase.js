// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL1Rq-78c6NjpxUJjXR2tw1loZbISzT54",
  authDomain: "caratlane-f1ac3.firebaseapp.com",
  projectId: "caratlane-f1ac3",
  storageBucket: "caratlane-f1ac3.appspot.com",
  messagingSenderId: "700694065315",
  appId: "1:700694065315:web:bea5881485f1e055750f16",
  measurementId: "G-6K2JX8RZQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

// const analytics = getAnalytics(app);