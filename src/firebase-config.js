//npm install -g firebase-tools
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {initializeApp} from "firebase/app"
import { getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCihlF6KNdq5DodUpDfxOrne2gtANe-hHc",
  authDomain: "pc-app-69744.firebaseapp.com",
  projectId: "pc-app-69744",
  storageBucket: "pc-app-69744.appspot.com",
  messagingSenderId: "485543724877",
  appId: "1:485543724877:web:9980a8e040eb0dbb2d1904"
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
    console.log("lala");
    return;
  }
  const ref=user.uid
  console.log(ref)
  console.log("lalalsa")


      await setDoc(doc(db, "users", ref ),{
        
                Branch:"testfin",
                CGPA:0,
                Email: user.email,
                Github:"test",
                Name:"test",
                Portfolio:"test",
                Resume:"test",
                Semester:1,
                Applied: "nil",
                UserID: user.uid
              });
}

export { db, app }