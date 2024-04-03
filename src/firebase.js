// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGzY7hzSG7Tsv-EbOws4I_vT3Mla-BZYc",
  authDomain: "twitter-auth-2ac68.firebaseapp.com",
  projectId: "twitter-auth-2ac68",
  storageBucket: "twitter-auth-2ac68.appspot.com",
  messagingSenderId: "496003292680",
  appId: "1:496003292680:web:58f20058b16c25224e3bbd",
  measurementId: "G-JTW925R9KM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth =  getAuth(app);

export {db, auth};