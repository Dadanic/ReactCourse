import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
  const [yearFilter, setYearFilter] = useState("2020");

  const changeFilterHandler = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === yearFilter
  );

  return (
    <Card className="expenses">
      <ExpensesFilter value={yearFilter} onChangeFilter={changeFilterHandler} />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
