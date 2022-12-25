import styles from "./InputField.module.css";
import React from "react";


export const InputField = (props) => {
    return(
        <React.Fragment>
            <label htmlFor={props.inputId}>{props.inputTitle}</label>
            <input style={props.invalidInput?{border: "2px solid red"}:{}} id={props.inputId} type="text"
              onChange={props.usernameChangeHandler}
              value={props.value}
            />
            {props.invalidInput && <span className={styles['error-msg']}>{props.inputTitle} required</span>}
        </React.Fragment>
    );
};


export default InputField;