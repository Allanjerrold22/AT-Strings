// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4P87zK3RMq3911d7LdnAGBiBGKB_Nc60",
  authDomain: "at-strings.firebaseapp.com",
  projectId: "at-strings",
  storageBucket: "at-strings.appspot.com",
  messagingSenderId: "83747103152",
  appId: "1:83747103152:web:582e6b889e2825c8747675",
  measurementId: "G-FE6JNQLE9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app};