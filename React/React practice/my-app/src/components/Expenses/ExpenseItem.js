import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // title에 값을 할당하는 것이 아니기 때문에
  // const 사용가능
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  // let title = props.title;

  const clickHandler = () => {
    // title = 'Updated!';
    setTitle('Updated!');
    // console.log가 setTitle보다 먼저 실행되기 떄문에
    // console.log에는 이전의 title이 출력
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
