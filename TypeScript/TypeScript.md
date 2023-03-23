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
      
      userName = 'Abc';
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
      
      hobbies = ['Sports', 'Cookies'];
      
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
        name: 'Abc',
        age: 22,
      };
      ```
  
  - 그 외
    
    - undefined / null / any
      
      ```typescript
      let un: undefined = undefined;
      let nu: null = null;
      // any
      // TypeScript로부터 빠져나오고 싶을 때 쓰는 타입
      // 거의 쓸 일 없음
      let an = [];
      ```
    
    - unknown
      
      - 변수가 어떤 타입인지 모르는 경우
        
        ```typescript
        let unk: unknown;
        
        // unk이 unknown이므로 에러가 남
        // let bbb = unk + 1;
        // if를 통해 type을 확인 후 원하는 코드 작성
        if (typeof unk === "number") {
          let bbb = a + 1;
        }
        
        // 에러
        // unk.toUpperCase()
        if (typeof unk === "string") {
          let bbb = a.toUpperCase();
        }
        ```
    
    - void
      
      - 아무것도 return 하지 않는 함수를 대상으로 사용
      
      - typescript가 자동으로 void로 인식
        
        ```typescript
        function hello(): void {
          console.log("x");
        }
        ```
    
    - never
      
      - 함수가 절대 return하지 않을 때 발생
      
      - 함수에서 예외가 발생하는 경우 등
        
        ```typescript
        function hello2(): never {
          throw new Error("XXX");
        }
        ```
      
      - type이 두 가지 일 수도 있는 상황에서도 발생 가능
        
        ```typescript
        function hello3(name: string | number) {
          if (typeof name === "number") {
            name + 1;
          } else if (typeof name === "string") {
            name.toUpperCase();
          } else {
            // 이 경우 type이 never임
            // 절대 실행돼서는 안됨
            name;
          }
        }
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
      let a = 'hello';
      a = 'bye';
      
      const player = {
        name: 'H',
      };
      player.name = 'C';
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
      let bb: string = 'i1';
      let cc: boolean[] = [true];
      ```
    
    - optional
      
      - ?를 이용하여 필수가 아님을 표시
        
        ```typescript
        const player2: {
          name: string;
          age?: number;
        } = {
          name: 'H',
        };
        
        // player2.age가 undefined일 수 있으므로
        // player2.age가 있는 경우에만 실행하도록 작성
        if (player2.age && player2.age < 10) {
        }
        ```

- readonly 속성
  
  - 수정하지 못하도록
    
    ```typescript
    type AAge = number;
    type NName = string;
    // PPlayer의 name을 수정하지 못하도록
    type PPlayer = {
      readonly name: NName;
      age?: AAge;
    };
    const pplayerMaker = (name: string): PPlayer => ({ name });
    const S = pplayerMaker("S");
    S.age = 22;
    ```
  
  - 수정하려고 하면 에러 발생
    
    ```typescript
    const numbers: readonly number[] = [1, 2, 3, 4];
    // 에러남
    // numbers.push(1)
    
    const names: readonly string[] = ["1", "2"];
    // push하는 경우 에러남
    // names.push("3")
    ```
    
    - `filter`나 `map`은 array를 바꾸지 않기 때문에 `에러나지 않음`

- Alias
  
  ```typescript
  type Player = {
    name: string;
    age?: number;
  };
  const name1: Player = {
    name: 'name1',
  };
  const name2: Player = {
    name: 'name2',
    age: 12,
  };
  ```
  
  - age에 Alias를 입력할 수도 있음
    
    - 과하게 재사용하는 것은 권장하지 않음
      
      ```typescript
      type Age = number;
      type Player2 = {
        name: string;
        age?: Age;
      };
      ```

- 함수의 return 값의 타입 지정하기
  
  ```typescript
  function playerMaker(name: string) {
    return {
      name: name,
    };
  }
  ```
  
  - 이 상태에서 age를 추가하려고 하면 아래와 같이 에러 발생
    
    ```typescript
    H.age = 12;
    ```
  
  - type Player2를 받고 싶은 경우 아래와 같이 사용
    
    ```typescript
    function playerMaker2(name: string): Player2 {
      return {
        name: name,
      };
    }
    const L = playerMaker2('L');
    L.age = 13;
    ```

- function이 아닌 const 방식으로 사용하기
  
  ```typescript
  const playerMaker3 = (name: string): Player2 => ({ name });
  const K = playerMaker3('K');
  K.age = 21;
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
          <label htmlFor='rebalance'>리밸런싱 주기</label>
          <div className='border rounded-xl'>
            <select
              name='rebalance'
              id='rebalance'
              onChange={rebalanceChangeHandler}
            >
              <option value='3m'>3개월</option>
              <option value='6m'>6개월</option>
              <option value='12m'>12개월</option>
            </select>
          </div>
        </div>
      );
      ```
