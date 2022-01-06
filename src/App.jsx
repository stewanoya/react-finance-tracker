import ExpenseList from "./components/ExpenseList";

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
  ];
  return (
    <>
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default App;
