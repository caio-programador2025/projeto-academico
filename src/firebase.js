import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyA-a97P589dT_PVH-sSqtBfZuDtJ27GxXc",
  authDomain: "projeto-academico-e47a1.firebaseapp.com",
  projectId: "projeto-academico-e47a1",
  storageBucket: "projeto-academico-e47a1.firebasestorage.app",
  messagingSenderId: "417449460533",
  appId: "1:417449460533:web:a5f9375932b05e140d027c",
  measurementId: "G-P1R5KNBHZN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth,db}