// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaZshYdBlfoQs-PhZHUCu8PyYhMjL1NZs",
  authDomain: "dennis-testimonials.firebaseapp.com",
  projectId: "dennis-testimonials",
  storageBucket: "dennis-testimonials.firebasestorage.app",
  messagingSenderId: "1093738229096",
  appId: "1:1093738229096:web:ed789acdcc1c7cc71b3add",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
