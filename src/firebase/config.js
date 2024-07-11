// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlW80sfuJoKxCfEqf7nDyWoOI2xSy9bZc",
  authDomain: "preentregafinalreact.firebaseapp.com",
  projectId: "preentregafinalreact",
  storageBucket: "preentregafinalreact.appspot.com",
  messagingSenderId: "171812878806",
  appId: "1:171812878806:web:4d462f826540ba635acc77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);