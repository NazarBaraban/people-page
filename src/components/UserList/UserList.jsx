import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserList.css';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div>
        <h1>User not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>User List</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/user/${user.id}`}>{user.username}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
