import React, { useState, useEffect } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import ButtonsPanel from './components/NewExpense/ButtonsPanel';

const App = () => {


  let id = 5
  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];


  // useEffect(() => {
    const expenses = [
      {
        id: 1,
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: 2, title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: 3,
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 4,
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ]

    const [expensesDb, setExpensesDb] = useState(expenses)
    const [loggedIn, setLoggedIn] = useState(false)
    // setExpensesDb(expenses)
  //  } , [])

  useEffect(()=>{

  },[loggedIn])


  // const addNewExpense = (expense) => {
  //   setExpensesDb((prevExpenses) => {
  //     return prevExpenses.concat(expense);
  //   });
  // };

  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    console.log(expense);
    console.log("adding expense to the list");
    // expenses.push(expense)
    const expenseWithId = {...expense, id:Math.random()}
    setExpensesDb([expenseWithId, ...expensesDb])
    console.log("added expense and now the list is :");
  }
  console.log(expensesDb);

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler}></NewExpense>
      
      <Expenses items={expensesDb} />
    </div>
  );
}

export default App;
