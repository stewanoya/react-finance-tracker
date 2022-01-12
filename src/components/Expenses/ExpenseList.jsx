import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  const { expenses } = props;

  const [year, setYear] = useState("2021");

  const eachExpense = expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  const getYear = (selected) => {
    setYear(selected);
  };

  return (
    <Card className="expenses">
      {" "}
      <ExpenseFilter getYear={getYear} selected={year} /> {eachExpense}
    </Card>
  );
};

export default ExpenseList;
