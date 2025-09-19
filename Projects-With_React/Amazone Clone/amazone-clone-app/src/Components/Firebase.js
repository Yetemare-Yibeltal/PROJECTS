// src/Components/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAT4fZgBuYpKtRDVcrq-Zjn6NgTLut6bH8",
  authDomain: "e-clone-5cd3b.firebaseapp.com",
  projectId: "e-clone-5cd3b",
  storageBucket: "e-clone-5cd3b.appspot.com", // corrected domain
  messagingSenderId: "212702431960",
  appId: "1:212702431960:web:3789ce21db2732ef43e5ad",
  measurementId: "G-S9GN6F5KX9",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
