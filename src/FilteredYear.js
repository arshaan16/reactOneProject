import "./FilteredYear.css";
import { useState } from "react";
//import MyInput from "./MyInput";
function FilteredYear({ filteredYear = 2021, onFilterEvent }) {
  return (
    <div className="filterYear">
      <h3>Filter the Year</h3>
      <input
        type="number"
        min="2020"
        max="2023"
        step="1"
        selected={filteredYear}
        onChange={(e) => onFilterEvent(e.currentTarget.value)}
      ></input>
    </div>
  );
}
export default FilteredYear;
