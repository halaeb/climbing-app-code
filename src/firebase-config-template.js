import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    //* your api key and config here
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);