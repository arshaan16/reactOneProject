import {useState} from "react";
import "./ExpenseForm.css";
function ExpenseForm(props){
  const [newText,setTextChanges]=useState("");
  const [newNum,setNumChanges]=useState("");
  const [newDate,setDateChanges]=useState("");
  function textChange(event){
   setTextChanges(event.target.value);
  }
  function numChange(event){
    setNumChanges(event.target.value);
  }
  function dateChange(event){
    setDateChanges(event.target.value);
  }
//   function submitted(event){
//  console.log(event.target.value);
//   }
const [classes,setClass]=useState("add-more");
const [classes2,setClass2]=useState("expense_form");
const [classes3,setClass3]=useState("submitIt");
//console.log(classes2);
function setEvent(event){
  event.preventDefault();
  setClass2("expense_form-visible");
 setClass("remove-class");
 setClass3("submitItVisible")
}
function submitHandler(event){
  event.preventDefault();
  let inputObj={
    title:newText,
    date: new Date(newDate),
    amount:newNum,
  };
 // console.log(inputObj);
 setTextChanges("");
 setNumChanges("");
 setDateChanges("");
 props.oncallExpForm(inputObj);
//  setClass("add-more");
}

  return(
    <form className="main" onSubmit={submitHandler} >
      <button className={classes} onClick={setEvent}>
        Add more items
      </button>
    <div className={classes2}>     
<div className="expense_text">
  <label>Title-</label>
  <input type="text" value={newText} onChange={textChange}></input>
</div>
<div className="expense_amount">
  <label>Amount-</label>
  <input type="number" min="0.01" max="199.99" step="0.01" value={newNum} onChange={numChange}></input>
</div>
<div className="expense_date">
  <label>Date-</label>
  <input type="date" min="2020-01-01" max="2024-01-01" value={newDate}onChange={dateChange}></input>
</div>
</div>
<button className={classes3}>
  Submit
</button>
    </form>
  )
  }
export default ExpenseForm;