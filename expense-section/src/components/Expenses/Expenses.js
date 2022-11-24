import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
  const [yearFilter, setYearFilter] = useState("2020");

  const changeFilterHandler = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  console.log(filteredExpenses);

  return (
    <Card className="expenses">
      <ExpensesFilter value={yearFilter} onChangeFilter={changeFilterHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
