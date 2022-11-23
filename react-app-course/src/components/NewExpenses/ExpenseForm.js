import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({onSaveExpenseDate}) {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: e.target.value,
    // });

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: e.target.value,
      };
    });
  };
  const amountChangeHandler = (e) => {
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: e.target.value,
    // });

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: e.target.value,
      };
    });
  };
  const dateChangedHandler = (e) => {
    // setUserInput({
    //     ...userInput,
    //     enteredDate: e.target.value,
    // });

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    onSaveExpenseDate(newExpense);

    setUserInput({
        enteredAmount: '',
        enteredTitle: '',
        enteredDate: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangedHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
