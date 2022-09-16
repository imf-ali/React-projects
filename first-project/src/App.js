import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const EXPENSES = [];

const App = () => {
  
  const [expenses,setExpenses] = useState(EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpense => {
      return [expense, ...prevExpense]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
