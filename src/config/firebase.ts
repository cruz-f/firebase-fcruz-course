import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz64MehjXwqyKnLPWmhv0ln1olmg8kg7w",
  authDomain: "fcruz-course.firebaseapp.com",
  projectId: "fcruz-course",
  storageBucket: "fcruz-course.firebasestorage.app",
  messagingSenderId: "412369263350",
  appId: "1:412369263350:web:1c43d475830f9db9772ad7",
  measurementId: "G-RB2CCY0H7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);