// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyETNvizwHP_P1Gs6LgfCmje8YqnKnh2I",
  authDomain: "react-login-c59ab.firebaseapp.com",
  projectId: "react-login-c59ab",
  storageBucket: "react-login-c59ab.firebasestorage.app",
  messagingSenderId: "84148489352",
  appId: "1:84148489352:web:6644b290a0be8ae67d633d",
  measurementId: "G-1YRRMP0PMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);