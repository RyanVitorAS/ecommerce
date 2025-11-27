// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC2qrevvDP3K5yESpdCQ_eX7CXUlkuSEE",
  authDomain: "ecommerce-f4b9f.firebaseapp.com",
  projectId: "ecommerce-f4b9f",
  storageBucket: "ecommerce-f4b9f.firebasestorage.app",
  messagingSenderId: "811085061374",
  appId: "1:811085061374:web:2466a448e7d19cf5e159af",
  measurementId: "G-FP7NEDPYBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);