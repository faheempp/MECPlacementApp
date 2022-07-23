//npm install -g firebase-tools
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGxtfAReJN3vQI6oXZf4G5TE4gCiO8hI8",
  authDomain: "pc-app-9f36e.firebaseapp.com",
  projectId: "pc-app-9f36e",
  storageBucket: "pc-app-9f36e.appspot.com",
  messagingSenderId: "371778176262",
  appId: "1:371778176262:web:5bd6cd650c2bae66e30a87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);