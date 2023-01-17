# React

### React

- A JavaScript library for building user interfaces

- makes building complex, interactive and reactive user interfaces `simpler`

### Component

- React is all about component

- components
  
  - reusable building blocks in user interface

### React

- Declarative approach 선언형 프로그래밍
  
  - `Declarative approach` vs `Imperative approach`
    
    - 선언형 프로그래밍 vs 명령형(절차형) 프로그래밍
    
    - 선언형 프로그래밍
      
      - 무엇을 할 것인가
        
        ```js
        <div className="App">
          <h2>Let's get started!</h2>
          <p>This is also visible!</p>
        </div>
        ```
    
    - 명령형(절차형) 프로그래밍
      
      - 어떤 일을 어떻게 할 것인가
        
        ```js
        const para = document.createElement('p');
        para.textContent = 'This is also visible';
        document.getElementById('root').append(para);
        ```

### Create React app

[github create-react-app](https://github.com/facebook/create-react-app)

[create-react-app.dev](https://create-react-app.dev/)

```bash
npx create-react-app my-app
cd my-app
npm start
```

![create_react_app](React_assets/create_react_app.png)

- package.json
  
  - 프로젝트에서 사용하는 패키지 정보

- `$ npm install`
  
  - package.json 파일을 살펴보고, 프로젝트 폴더에 필요한 모든 패키지와 개발에 필요한 것들을 다운로드해서 설치

![src](React_assets/src.png)

- index.js
  
  ```js
  import ReactDOM from 'react-dom/client';
  
  import './index.css';
  import App from './App';
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  ```
  
  - import ReactDOM from 'react-dom/client';
    
    - ReactDOM이라는 객체를 react-dom이라는 서드 파티 라이브러리에서 가져옴

- App.js
  
  ```js
  function App() {
    return (
      <div>
        <h2>Let's get started!</h2>
      </div>
    );
  }
  
  export default App;
  ```
  
  - export default App;
    
    - App.js 파일에서 정의된 함수, 클래스 또는 객체를 다른 파일에서 사용하기 위해서 내보내는 과정

![index_html](React_assets/index_html.png)

- index.html
  
  - 브라우저에서 로딩되는 유일한 HTML 파일
  
  - 그 외 웹 페이지 상의 모든 사용자 인터페이스 관련 변경 사항은 React가 처리

- auto format shortcut
  
  - File > Preferences > Keyboard Shortcuts > 'format document' 검색

### JSX

- JSX
  
  - JavaScript XML
  
  - JavaScript에 XML을 추가한 문법
  
  - 리액트 팀이 개발하고 도입한 특수 구문

- className
  
  - class 대신 className을 사용
    
    ```js
    // App.js
    
        <div className="App">
          ...
        </div>
    ```

- htmlFor
  
  - label에서 for 대신 htmlFor 사용
    
    ```js
    <label htmlFor="username">Username</label>
    ```

### npm

- `npm i prop-types`
  
  - 전달받은 props가 원하는 props인지를 확인
    
    ```bash
    npm i prop-types
    ```
  
  - 설치 확인
    
    - package.json의 dependencies에서 `prop-types` 확인
      
      ```js
      Food.propTypes = {
        name: PropTypes.string.isRequired
      } 
      ```

- `axios`
  
  ```bash
  npm i axios
  ```
  
  - axios 설치 후 import
    
    ```js
    import axios from "axios";
    ```

- `router`
  
  ```bash
  npm i react-router-dom
  ```

### component life cycle

- Mounting
  
  - constructor()
    
    - super()
      
      ```js
        constructor(props) {
          super(props)
          console.log("hello")
        }
      ```
  
  - render()
    
    ```js
      render(){
        console.log("I am rendering")
      }
    ```
  
  - componentDidMount()
    
    ```js
      componentDidMount(){
        console.log("component rendered")
      }
    
      componentDidMount(){
        setTimeout(() => {
          this.setState({ isLoading: false })
        }, 6000);
      }
    ```

- Updating
  
  - render()
    
    ```js
      render(){
        console.log("I am rendering")
      }
    ```
  
  - componentDidUpdate()
    
    ```js
      componentDidUpdate(){
        console.log("I just updated")
      }
    ```

- Unmounting
  
  - componentWillUnmount()
    
    ```js
      componentWillUnmount(){
        console.log("Goodbye")
      }
    ```

### Props

- 재사용 가능한 컴포넌트 생성

- 컴포넌트에서 컴포넌트로 데이터 전달 가능
  
  ```js
  // App.js
  
  import ExpenseItem from "./components/ExpenseItem";
  
  function App() {
    const expenses = [
      {
        id: 'e1',
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      {
        id: 'e2',
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
      },
      {
        id: 'e3',
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ];
  
    return (
      <div className="App">
        <h2>Let's get started!</h2>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
      </div>
    );
  }
  
  export default App;
  ```
  
  ```js
  // ExpenseItem.js
  
  import "./ExpenseItem.css";
  
  function ExpenseItem(props) {
  
    return (
      <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItem;
  ```
  
  ```css
  /* ExpenseItem.css */
  
  .expense-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
      padding: 0.5rem;
      margin: 1rem 0;
      border-radius: 12px;
      background-color: #4b4b4b;
  }
  
  .expense-item__description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: flex-end;
      flex-flow: column-reverse;
      justify-content: flex-start;
      flex: 1;
  }
  
  .expense-item h2 {
      color: #3a3a3a;
      font-size: 1rem;
      flex: 1;
      margin: 0 1rem;
      color: white;
  }
  
  .expense-item__price {
      font-size: 1rem;
      font-weight: bold;
      color: white;
      background-color: #40005d;
      border: 1px solid white;
      padding: 0.5rem;
      border-radius: 12px;
  }
  
  @media (min-width: 500px) {
      .expense-item__description {
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          flex: 1;
      }
  }
  
  .expense-item__description h2 {
      font-size: 1.25rem;
  }
  
  .expense-item__price {
      font-size: 1.25rem;
      padding: 0.5rem 1.5rem;
  }
  ```

- children prop
  
  - 사용자 지정 컴포넌트에 있는 열고 닫는 태그 사이에 있는 컨텐츠를 모두 표시하는 props
  
  - 중복된 코드 뿐 아니라 Html 코드와 JSX 코드 등을 추출할 수 있음
    
    ```js
    // Card.js
    
    import './Card.css';
    
    function Card(props) {
        const classes = 'card ' + props.className;
    
        return (
            <div className={classes}>{props.children}</div>
        );
    }
    
    export default Card;
    ```
    
    ```css
    /* Card.css */
    
    .card {
         border-radius: 12px;
         box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
    }
    ```
    
    ```js
    // Expenses.js
    
    import Card from './Card';
    import './Expenses.css';
    
    function Expenses(props) {
      return (
        <Card className="expenses">
          ...
        </Card>
      );
    }
    
    export default Expenses;
    ```

### 자식 컴포넌트에서 부모 컴포넌트로 데이터 이동

- Lifting State up
  
  - props를 사용해서 부모 컴포넌트로부터 함수를 받고 자식 컴포넌트에서 그 함수를 불러옴
    
    - 자식 컴포넌트인 NewExpense의 데이터를 부모 컴포넌트인 App으로 이동
      
      ```js
      // NewExpense.js
      
      import React from "react";
      import ExpenseForm from './ExpenseForm';
      import './NewExpense.css';
      
      const NewExpense = (props) => {
        const saveExpenseDataHandler = (enteredExpenseData) => {
          const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
          };
          props.onAddExpense(expenseData);
        };
      
        return <div className="new-expense">
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>;
      };
      
      export default NewExpense;
      ```
      
      ```js
      // App.js
      
      import React from 'react';
      import Expenses from './components/Expenses/Expenses';
      import NewExpense from './components/NewExpense/NewExpense';
      
      const App = () => {
        const expenses = [
          ...
        ];
      
        const addExpenseHandler = (expense) => {
          console.log('In App.js');
          console.log(expense)
        };
      
        return (
          <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
          </div>
        );
      }
      
      export default App;
      ```

### Context API를 이용한 중앙 state에서의 데이터 관리

- 하나의 중앙 state에서 관리 

- 집중적이고 분리된 접근 방식

- 구성을 하는 경우는 프롭 사용을 권장하고 컴포넌트 또는 전체 앱에서 state 관리를 하는 경우는 컨텍스트 사용을 권장
  
  - index.js
    
    ```js
    import React from "react";
    import ReactDOM from "react-dom/client";
    
    import "./index.css";
    import App from "./App";
    import { AuthContextProvider } from "./store/auth-context";
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    );
    ```
  
  - App.js
    
    ```js
    import React, { useContext } from "react";
    
    import Login from "./components/Login/Login";
    import Home from "./components/Home/Home";
    import MainHeader from "./components/MainHeader/MainHeader";
    import AuthContext from "./store/auth-context";
    
    function App() {
      const ctx = useContext(AuthContext);
      return (
        <React.Fragment>
          <MainHeader />
          <main>
            {!ctx.isLoggedIn && <Login />}
            {ctx.isLoggedIn && <Home />}
          </main>
        </React.Fragment>
      );
    }
    
    export default App;
    ```
  
  - auth-context.js
    
    ```js
    import React, { useState, useEffect } from "react";
    
    const AuthContext = React.createContext({
      isLoggedIn: false,
      // 자동완성 기능을 위해 입력
      onLogout: () => {},
      onLogin: (email, password) => {},
    });
    
    // 전체 로그인 state 관리, 모든 컨텍스트 설정
    export const AuthContextProvider = (props) => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    
        // useState를 사용하면 무한루프 생성
        if (storedUserLoggedInInformation === "1") {
          setIsLoggedIn(true);
        }
      }, []);
    
      const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
      };
    
      const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
      };
    
      return (
        <AuthContext.Provider
          value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
          }}
        >
          {props.children}
        </AuthContext.Provider>
      );
    };
    
    export default AuthContext;
    ```

### Event Handler

- Event Handler
  
  - onClick
    
    - 클릭이 발생했을 때
      
      ```js
      // ExpenseItem.js
      
      import React from 'react';
      import ExpenseDate from './ExpenseDate';
      import Card from '../UI/Card';
      import "./ExpenseItem.css";
      
      const ExpenseItem = (props) => {
        const clickHandler = () => {
          console.log('Clicked!!!!!');
        };
      
        return (
          <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
              <h2>{props.title}</h2>
              <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
          </Card>
        );
      }
      
      export default ExpenseItem;
      ```
  
  - onChange
    
    - input 안의 값이 변경될 때
  
  - onSubmit
    
    - 폼이 제출될 때마다 함수를 실행
      
      ```js
      // ExpenseForm.js
      
      import React, { useState } from "react";
      import "./ExpenseForm.css";
      
      const ExpenseForm = () => {
      
        const [enteredTitle, setEnteredTitle] = useState("");
        const [enteredAmount, setEnteredAmount] = useState("");
        const [enteredDate, setEnteredDate] = useState("");
      
        // EventListener
        const titleChangeHandler = (event) => {
          setEnteredTitle(event.target.value);
        };
      
        const amountChangeHandler = (event) => {
          setEnteredAmount(event.target.value);
        };
      
        const dateChangeHandler = (event) => {
          setEnteredDate(event.target.value);
        };
      
        const submitHandler = (event) => {
          event.preventDefault();
      
          const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
          };
      
          console.log(expenseData);
          setEnteredTitle('');
          setEnteredAmount('');
          setEnteredDate('');
        };
      
        return (
          <form onSubmit={submitHandler}>
            <div className="new-expense__controls"></div>
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                ...
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                ...
                value={enteredDate}
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
      ```

### React Hook

- 단순히 use로 시작하는 모든 함수

- 리액트 훅 규칙
  
  - 리액트 컴포넌트 함수 또는 사용자 정의 훅에서만 호출 가능
  
  - 리액트 컴포넌트 함수 또는 사용자 정의 훅 함수의 최상위 수준에서만 호출 가능
    
    - 중첩 함수에서 호출 불가능
    
    - block 문에서 호출 불가능
  
  - useEffect 훅의 경우 필요한 경우를 제외하고는 항상 참조하는 모든 항목을 의존성으로 useEffect 내부에 추가해야 함

- useState
  
  - 컴포넌트 함수가 다시 호출되는 곳에서 `변경된 값을 반영`하기 위해 state로 값을 정의할 수 있게 해주는 함수
  
  - `컴포넌트 함수 내부`에서 useState 함수 호출
    
    - `const [관리되고 있는 값, 새로운 값을 설정하기 위해 호출하는 함수] = useState(초기값)`
      
      ```js
      // ExpenseItem.js
      
      import React, { useState } from 'react';
      import ExpenseDate from './ExpenseDate';
      import Card from '../UI/Card';
      import "./ExpenseItem.css";
      
      const ExpenseItem = (props) => {
        // title에 값을 할당하는 것이 아니기 때문에
        // const 사용가능
        const [title, setTitle] = useState(props.title);
      
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
            ...
            <button onClick={clickHandler}>Change Title</button>
          </Card>
        );
      }
      
      export default ExpenseItem;
      ```
  
  - updating State
    
    ```js
    // ExpenseForm.js
    
    import React, { useState } from "react";
    
    const ExpenseForm = () => {
      // 첫 번째 방법
      // const [enteredTitle, setEnteredTitle] = useState('');
      // const [enteredAmount, setEnteredAmount] = useState('');
      // const [enteredDate, setEnteredDate] = useState('');
    
      // 두 번째, 세 번째 방법
      const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      });
    
      // EventListener
      const titleChangeHandler = (event) => {
        // 첫 번째 방법
        // setEnteredTitle(event.target.value);
    
        // 두 번째 방법
        setUserInput({
          // 기존의 값을 불러온 후 수정할 부분을 업데이트
          ...userInput,
          enteredTitle: event.target.value,
        });
    
        // 세 번째 방법(권장)
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
      };
    
      const amountChangeHandler = (event) => {
        // 첫 번째 방법
        // setEnteredAmount(event.target.value);
    
        // 두 번째 방법
        setUserInput({
          ...userInput,
          enteredAmount: event.target.value,
        });
    
        // 세 번째 방법(권장)
        setUserInput((prevState) => {
            return { ...prevState, enteredAmout: event.target.value };
        });
      };
    
      const dateChangeHandler = (event) => {
        // 첫 번째 방법
        // setEnteredDate(event.target.value);
    
        // 두 번째 방법
        setUserInput({
          ...userInput,
          enteredDate: event.target.value,
        });
    
        // 세 번째 방법(권장)
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
      };
    
      return (
        <form action="">
          ...
          <div className="new-expense__control">
            ...
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            ...
            <input ... onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            ...
            <input ... onChange={dateChangeHandler}/>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      );
    };
    
    export default ExpenseForm;
    ```

- useRef
  
  - 다른 DOM 요소에 접근해서 작업할 수 있도록 함
  
  - 리렌더링하지 않고 컴포넌트의 속성만 조회, 수정함
  
  - DOM을 조작하는 예외적인 작업을 해야 함
    
    ```js
    // AddUser.js
    
    import React, { useState, useRef } from "react";
    import Card from "../UI/Card";
    import Button from "../UI/Button";
    import ErrorModal from "../UI/ErrorModal";
    import Wrapper from "../Helpers/Wrapper";
    import classes from "./AddUser.module.css";
    
    const AddUser = (props) => {
      const nameInputRef = useRef();
      const ageInputRef = useRef();
    
      const [error, setError] = useState();
    
      const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
          ...
          });
          return;
        }
        if (+enteredUserAge < 1) {
          ...
          });
          return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
      };
    
      const errorHandler = () => {
        setError(null);
      };
    
      return (
        <Wrapper>
          ...
          <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                ref={nameInputRef}
              />
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                type="number"
                ref={ageInputRef}
              />
              <Button type="submit">Add user</Button>
            </form>
          </Card>
        </Wrapper>
      );
    };
    
    export default AddUser;
    ```

- useEffect
  
  ```js
  useEffect(() -> {...}, [ dependencies]);
  ```
  
  - 지정한 의존성이 변경된 경우에만 실행
    
    - 컴포넌트가 다시 렌더링될 때는 실행되지 않음
  
  - 첫 번째 인수는 함수
    
    - 지정된 의존성이 변경된 경우 모든 컴포넌트 평가 후에 실행되는 함수
  
  - 두 번째 인수는 지정된 의존성
    
    - 의존성으로 구성된 배열
    
    - 두 번째 인수를 지정하지 않는 경우
      
      - 컴포넌트가 처음으로 마운트되었을 때 실행되고 state가 없데이트될 때마다 실행됨
        
        ```js
          useEffect(() => {
            console.log("EFFECT RUNNING");
          });
        ```
    
    - 두 번째 인수가 빈 배열인 경우
      
      - 컴포넌트가 처음으로 마운트되고 렌더링될 때 한 번만 실행
        
        ```js
          useEffect(() => {
            console.log("EFFECT RUNNING");
          }, []);
        ```
  
  ```js
  // App.js
  
  import React, { useState, useEffect } from "react";
  
  import Login from "./components/Login/Login";
  import Home from "./components/Home/Home";
  import MainHeader from "./components/MainHeader/MainHeader";
  
  function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  
      // useState를 사용하면 무한루프 생성
      if (storedUserLoggedInInformation === "1") {
        setIsLoggedIn(true);
      }
    }, []);
  
    const loginHandler = (email, password) => {
      // We should of course check email and password
      // But it's just a dummy/ demo anyways
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
    };
  
    const logoutHandler = () => {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
    };
  
    return (
      <React.Fragment>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </React.Fragment>
    );
  }
  
  export default App;
  ```
  
  - cleanup function
    
    - effect를 특정한 컴포넌트가 DOM에서 마운트 해제될 때마다(재사용될 때마다) 실행
    
    - 모든 새로운 side effect 함수가 실행되기 전, 컴포넌트가 제거되기 전 실행
      
      ```js
      // Login.js
      
      ...
      
      const Login = (props) => {
        ...
      
        useEffect(() => {
          const identifier = setTimeout(() => {
            console.log("Checking form validity!");
            setFormIsValid(
              enteredEmail.includes("@") && enteredPassword.trim().length > 6
            );
          }, 500);
          return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
          };
        }, [enteredEmail, enteredPassword]);
      
        ...
      
      export default Login;
      ```

- useReducer
  
  - state 관리를 도와줌
  
  - 다른 state를 기반으로 하는 state를 업데이트하는 경우 유용
    
    ```js
    const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
    ```
    
    - 항상 두 개의 값이 있는 배열 반환
    
    - `state`
      
      - 컴포넌트에서 사용할 상태
    
    - `dispatchFn`
      
      - reducerFn 실행
      
      - action 객체를 인자로 받으며 action 객체는 어떤 행동인지를 나타내는 type 속성과 해당 행동과 관련된 payload를 담고 있음
    
    - `reducerFn`
      
      - 컴포넌트 외부에서 state를 업데이트하는 함수
    
    - `initialState`
      
      - 초기 state
    
    - `initFn`
      
      - 초기 함수
    
    ```js
    // Login.js
    
    import React, { useState, useEffect, useReducer } from "react";
    ...
    
    const emailReducer = (state, action) => {
      if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
      }
      if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
      }
      return { value: "", isValid: false };
    };
    
    const Login = (props) => {
      const [enteredPassword, setEnteredPassword] = useState("");
      const [passwordIsValid, setPasswordIsValid] = useState();
      const [formIsValid, setFormIsValid] = useState(false);
    
      const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
      });
    
      const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });
        setFormIsValid(
          event.target.value.includes("@") && enteredPassword.trim().length > 6
        );
      };
    
      ...
    
      const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
      };
    
      ...
    
      const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.value, enteredPassword);
      };
    
      return (
        <Card className={classes.login}>
          <form onSubmit={submitHandler}>
            <div
              className={`${classes.control} ${
                emailState.isValid === false ? classes.invalid : ""
              }`}
            >
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                value={emailState.value}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            </div>
            ...
          </form>
        </Card>
      );
    };
    
    export default Login;
    ```

- useContext(검색해서 확인)

### Portal

- 컴포넌트를 렌더링 할 때, 부모 컴포넌트의 DOM 외부에 존재하는 DOM 노드에 렌더링 할 수 있게 해줌

- Modal 컴포넌트를 만들어야 할 때 유용하게 사용
  
  - index.html
    
    ```html
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="backdrop-root"></div>
        <div id="overlay-root"></div>
        <div id="root"></div>
        ...
      </body>
    ```
  
  - ErrorModal.js
    
    ```js
    import React from "react";
    import ReactDOM from "react-dom";
    import Card from "./Card";
    import Button from "./Button";
    import classes from "./ErrorModal.module.css";
    
    const Backdrop = (props) => {
      return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
    };
    
    const ModalOverlay = (props) => {
      return (
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      );
    };
    
    const ErrorModal = (props) => {
      return (
        <React.Fragment>
          {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm} />,
            document.getElementById("backdrop-root")
          )}
          {ReactDOM.createPortal(
            <ModalOverlay
              title={props.title}
              message={props.message}
              onConfirm={props.onConfirm}
            />,
            document.getElementById("overlay-root")
          )}
        </React.Fragment>
      );
    };
    
    export default ErrorModal;
    ```

### Context API

- 리액트 내부적으로 state를 관리할 수 있도록 함

- prop을 이용하지 않고 공급자에 설정하여 모든 자식 컴포넌트에서 리스닝할 수 있음

- Provider - Consumer
  
  ```js
  // auth-context.js
  
  import React from "react";
  
  const AuthContext = React.createContext({
    isLoggedIn: false,
  });
  
  export default AuthContext;
  ```
  
  - 데이터를 보낼 범위에 Provider 설정
    
    ```js
    // App.js
    
    import React, { useState, useEffect } from "react";
    
    import Login from "./components/Login/Login";
    import Home from "./components/Home/Home";
    import MainHeader from "./components/MainHeader/MainHeader";
    import AuthContext from "./store/auth-context";
    
    ...
    
      return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
          <MainHeader onLogout={logoutHandler} />
          <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
          </main>
        </AuthContext.Provider>
      );
    
    export default App;
    ```
  
  - 데이터를 받을 범위에 Consumer 설정
    
    ```js
    // Navigation.js
    
    import React from "react";
    
    import AuthContext from "../../store/auth-context";
    import classes from "./Navigation.module.css";
    
    const Navigation = (props) => {
      return (
        <AuthContext.Consumer>
          {(ctx) => {
            return (
              <nav className={classes.nav}>
                <ul>
                  {ctx.isLoggedIn && (
                    <li>
                      <a href="/">Users</a>
                    </li>
                  )}
                  {ctx.isLoggedIn && (
                    <li>
                      <a href="/">Admin</a>
                    </li>
                  )}
                  {ctx.isLoggedIn && (
                    <li>
                      <button onClick={props.onLogout}>Logout</button>
                    </li>
                  )}
                </ul>
              </nav>
            );
          }}
        </AuthContext.Consumer>
      );
    };
    
    export default Navigation;
    ```

- useContext (Consumer 설정 외 다른 방법)
  
  ```js
  // Navigation.js
  
  import React, { useContext } from "react";
  
  import AuthContext from "../../store/auth-context";
  import classes from "./Navigation.module.css";
  
  const Navigation = (props) => {
    const ctx = useContext(AuthContext);
    return (
      ...
    );
  };
  
  export default Navigation;
  ```

### etc

- styling CSS
  
  ```js
  // CourseInput.js
  
  import React, { useState } from "react";
  import Button from "../../UI/Button/Button";
  import "./CourseInput.css";
  
  const CourseInput = (props) => {
    ...
    const [isValid, setIsValid] = useState(true);
  
    const formSubmitHandler = (event) => {
      ...
    };
  
    return (
      <form onSubmit={formSubmitHandler}>
        <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
          ...
        </div>
        ...
      </form>
    );
  };
  
  export default CourseInput;
  ```
  
  - `<div className={`form-control ${!isValid ? 'invalid' : ''}`}>`
    
    - isValid가 true이면 className="form-control"
    
    - isValid가 false이면 className="form-control invalid"

- media query
  
  ```css
  @media (조건) {
    스타일
  }
  ```

- CSS 모듈
  
  - css 클래스나 css 파일을 가지고 그 클래스 이름을 고유하게 바꿈
  
  - css 파일에서 설정한 css 스타일의 범위가 import하는 컴포넌트에 한정됨
  
  - CSS 모듈 사용하기
    
    - css 파일명은 보통 `클래스명.module.css`
      
      ```js
      // CourseInput.js
      
      import React, { useState } from "react";
      import Button from "../../UI/Button/Button";
      import styles from "./CourseInput.module.css";
      
      const CourseInput = (props) => {
        const [enteredValue, setEnteredValue] = useState("");
        const [isValid, setIsValid] = useState(true);
      
        const goalInputChangeHandler = (event) => {
          if (event.target.value.trim().length > 0) {
            setIsValid(true);
          }
          setEnteredValue(event.target.value);
        };
      
        const formSubmitHandler = (event) => {
          event.preventDefault();
          if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
          }
          props.onAddGoal(enteredValue);
        };
      
        return (
          <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
              <label>Course Goal</label>
              <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
          </form>
        );
      };
      
      export default CourseInput;
      ```
      
      - `import styles from "./CourseInput.module.css";`
      
      - 여러 개의 클래스를 사용할 때는 백틱(`) 사용
      
      - ``<div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>``

- ... syntax

- localStorage 사용하기
  
  - localStorage
    
    - 사용자의 로컬에 존재하는 저장소
    
    - 데이터를 브라우저에 반영구적으로 저장
    
    - 브라우저를 종료 후 재시작해도 데이터가 남아있음
  
  - 데이터 추가
    
    - `localStorage.setItem('데이터이름', '데이터');`
  
  - 데이터 조회
    
    - `localStorage.getItem('데이터이름');`
  
  - 데이터 삭제
    
    - `localStorage.removeItem('데이터이름');`
