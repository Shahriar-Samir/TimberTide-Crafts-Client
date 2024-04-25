// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzJIOlDpE-muxPQG0wK-n-Kkqj0znaR6c",
  authDomain: "emailpassword-60174.firebaseapp.com",
  projectId: "emailpassword-60174",
  storageBucket: "emailpassword-60174.appspot.com",
  messagingSenderId: "23663344677",
  appId: "1:23663344677:web:64e0fd86b0fa086d7113cc",
  measurementId: "G-EK6ETYH5H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

// apiKey: import.meta.env.APIKEY,
// authDomain: import.meta.env.AUTHDOMAIN,
// projectId: import.meta.env.PROJECTID,
// storageBucket: import.meta.env.STORAGEBUCKET,
// messagingSenderId: import.meta.env.MESSAGINGSENDERID,
// appId: import.meta.env.APPID,
// measurementId: import.meta.env.MEASUREMENTID,