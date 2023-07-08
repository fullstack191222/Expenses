import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [bgColor, setBGColor] = useState('');


  const changeTitleHandler = () => {
    setTitle("Arya Stark")
    console.log("new title is : " + title);
  }

  const redBackgroundHandler = () => {
    if (bgColor == '' || bgColor == "#4b4b4b") {
      setBGColor("red")
    } else {
      setBGColor("#4b4b4b")
    }
  }



  const isExpenseHigh = () => {
    return props.amount > 500
  }

  const isItemBought = () => {
    if (props.date < new Date()) {
      return '✔'
    }    
  }


  return (
   
    <Card className='expense-item'>

      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2 onClick={redBackgroundHandler} style={{ backgroundColor: bgColor }}>{title} {(props.date < new Date()) && '✔'}</h2>
        <div className={isExpenseHigh() ? "expense-item__high-price" : "expense-item__price"}>${props.amount}</div>
        <button onClick={changeTitleHandler}>Some Button</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
