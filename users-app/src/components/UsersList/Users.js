import React from "react";
import styles from './Users.module.css'

import UsersList from './UsersList';


function Users(props) {
    return(
        <div className={styles.users}>
            <UsersList usersList={props.users} />
        </div>
    );
};

export default Users;