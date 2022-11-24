import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense({onAddExpense}) {
  const onSaveExpenseDateHandler = (eneteredExpenseData) => {
    const expenseDate = {
        ...eneteredExpenseData,
        id: Math.random().toString()
    };
    onAddExpense(expenseDate);
    console.log("omar");
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={onSaveExpenseDateHandler} />
    </div>
  );
}

export default NewExpense;
