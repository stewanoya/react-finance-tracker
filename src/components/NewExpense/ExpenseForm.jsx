import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const { onSaveNewExpense } = props;
  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    setNewExpense((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setNewExpense((prev) => {
      return { ...prev, date: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setNewExpense((prev) => {
      return { ...prev, amount: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const day = newExpense.date.split("-")[2];
    // subtract 1 from month to accomodate Date class. since 0 = Jan
    const month = newExpense.date.split("-")[1] - 1;
    const year = newExpense.date.split("-")[0];

    const submitExpense = { ...newExpense, date: new Date(year, month, day) };
    console.log(day, month, year);
    console.log(newExpense.date);
    onSaveNewExpense(submitExpense);
    setNewExpense({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newExpense.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newExpense.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={newExpense.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
