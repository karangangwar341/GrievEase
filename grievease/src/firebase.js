
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import{getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQpK0_YTRWh6KVP3ghsB9ODZZ-6V2wHLw",
  authDomain: "grievease-b5b86.firebaseapp.com",
  projectId: "grievease-b5b86",
  storageBucket: "grievease-b5b86.appspot.com",
  messagingSenderId: "658666618714",
  appId: "1:658666618714:web:ccffa02dcb8b6a70fbfd63",
  measurementId: "G-L81CEXMDDQ"
};
const app = initializeApp(firebaseConfig);
export const database  = getFirestore(app);
const auth = getAuth();
export  {app , auth};