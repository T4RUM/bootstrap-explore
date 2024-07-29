import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "0000000000000000000000000000",
  authDomain: "my-task-52526.firebaseapp.com",
  projectId: "my-task-52526",
  storageBucket: "my-task-52526.appspot.com",
  messagingSenderId: "92753903381",
  appId: "0000000000000000000000",
};

// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações de autentication
export const auth = getAuth(app);
// db => objeto com as configurações do Firestore
export const db = getFirestore(app);
