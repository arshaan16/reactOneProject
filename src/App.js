// import ExpenseForm from "./ExpenseAdd/ExpenseForm";
import "./App.css";
import ExpenseItems from "./ExpenseItems";
import ExpenseForm from "./ExpenseAdd/ExpenseForm";
import { useState } from "react";
import FilteredYear from "./FilteredYear";
//import MyInput from "./MyInput";

let item = [
  {
    date: new Date(2020, 10, 24),
    title: "Car Insurance Policy",
    amount: "26.99",
    id: 1,
  },
  {
    date: new Date(2021, 11, 16),
    title: "The Birthday",
    amount: "100",
    id: 2,
  },
  {
    date: new Date(2022, 0, 1),
    title: "New year",
    amount: "500",
    id: 3,
  },
];

function App() {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  let [expenses, setExpenses] = useState(item);

  function callExpenseForm(obj) {
    //console.log(obj);
    let newObj = {
      ...obj,
      id: Math.random().toString(),
    };
    setExpenses((prevExpense) => {
      return [newObj, ...prevExpense];
    });
  }

  const onFilterEvent = (year) => {
    let filteredExpenses = item.filter((expense) => {
      return expense.date.getFullYear().toString() == year;
    });

    setExpenses(filteredExpenses);
    setFilteredYear(year); // direct function from useState() hook
  };

  //console.log(expenses);
  return (
    <div>
      <ExpenseForm oncallExpForm={callExpenseForm}></ExpenseForm>
      <FilteredYear
        expenses={expenses}
        filteredYear={filteredYear}
        onFilterEvent={onFilterEvent} // event
      />
      {expenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}
export default App;
