import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [newExpense, setNewExpense] = useState({});

  const titleChangeHandler = (e) => {
    setNewExpense((prev) => {
      return { ...prev, title: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setNewExpense((prev) => {
      return { ...prev, date: new Date(e.target.value) };
    });
  };

  const amountChangeHandler = (e) => {
    setNewExpense((prev) => {
      return { ...prev, amount: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(newExpense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
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
