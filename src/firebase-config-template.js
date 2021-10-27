import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  //* your api key and config here
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
