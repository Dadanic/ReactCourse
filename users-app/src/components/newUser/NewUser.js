import React from "react";
import styles from "./NewUser.module.css";
import NewUserForm from "./NewUserForm";

function NewUser({ newUser }) {
  return (
    <div className={styles["new-user"]}>
      <NewUserForm newUserHandler={newUser}/>
    </div>
  );
}

export default NewUser;
