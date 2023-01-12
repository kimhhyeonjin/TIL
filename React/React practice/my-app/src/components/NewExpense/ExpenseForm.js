import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // 첫 번째 방법
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // 두 번째, 세 번째 방법
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  // EventListener
  const titleChangeHandler = (event) => {
    // 첫 번째 방법
    setEnteredTitle(event.target.value);

    // 두 번째 방법
    // setUserInput({
      // 기존의 값을 불러온 후 수정할 부분을 업데이트
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // 세 번째 방법(권장)
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // 첫 번째 방법
    setEnteredAmount(event.target.value);

    // 두 번째 방법
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    // 세 번째 방법(권장)
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredAmout: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // 첫 번째 방법
    setEnteredDate(event.target.value);

    // 두 번째 방법
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    // 세 번째 방법(권장)
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value };
    // });
  };

  return (
    <form action="">
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2020-01-01"
          max="2023-12-31"
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
