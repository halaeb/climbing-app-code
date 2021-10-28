import React, { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
} from 'firebase/firestore';
import Form from '../Form';
import Climbs from '../Climb/Climbs';
import Users from '../Users/Users';
import db from '../../firebase-config';
import './Dashboard.css';

function Dashboard() {
  const [climbList, setClimbList] = useState([]);
  const [userList, setUserList] = useState([]);

  const climbsCollectionRef = collection(db, 'climbs');

  useEffect(() => {
    const getClimbs = async () => {
      const data = await getDocs(climbsCollectionRef);
      setClimbList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getClimbs();
  }, []);

  const addUser = (username) => {
    const user = { username, nClimbs: 1 };
    const newUserList = [...userList, user];
    setUserList(newUserList);
  };

  const deleteUser = (username) => {
    let newUserList = [...userList];
    const userIndex = newUserList.findIndex((user) => user.username === username);
    newUserList = newUserList.slice(0, userIndex).concat(newUserList.slice(userIndex + 1,
      newUserList.length));
    setUserList(newUserList);
  };

  const updateUser = (username, value) => {
    const newUserList = [...userList];
    const userIndex = newUserList.findIndex((user) => user.username === username);
    newUserList[userIndex].nClimbs += value;
    /* sort newUserList */
    newUserList.sort((a, b) => (a.nClimbs > b.nClimbs ? -1 : 1));
    setUserList(newUserList);
    /* check if nClimbs=0. if so, call function to delete user */
    if (userList[userIndex].nClimbs === 0) {
      deleteUser(username);
    }
  };

  const addClimb = (climb) => {
    const newClimbList = [climb, ...climbList];
    newClimbList.sort((a, b) => (a.date > b.date ? -1 : 1));
    setClimbList(newClimbList);
    /* check if user is in userList.
    T-update nClimbs. F-addUser */
    if (userList.some((user) => user.username === climb.username)) {
      updateUser(climb.username, 1);
    } else {
      addUser(climb.username);
    }
  };

  const addLike = (climbToUpdate) => {
    const newClimbList = [...climbList];
    const climbIndex = newClimbList.findIndex((climb) => climb.id === climbToUpdate.id);
    newClimbList[climbIndex].likes += 1;
    setClimbList(newClimbList);
  };

  const deleteClimb = (climbToDelete) => {
    let newClimbList = [...climbList];
    const climbIndex = newClimbList.findIndex((climb) => climb.id === climbToDelete.id);
    newClimbList = newClimbList.slice(0, climbIndex).concat(newClimbList.slice(climbIndex + 1,
      climbIndex.length));
    setClimbList(newClimbList);
    updateUser(climbToDelete.username, -1);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-column-container">
        <h1 className="dash-title">Submit a Climb</h1>
        <Form onSubmit={addClimb} />
      </div>
      <div className="dashboard-column-container">
        <div className="dashboard-column-header">
          <h1 className="dash-title">Recent Climbs</h1>
        </div>
        <Climbs climbList={climbList} addLike={addLike} deleteClimb={deleteClimb} />
      </div>
      <div className="dashboard-column-container">
        <h1 className="dash-title">Climbers</h1>
        <Users userList={userList} />
      </div>
    </div>
  );
}
export default Dashboard;
