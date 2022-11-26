import React, { useState } from "react";
import styles from "./NewUserForm.module.css";

function NewUserForm({newUserHandler}) {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    newUserHandler({id:Math.random()*100, name: userName, age:age});
  };

  const usernameChangeHandler = (e) => {
    setUserName(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  }


  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-user__controls"]}>
        <div className={styles["new-user__control"]}>
          <label>Username</label>
          <input type="text" onChange={usernameChangeHandler} value={userName}/>
        </div>

        <div className={styles["new-user__control"]}>
          <label>Age (Years)</label>
          <input type="text" min="0" step="1" onChange={ageChangeHandler} value={age}/>
        </div>
      </div>
      <div className={styles["new-user__buttons"]}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
}

export default NewUserForm;
