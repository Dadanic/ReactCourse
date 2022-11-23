import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
