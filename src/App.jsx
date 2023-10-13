import React from "react";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: "Study",
      amount: 300,
      date: new Date(2021, 2, 20),
    },
    {
      id: 'e2',
      title: "Goods",
      amount: 400,
      date: new Date(2021, 4, 12),
    },
    {
      id: 'e3',
      title: "Petrol",
      amount: 350,
      date: new Date(2021, 2, 1),
    },
  ];
  return (
    <div className="app">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
