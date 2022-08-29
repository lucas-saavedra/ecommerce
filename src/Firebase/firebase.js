// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-ecommerce-bd-coderhouse.firebaseapp.com",
  projectId: "react-ecommerce-bd-coderhouse",
  storageBucket: "react-ecommerce-bd-coderhouse.appspot.com",
  messagingSenderId: "558326552478",
  appId: import.meta.env.VITE_API_ID,
  measurementId: "G-0H95KQREZ6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default function getFirestore() {
  return firebase.firestore(app)
} 
