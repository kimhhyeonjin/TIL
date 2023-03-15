import React from "react";

import TodoItem from "./TodoItem";
import Todo from "../models/todo";

// FC(Functional Component): 리액트 패키지에 정의된 타입
// generic type, 함수형 컴포넌트로 동작한다는 것을 명확하게
// 제네릭 타입을 사용해서 'FC'라는 제네릭 타입의 용도에 맞게 사용할
// 하나의 타입을 명시적으로 설정(props.children과 같이 사용 가능)
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
