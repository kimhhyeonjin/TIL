# TypeScript

### TypeScript

- TypeScript
  
  - superset to JavaScript
    
    - 자바스크립트를 기반으로 하되 보다 더 확장된 프로그래밍 언어
    
    - adds static typing to JavaScript
      
      - 자바스크립트 자체는 dynamically typed
      
      - 코드에 타입을 추가할 수 있음
        
        ```ts
        function add(a: number, b: number) {
            return a + b;
          }
        
          const result = add(2, 5);
        
          console.log(result);
        ```

- TypeScript 설치
  
  ```bash
  npm install typescript
  ```
  
  ```bash
  npx tsc
  ```

### TypeScript 기초

- Type 지정하기
  
  - default는 any
  
  - Primitives: number, string, boolean
    
    - number: 숫자형, 실수도 가능
      
      ```typescript
      let age: number;
      
      age = 12;
      age = 12.1;
      
      // 바로 할당할 수도 있음
      let age2: number = 24;
      
      age2 = 12;
      ```
    
    - string: 문자열
      
      ```typescript
      let userName: string;
      
      userName = "Abc";
      ```
    
    - boolean: 논리형(불리언)
      
      ```typescript
      let isInstructor: boolean;
      
      isInstructor = true;
      ```
  
  - More complex types: arrays, objects
    
    - arrays
      
      ```typescript
      let hobbies: string[];
      
      hobbies = ["Sports", "Cookies"];
      
      let num_arr: number[];
      
      let students_att: boolean[];
      ```
    
    - objects
      
      ```typescript
      let person: {
        name: string;
        age: number;
      };
      
      person = {
        name: "Abc",
        age: 22,
      };
      ```
  
  - Function types, parameters
    
    - 객체를 여러 개 가진 배열 만들기
      
      ```typescript
      let people: {
        name: string;
        age: number;
      }[];
      ```

- Type 지정 방식
  
  - implicit type
    
    - type 지정하지 않아도 type을 추론함
      
      ```typescript
      let a = "hello";
      a = "bye";
      
      const player = {
        name: "H",
      };
      player.name = "C";
      ```
  
  - explicit type
    
    - type을 지정
      
      ```typescript
      let b: boolean = false;
      
      let c: number[] = [];
      // c.push("1") : type이 number가 아니므로 에러
      c.push(1);
      ```
  
  - type objects in explicit way
    
    - simple types
      
      ```typescript
      let aa: number = 1;
      let bb: string = "i1";
      let cc: boolean[] = [true];
      ```
    
    - optional
      
      - ?를 이용하여 필수가 아님을 표시
        
        ```typescript
        const player2: {
          name: string;
          age?: number;
        } = {
          name: "H",
        };
        
        // player2.age가 undefined일 수 있으므로
        // player2.age가 있는 경우에만 실행하도록 작성
        if (player2.age && player2.age < 10) {
        }
        ```

- Select onChange Event
  
  - Select onChange Event 값 가져오기
    
    - `event: React.ChangeEvent<HTMLSelectElement>`
      
      ```ts
        // 리밸런싱 주기 선택값 가져오기
        const rebalanceChangeHandler = (
          event: React.ChangeEvent<HTMLSelectElement>
        ) => {
          // text 값
          console.log(event.target.options[event.target.selectedIndex].text);
          // value 값
          console.log(event.target.value);
        };
      
        return (
          <div>
            <label htmlFor="rebalance">리밸런싱 주기</label>
            <div className="border rounded-xl">
              <select
                name="rebalance"
                id="rebalance"
                onChange={rebalanceChangeHandler}
              >
                <option value="3m">3개월</option>
                <option value="6m">6개월</option>
                <option value="12m">12개월</option>
              </select>
            </div>
          </div>
       );
      ```