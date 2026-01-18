/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbkXD-JVxARxK5Lm8nhhxxFZk7cDa2jHU",
  authDomain: "naples-delivery.firebaseapp.com",
  projectId: "naples-delivery",
  storageBucket: "naples-delivery.firebasestorage.app",
  messagingSenderId: "101591003876",
  appId: "1:101591003876:web:fa7c07dc3b1f493541f2f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);