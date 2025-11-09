// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR1eKbXkhQ42JviufTFnGcSga5z-F6z7Q",
  authDomain: "portal-20b01.firebaseapp.com",
  projectId: "portal-20b01",
  storageBucket: "portal-20b01.firebasestorage.app",
  messagingSenderId: "91880677995",
  appId: "1:91880677995:web:843902f5a9b9ef2834072e",
  measurementId: "G-6BVQN1DXF6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
