import React from "react";
import Card from "../UI/Card";
import styles from './Users.module.css'

import UsersList from './UsersList';


function Users(props) {
    return(
        <Card className={styles.input}>
            <UsersList usersList={props.users} />
        </Card>
    );
};

export default Users;