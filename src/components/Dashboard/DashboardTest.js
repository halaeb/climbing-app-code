import React, { useState, useEffect } from 'react';
import Form from '../Form';
import Climbs from '../Climb/Climbs';
import Users from '../Users/Users';
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import './Dashboard.css';


function DashboardTest(){


  const[climbList, setClimbList] = useState([]);
  const climbsCollectionRef = collection(db, "climbs");

  

  useEffect(() => {
    const getClimbs = async () => {
      const data = await getDocs(climbsCollectionRef);
      setClimbList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getClimbs();
  }, []);

  return (
    <div className="App">
      
      {climbList.map((climb) => {
        return (
          <div>
            <h1>username: {climb.username}</h1>
            
            
          </div>
        );
      })}
    </div>
  );
  
}
export default DashboardTest;
