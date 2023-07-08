import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ButtonsPanel from '../NewExpense/ButtonsPanel';

const Expenses = (props) => {

  const [toFilterOnlyHigh, setToFilterOnlyHigh] = useState(false)

  const filterHighExpense = (expense)=> {
    if (!toFilterOnlyHigh) {
      return <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={new Date(expense.date)}
            />
    } else {
      if (expense.amount > 500) {
        return <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={new Date(expense.date)}
            />
      }
    }

  }
  const bigExpenseFilterHandler = (amount)=>{
    setToFilterOnlyHigh(!toFilterOnlyHigh)
  }

  return (
    <div>     
      <Card className="expenses">
        <ButtonsPanel bigExpenseFilterHandler={bigExpenseFilterHandler}></ButtonsPanel>
        {props.items.map((expense) =>         
          filterHighExpense(expense)            
        )}
      </Card>
    </div>
  );
}

export default Expenses;
