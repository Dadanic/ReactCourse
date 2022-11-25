import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.length > 0) {
      setIsValidInput(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue == '') {
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  const onFocusHandler = () => {
    setIsValidInput(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input 
        type="text"
        className={!isValidInput ? 'input__invalid-style' : ''}
        onChange={goalInputChangeHandler}
        onFocus={onFocusHandler}
        />
        {!isValidInput && <label className='input__invalid-text'>Invalid input.</label>}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
