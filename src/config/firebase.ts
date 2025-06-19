import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz64MehjXwqyKnLPWmhv0ln1olmg8kg7w",
  authDomain: "fcruz-course.firebaseapp.com",
  projectId: "fcruz-course",
  storageBucket: "fcruz-course.firebasestorage.app",
  messagingSenderId: "412369263350",
  appId: "1:412369263350:web:280a137470e8e198772ad7",
  measurementId: "G-Z0YM8VC128",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
