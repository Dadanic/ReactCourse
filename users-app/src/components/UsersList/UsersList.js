import React from "react";
import styles from './UsersList.module.css'
import UserInfo from './UserInfo';


function UsersList(props) {
    return(
        <div>
            {props.usersList.map((user) => {
                const nameAge = `${user.name} (${user.age} years old)`;
                return <UserInfo key={user.id} info={nameAge}/>;
            })}
        </div>
    );
};

export default UsersList;