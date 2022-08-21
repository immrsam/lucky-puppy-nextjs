// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkjPIORRmG2BjxRFowYi46ceInPvClOeU",
  authDomain: "lucky-nextjs.firebaseapp.com",
  databaseURL: "https://lucky-nextjs-default-rtdb.firebaseio.com",
  projectId: "lucky-nextjs",
  storageBucket: "lucky-nextjs.appspot.com",
  messagingSenderId: "508905016059",
  appId: "1:508905016059:web:4c00ffab3565601a86fe5e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
