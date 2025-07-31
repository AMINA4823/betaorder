// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getstorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "betaorder-4f8d6.firebaseapp.com",
  projectId: "betaorder-4f8d6",
  storageBucket: "betaorder-4f8d6.firebasestorage.app",
  messagingSenderId: "215126345591",
  appId: "1:215126345591:web:928aa803be2c9e7c914372"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig):getApp();
const db = getFirestore(app);
const storage = getstorage(app);

export {db, storage}