
import { useState } from "react";
import Card from "../UI/Card.js";


export default function Form(props) {
    // const [title, setTitle] = useState('')
    // const [amount, setamount] = useState(0)
    // const [date, setDate] = useState('')
    const [expense , setExpense] = useState({title: '', amount: 0, date: '' })

    const amountChangeHandler = (e)=>{
        // setamount(e.target.value)  
         setExpense({...expense, amount: e.target.value})     
    }

    const titleChangeHandler = (e)=>{
        // setTitle(e.target.value)
        setExpense({...expense, title: e.target.value}) 
    }

    const dateChangeHandler = (e)=>{
        // setDate(e.target.value)
        setExpense({...expense, date: e.target.value}) 
    }

    

    const submitHandler = (e)=> {
        e.preventDefault(); // Prevent default form submission
        props.addExpenseHandler(expense)
        // Reset the form fields
        setExpense({ title: "", amount: 0, date: "" });

    }

    return (


        <div className="form-container">
            <Card className="expenses">
                <form onSubmit={submitHandler}>


                    <input type="text" id="title" name="title" placeholder="Title" required onChange={titleChangeHandler} value={expense.title}/>

                    <input type="number" id="amount" name="amount" placeholder="Amount" required onChange={amountChangeHandler}  value={expense.amount}/>


                    <label htmlFor="date" style={{ color: "white" }}>Date:</label>
                    <input type="date" id="date" name="date" required  onChange={dateChangeHandler} value={expense.date}/>

                    <input type="submit" value="Submit" />

                </form>
                <p style={{ color: "white" }}>Title: {expense.title}, amount: {expense.amount}$, Date: {expense.date}</p>
            </Card>
        </div>
    );
}
