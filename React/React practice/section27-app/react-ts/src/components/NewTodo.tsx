import { useRef } from "react";

const NewTodo = () => {
  // generic type을 이용하여 어떤 타입인지 명확히 설정해야 함
  // input 요소를 저장할 것이므로 HTMLInputElement
  // 초기값도 함께 지정해줘야 함
  // button 요소는 HTMLButtonElement
  // paragraph 요소는 HTMLParagraphElement
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // onSubmit은 React.FormEvent
  // onClick은 React.MouseEvent
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
