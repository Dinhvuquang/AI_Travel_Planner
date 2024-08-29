// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT_H542nsGhdYd_9A9glE1gpClQrtrwOY",
  authDomain: "ai-travel-planner-166ca.firebaseapp.com",
  projectId: "ai-travel-planner-166ca",
  storageBucket: "ai-travel-planner-166ca.appspot.com",
  messagingSenderId: "470394106045",
  appId: "1:470394106045:web:e0260917793dae65ca87d4",
  measurementId: "G-TCZ04MW11E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
