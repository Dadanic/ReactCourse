import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "./Button";
import InputField from "./fields/InputField";
import ErrorModal from "../UI/ErrorModal";


function AddUser({ newUser }) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [userNameInvalid, setUserNameInvalid] = useState(false);
  const [ageInvalid, setAgeInvalid] = useState(false);
  const [error, setError] = useState();

  const hideModalHandler = () => {
    setError(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName === null || userName === "") {
      setError({
        title: 'Invalid Username',
        message: 'Please enter a valid username and age (non empty)'
      });
      return;
    }
    if (age === null || age === "" || +age < 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid username and age (non empty)'
      });
      return;
    }
    newUser({ id: Math.random() * 100, name: userName, age: age });
  };

  const usernameChangeHandler = (e) => {
    setUserNameInvalid(false);
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAgeInvalid(false);
    setAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        hideModalHandler={hideModalHandler}
      />}
      <form onSubmit={submitHandler}>
        <InputField
          inputId="username"
          inputTitle="Username"
          invalidInput={userNameInvalid}
          usernameChangeHandler={usernameChangeHandler}
          value={userName}
        />
        <InputField
          inputId="age"
          inputTitle="Age (Years)"
          invalidInput={ageInvalid}
          usernameChangeHandler={ageChangeHandler}
          value={age}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
