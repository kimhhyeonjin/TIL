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
    
    - 명령형(절차형) 프로그래밍
      
      - 어떤 일을 어떻게 할 것인가

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

### JSX

- JSX
  
  - JavaScript XML
  
  - JavaScript에 XML을 추가한 문법
  
  - 리액트 팀이 개발하고 도입한 특수 구문