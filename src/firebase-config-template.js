import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const database = () => {
  const firebaseConfig = {
    /* your config here */
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return db;
};

export default database;
