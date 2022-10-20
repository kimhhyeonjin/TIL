# JavaScript_기초

## JavaScript 시작하기

### JavaScript의 역사

- Web을 조작하기 위한 언어인만큼 Web Browser와도 깊은 연관관계가 있음

- 웹 브라우저와 스크립트 언어
  
  - 이전에는 웹 브라우저가 정적 웹 페이지를 단순히 보여주는 용도에 그침
  
  - 웹 브라우저에 탑재해서 웹 페이지를 동적으로 바꿔줄 Script 언어 개발 필요
    
    - Script 언어
      
      - 소스 코드를 기계어로 바꿔주는 컴파일러 없이 바로 실행 가능한 언어
      
      - 속도가 느리다는 단점
  
  - Netscape에서 Script언어인 Mocha 개발
  
  - 이후 LiveScript로 이름 변경 후 브라우저에 LiveScript를 해석해주는 Engine을 내장
  
  - 이후 당시 인기있던 JAVA의 명성에 기대보고자 JavaScript로 이름 변경

### JavaScript 실행환경 구성

- JavaScript 실행하는 방법
  
  - Web Browser로 실행하기
    
    - HTML 파일에 포함시키기
      
      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
        <script>
          console.log('hello, javascript')
        </script>
      </body>
      </html>
      ```
    
    - 외부 JavaScript 파일 사용하기
      
      ```js
      console.log('hello, javascript')
      ```
      
      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
      </head>
      <body>
      </body>
      <script src="hello.js"></script>
      </html>
      ```
    
    - Web Browser에서 바로 입력하기
  
  - Node.js로 실행하기

## JavaScript 기초 문법

### 코드 작성법

- 세미콜론
  
  - 자바스크립트는 세미콜론을 선택적으로 사용 가능
  
  - 세미콜론이 없으면 ASI에 의해 자동으로 세미콜론이 삽입됨
    
    - ASI(Automatic Semicolon Insertion, 자동 세미콜론 삽입 규칙)

- 들여쓰기와 코드 블럭
  
  - 2칸 들여쓰기 사용
  
  - 블럭(block)은 if, for, 함수에서 중괄호 내부를 의미
    
    - 중괄호 {} 를 사용해 코드 블럭을 구분

- 코드 스타일 가이드
  
  - 코딩 스타일의 핵심은 합의된 원칙과 일관성
  
  - 코드의 품질에 직결되는 중요한 요소
    
    - 코드의 가독성, 유지보수 또는 팀원과의 커뮤니케이션 등 개발 과정 전체에 영향을 끼침
  
  - JavaScript 코드 스타일 가이드
    
    - Airbnb JavaScript Style Guide
    
    - Google JavaScript Style Guide
    
    - standardJavaScript 등

- 주석
  
  - 한 줄 주석: `//`
  
  - 여러 줄 주석: `/* */`

### 변수와 식별자

- 식별자(identifier)
  
  - 식별자는 변수를 구분할 수 있는 변수명을 의미
  
  - 반드시 문자, 달러($) 또는 밑줄(_)로 시작
  
  - 대소문자를 구분하며, 클래스명 외에는 모두 소문자로 시작
  
  - 예약어 사용 불가능

- 식별자의 특징
  
  - 카멜 케이스(camelCase, lower-camel-case)
    
    - 변수, 객체, 함수에 사용
  
  - 파스칼 케이스(PascalCase, upper-camel-case)
    
    - 클래스, 생성자에 사용
  
  - 대문자 스네이크 케이스(SNAKE_CASE)
    
    - 상수(constants)에 사용
    
    - 상수: 개발자의 의도와 상관없이 변경될 가능성이 없는 값을 의미

- 선언, 할당, 초기화
  
  - 선언(Declaration)
    
    - 변수를 생성하는 행위 또는 시점
  
  - 할당(Assignment)
    
    - 선언된 변수에 값을 저장하는 행위 또는 시점
  
  - 초기화(Initialization)
    
    - 선언된 변수에 처음으로 값을 저장하는 행위 또는 시점

- 변수 선언 키워드
  
  - let
    
    - `재할당 가능, 재선언 불가능`
    
    - `블록 스코프` 지역 변수를 선언, 선언과 동시에 원하는 값을 초기화할 수 있음
      
      - 블록 스코프(block scope)
        
        - if, for, 함수 등의 중괄호 내부를 가리킴
        
        - 블록 스코프를 가지는 변수는 블록 바깥에서 접근 불가능
  
  - const
    
    - `재할당 불가능, 재선언 불가능`
    
    - 선언 시 반드시 초기값을 설정해야하며, 이후 값 변경이 불가능
    
    - let과 동일하게 `블록 스코프`를 가짐
  
  - var
    
    - `재할당 가능, 재선언 가능`
    
    - `함수 스코프(function scope)`를 가짐
    
    - '호이스팅'되는 특성으로 인해 예기치 못한 문제 발생 가능
      
      - 따라서 ES6 이후부터는 var 대신 const와 let을 사용하는 것을 권장
    
    - 변수 선언 시 var, const, let 키워드 중 하나를 사용하지 않으면 자동으로 var로 선언됨

- 호이스팅(hoisting)
  
  - 변수를 선언 이전에 참조할 수 있는 현상
  
  - 변수 선언 이전의 위치에서 접근 시 undefined를 반환

### 데이터 타입

- JavaScript의 데이터 타입은 크게 원시 타입(Primitive type)과 참조 타입(Reference type)으로 분류됨
  
  ![DataType](JavaScript_기초_assets/DataType.png)

- Number
  
  - 정수 또는 실수형 숫자를 표현하는 자료형
  
  - NaN
    
    - Not-A-Number
    
    - Number.isNaN('값')의 경우 '값'의 유형이 Number이고 '값'이 NaN이면 true, 아니면 false를 반환
    
    - NaN을 반환하는 경우
      
      - 숫자로서 읽을 수 없는 경우
      
      - 결과가 허수인 수학 계산식인 경우
      
      - 피연산자가 NaN인 경우
      
      - 정의할 수 없는 계산식인 경우
      
      - 문자열을 포함하면서 덧셈이 아닌 계산식인 경우

- String
  
  - 문자열을 표현하는 자료형
  
  - 작은 따옴표, 큰 따옴표 모두 가능
  
  - 곱셈, 나눗셈, 뺄셈은 안되지만 덧셈을 통해 문자열을 붙일 수 있음
  
  - 줄 바꿈
    
    - 따옴표 이용 시 `\n`를 이용
      
      ```js
      const word1 = "안녕 \n하세요"
      console.log(word1)
      ```
    
    - Template Literal 이용 시 백틱을 이용
      
      ```js
      const word2 = `안녕
      하세요`
      console.log(word2)
      
      const age = 10
      const message = `홍길동은 ${age}세입니다.`
      console.log(message)
      ```
      
      - Template Literal(템플릿 리터럴)
        
        - 내장된 표현식을 허용하는 문자열 작성 방식

- null과 undefined
  
  - 둘 다 값이 존재하지 않음을 표현하는 값
  
  - 대표적인 차이점
    
    - typeof 연산자를 통해 타입을 확인한 결과
      
      ```js
      console.log(typeof null)        // object
      console.log(typeof undefined)   // undefined
      ```
      
      - null이 원시 타입임에도 불구하고 object로 출력되는 것은 버그라고 생각하면 이해하기 쉬움

- null
  
  - 변수의 값이 없음을 의도적으로 표현할 때 사용하는 데이터 타입

- undefined
  
  - 변수 선언 이후 직접 값을 할당하지 않으면 자동으로 할당됨

- Boolean
  
  - true와 false
  
  - 참과 거짓을 표현하는 값
  
  - 조건문 또는 반복문에서 유용하게 사용
    
    - 조건문 또는 반복문에서 boolean이 아닌 데이터 타입은 자동 형변환 규칙에 따라 true 또는 false로 변환됨
      
      - 자동 형변환 (ToBoolean Conversions)
        
        | 데이터 타입    | false      | true      |
        |:---------:|:----------:|:---------:|
        | undefined | 항상 false   | X         |
        | null      | 항상 false   | X         |
        | Number    | 0, -0, NaN | 나머지 모든 경우 |
        | String    | 빈 문자열      | 나머지 모든 경우 |
        | Object    | X          | 항상 true   |

### 연산자

- 할당 연산자
  
  - 오른쪽에 있는 피연산자의 평가 결과를 왼쪽 피연산자에 할당하는 연산자
  
  - Increment 및 Decrement 연산자
    
    - Increment (++): 피연산자의 값을 1 증가시키는 연산자
    
    - Decrement (--): 피연산자의 값을 1 감소시키는 연산자
    
    - += 또는 -=와 같이 더 분명한 표현으로 적을 것을 권장

- 비교 연산자
  
  - 피연산자들(숫자, 문자, Boolean 등)을 비교하고 결과값을 boolean으로 반환하는 연산자
  
  - 문자열은 유니코드 값을 사용하며 표준 사전 순서를 기반으로 비교
    
    - 알파벳의 경우 알파벳 순서 상 후순위가 더 크고 소문자가 대문자보다 더 큼

- 동등 연산자 (==)
  
  - 두 피연산자가 같은 값으로 평가되는지 비교 후 boolean 값을 반환
  
  - 비교할 때 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교
    
    ```js
    const a = 1
    const b = '1'
    
    console.log(a == b)  // true
    console.log(a == true)  // true
    
    console.log(8 * null)  // 0
    console.log('5' - 1)  // 4
    console.log('5' + 1)  // 51
    console.log('five' * 2)  // NaN
    ```
    
    - 흔히 예상하는 결과와 다른 결과가 나오는 경우가 있으므로 특별한 경우를 제외하고는 사용하지 않는 것이 좋음

- 일치 연산자 (===)
  
  - 두 피연산자의 값과 타입이 모두 같은 경우 true를 반환
  
  - 같은 객체를 가리키거나, 같은 타입이면서 같은 값인지를 비교
    
    ```js
    const a = 1
    const b = '1'
    
    console.log(a === b)  // false
    console.log(a === Number(b))  // true
    ```

- 논리 연산자
  
  - 세 가지 논리 연산자로 구성
    
    - and : `&&`
    
    - or : `||`
    
    - not : `!`
  
  - 단축 평가 지원
    
    - false && true : `false`
    
    - true || false : `true`
    
    ```js
    console.log(true && false)  // false
    console.log(true && true)  // true
    
    console.log(false || true)  // true
    console.log(false || false)  // false
    
    console.log(!true)  // false
    
    console.log(1 && 0)  // 0
    console.log(0 && 1)  // 0
    console.log(2 && 4)  // 4
    
    console.log(1 || 0)  // 1
    console.log(0 || 1)  // 1
    console.log(2 || 4)  // 2
    ```

- 삼항 연산자 (Ternary Operator)
  
  - 3개의 피연산자를 사용하여 조건에 따라 값을 반환하는 연산자
  
  - `조건식 ? 참일 경우 실행할 표현식 : 거짓일 경우 실행할 표현식`
    
    ```js
    console.log(true ? 1 : 2)  // 1
    console.log(false ? 1 : 2)  // 2
    
    const result = Math.PI > 4 ? 'true' : 'false'
    console.log(result)  // false
    ```
