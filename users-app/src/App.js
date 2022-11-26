import './App.css';
import React, { useState } from 'react';
import NewUser from './components/newUser/NewUser';
import Users from './components/UsersList/Users';


function App() {
  const [users, setUsers] = useState([]);
  
  const newUserHandler = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <NewUser newUser={newUserHandler}/>
      <Users users={users}/>
    </div>
  );
}

export default App;
