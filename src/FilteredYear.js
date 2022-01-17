import "./FilteredYear.css";
import {useState} from "react";
//import MyInput from "./MyInput";
function FilteredYear(props){
  //console.log(props.expenses);
  let [filteredYear,setFilteredYear]=useState("2020");
  function onChangeFilter(selected){
    setFilteredYear(selected);
  }
 ;
  let filteredExpenses=props.expenses.filter(expense=>{
    let check=expense.date.getFullYear().toString()===filteredYear;
    console.log(check);
    return 1;
  })
  console.log(filteredExpenses);
  //input.onChangeFilter(FilteredYear);
  return(
    <div className="filterYear" >
    <h3>Filter the Year</h3>
 <input type="number" min="2020" max="2023" step="1" selected={filteredYear}
 onChange={onChangeFilter}
></input>
  </div>
  )
}
export default FilteredYear;