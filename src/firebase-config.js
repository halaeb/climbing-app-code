import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDq948OeFCG7OwFODaEhNkTsV3xqVQCLUQ",
    authDomain: "climbing-app-15f09.firebaseapp.com",
    projectId: "climbing-app-15f09",
    storageBucket: "climbing-app-15f09.appspot.com",
    messagingSenderId: "228617537334",
    appId: "1:228617537334:web:4cca2d0d52d62ecb829597",
    measurementId: "G-9E5WN2T4GY"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);