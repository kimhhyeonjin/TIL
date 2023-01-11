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