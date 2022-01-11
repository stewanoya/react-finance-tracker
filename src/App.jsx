import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: 1,
      title: "Car insurance",
      amount: 294.56,
      date: new Date(2021, 5, 11),
    },
    {
      id: 2,
      title: "New TV",
      amount: 123.24,
      date: new Date(2021, 7, 1),
    },
    {
      id: 3,
      title: "Rent",
      amount: 144364.06,
      date: new Date(2021, 1, 23),
    },
    {
      id: 4,
      title: "Dog Food",
      amount: 120.23,
      date: new Date(2020, 11, 15),
    },
  ];
  return (
    <>
      <NewExpense />
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default App;
