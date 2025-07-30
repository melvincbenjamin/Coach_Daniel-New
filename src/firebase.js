import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZcgXgWqmHN--6jYafYS-H-WwoEF1Mzys",
  authDomain: "coach-dennis-tracker.firebaseapp.com",
  projectId: "coach-dennis-tracker",
  storageBucket: "coach-dennis-tracker.appspot.com",  // ✅ fixed
  messagingSenderId: "878467675742",
  appId: "1:878467675742:web:cde148c89311c2d4fca6cf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
