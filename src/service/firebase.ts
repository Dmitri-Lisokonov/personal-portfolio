import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// }

const firebaseConfig = {
  apiKey: "AIzaSyDQXDyJDCc4b1D139R9tftTyDjOwtlNW-g",
  authDomain: "portfolio-7e0dd.firebaseapp.com",
  databaseURL: "https://portfolio-7e0dd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-7e0dd",
  storageBucket: "portfolio-7e0dd.appspot.com",
  messagingSenderId: "872659874460",
  appId: "1:872659874460:web:9ec8261abdae10792cb359",
  measurementId: "G-72F61J96Z8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firebaseFunctions = getFunctions(app);
firebaseFunctions.region = "us-central1";
export const db = getFirestore(app);


