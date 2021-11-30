import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const users = [
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

  return (
    <div>
      <AddUser />
      <UsersList users={users} />
    </div>
  );
}

export default App;
