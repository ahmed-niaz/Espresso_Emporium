// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ6oPA2_tgiYT5nZf4No4Okj4P6WnDru8",
  authDomain: "espressoemporium-4df56.firebaseapp.com",
  projectId: "espressoemporium-4df56",
  storageBucket: "espressoemporium-4df56.appspot.com",
  messagingSenderId: "811433675244",
  appId: "1:811433675244:web:5476d5160f1084ba8118c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);