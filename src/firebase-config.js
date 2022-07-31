//npm install -g firebase-tools
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {initializeApp} from "firebase/app"
import { getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
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
//export const firestore=firebase.firestore(app);

export const createUserDocument = async(user) =>
{
  
  if (!user){
    console.log("ERROR");
    return;
  }
  const ref=user.uid
  console.log(ref)


      await setDoc(doc(db, "users", ref ),{
        
                Branch:"test",
                CGPA:0,
                Email: user.email,
                Github:"test",
                Name:"test",
                Portfolio:"test",
                Resume:"test",
                Semester:1,
              });
}

export { db, app }