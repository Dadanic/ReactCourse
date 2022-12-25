import React, { useState, Fragment } from "react";
import AddUser from "./components/newUser/AddUser";
import Users from "./components/UsersList/Users";

function App() {
  const [users, setUsers] = useState([]);


  const newUserHandler = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Fragment>
      <AddUser newUser={newUserHandler} />
      <Users users={users} />
    </Fragment>
  );
}

export default App;
