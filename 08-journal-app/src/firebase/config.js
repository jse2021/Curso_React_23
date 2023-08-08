// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc9MRn8bfo_9PPNvNhC5EQ_L14ks6i2Oc",
  authDomain: "react-cursos-36e63.firebaseapp.com",
  projectId: "react-cursos-36e63",
  storageBucket: "react-cursos-36e63.appspot.com",
  messagingSenderId: "1049153181723",
  appId: "1:1049153181723:web:95691efe80757ee9f080be"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );