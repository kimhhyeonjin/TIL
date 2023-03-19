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