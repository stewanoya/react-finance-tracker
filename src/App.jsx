import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car insurance",
      amount: 294.56,
      date: new Date(2021, 2, 28),
    },
    {
      id: 2,
      title: "New TV",
      amount: 123.24,
      date: new Date(2021, 2, 28),
    },
    {
      id: 3,
      title: "Rent",
      amount: 144364.06,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <>
      <h1>Hello World!</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </>
  );
}

export default App;
