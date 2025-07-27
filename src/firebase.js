// src/firebase.js

// Import the required Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaZshYdBlfoQs-PhZHUCu8PyYhMjL1NZs",
  authDomain: "dennis-testimonials.firebaseapp.com",
  projectId: "dennis-testimonials",
  storageBucket: "dennis-testimonials.firebasestorage.app",
  messagingSenderId: "1093738229096",
  appId: "1:1093738229096:web:ed789acdcc1c7cc71b3add",
  measurementId: "G-RQ3FH47ZGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore and export it
export const db = getFirestore(app);
