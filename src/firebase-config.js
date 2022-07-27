//npm install -g firebase-tools
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {initializeApp} from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
const db = getFirestore(app);
//const auth = firebase.auth();

// User authentication with google

export const auth = getAuth(app);
export const provider= new GoogleAuthProvider()
export const SignInWithGoogle=()=>
  {
   signInWithPopup(auth, provider).then ((result)=> {
    const name=result.user.displayName;
    const email=result.user.email;
    const photo=result.user.photoURL;

    localStorage.setItem("Name", name)
    localStorage.setItem("Email", email)
    localStorage.setItem("Photo", photo)

    console.log(result)

   }).catch((error) =>{
     console.log(error);
   })
 }
export { db, app }