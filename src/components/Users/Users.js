import React from 'react';
import './Users.css';
import UserInstance from './UserInstance';

const Users = (props) => props.userList.map((user) => (
  <UserInstance user={user} />
));

export default Users;
