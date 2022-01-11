import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./ExpenseList.css";

const ExpenseList = (props) => {
  const { expenses } = props;

  const eachExpense = expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return <Card className="expenses">{eachExpense}</Card>;
};

export default ExpenseList;
