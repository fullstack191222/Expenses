import Form from "./Form.js"

export default function NewExpense(props) {

  

  return (
    <div>
        <Form addExpenseHandler={props.addExpenseHandler}></Form>
    </div>
  )
}
