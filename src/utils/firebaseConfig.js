// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9uWUryj5jTX0zOrxXDQSSh49sz-gzwBI",
  authDomain: "farmaciamaffi.firebaseapp.com",
  projectId: "farmaciamaffi",
  storageBucket: "farmaciamaffi.appspot.com",
  messagingSenderId: "836881605889",
  appId: "1:836881605889:web:f7afe54f48ece977382700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
