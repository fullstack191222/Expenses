import { useState } from "react"
import Card from "../UI/Card"




export default function ButtonsPanel(props) {

  
  const [filterBigSmall, setFilterBigSmall] = useState(true)
  const changeFilterButtonHandler = ()=>{
     props.bigExpenseFilterHandler()
     setFilterBigSmall(!filterBigSmall)

  }


  return (
    <div >
        <Card className='expense-item'>
            <button onClick={changeFilterButtonHandler}>{filterBigSmall? "Filter Only Big Expenses" : "Show all"} </button>
            <button> firstButton </button>
            <button> firstButton </button>
        </Card>
    </div>
  )
}
