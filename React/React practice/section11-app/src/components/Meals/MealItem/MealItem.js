import React from "react";
import MealItemForm from './MealItemForm';
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  // 앞에 달러 기호가 있고, 소수점 이하 두 자리까지 표시되도록
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
