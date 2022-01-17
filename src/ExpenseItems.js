import "./ExpenseItems.css";
import Card from "./Card";
import "./ExpenseDateAmt.css";
import Border from "./Border";
import ExpenseDate from "./ExpenseDate.js";
function ExpenseItems(props){
 
  return (
    <Border className="container">
     
     {/* <div >{props.date}</div> */}
      <Border><ExpenseDate date={props.date}/></Border>
     <Border className="title"> {props.title}</Border>
     <Card> Amount is ${props.amount}</Card>
    </Border>
  )
}


export default ExpenseItems;