import "./ExpenseDateAmt.css";
function ExpenseDate(props){
const month=props.date.toLocaleString('en-US',{month:'long'});
const day=props.date.toLocaleString('en-US',{day:'2-digit'});
const year=props.date.getFullYear();
  return(
  //  <h1>{newProps.date}</h1>
<div className="bag"><div>{month}</div>
<div>{day}</div>
<div>{year}</div>
</div>
  )
}
export default ExpenseDate;