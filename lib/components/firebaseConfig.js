// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrTWm_lN94mj0wynfZcBjiTiK1-ij2_QQ",
  authDomain: "lucky-puppy-nextjs.firebaseapp.com",
  projectId: "lucky-puppy-nextjs",
  storageBucket: "lucky-puppy-nextjs.appspot.com",
  messagingSenderId: "264275269397",
  appId: "1:264275269397:web:2897ec26afcf4a62a5fb1c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
