import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const DUMMY_USERS = [
  {
    id: 1,
    name: 'John',
    age: 30
  },
  {
    id: 2,
    name: 'Sara',
    age: 25
  },
  {
    id: 3,
    name: 'William',
    age: 18
  }
];

function App() {
  const [usersList, setUsersList] = useState(DUMMY_USERS);

  const addUserHandler = (name, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id: Math.random(), name: name, age: age }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
