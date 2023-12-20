// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLQ8Z_24xIP_p1Sohuke2mVV50zktRGxc",
  authDomain: "netflix-65da7.firebaseapp.com",
  projectId: "netflix-65da7",
  storageBucket: "netflix-65da7.appspot.com",
  messagingSenderId: "134766425075",
  appId: "1:134766425075:web:4502ebfb9503f8c2231886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)