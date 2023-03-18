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