import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEPSJVihin05echRiDLNi_9c-R5CWD0Ww",
  authDomain: "bumanager-f7947.firebaseapp.com",
  projectId: "bumanager-f7947",
  storageBucket: "bumanager-f7947.firebasestorage.app",
  messagingSenderId: "796402816038",
  appId: "1:796402816038:web:376ec7cacf3704a239c2e7",
  measurementId: "G-J4TR9325PK"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);