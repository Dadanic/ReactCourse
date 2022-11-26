import React from "react";
import styles from './UserInfo.module.css'


function UserInfo(props) {
    return(
        <div className={styles['user-info']}>
            <h2>{props.info}</h2>
        </div>
    );
};

export default UserInfo;