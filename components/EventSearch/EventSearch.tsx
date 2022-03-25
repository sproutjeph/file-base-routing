import React, { useRef } from 'react';
import Button from '../UI/Button';
import classes from './EventSearch.module.css';
const EventSearch = (props: any) => {
  const yearInputRef = useRef<HTMLSelectElement>(null);
  const monthInputRef = useRef<HTMLSelectElement>(null);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const selectedYear = yearInputRef.current?.value;
    const selectedMonth = monthInputRef.current?.value;
    props.onSearch(selectedMonth, selectedYear);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year" id="year">
            Year
          </label>
          <select name="" id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">
            <select name="month" id="month" ref={monthInputRef}>
              <option value="1"> January</option>
              <option value="2"> February</option>
              <option value="3"> March</option>
              <option value="4"> April</option>
              <option value="5"> May</option>
              <option value="6"> June</option>
              <option value="7"> July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </label>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
};

export default EventSearch;
