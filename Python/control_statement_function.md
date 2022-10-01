# 조건문_반복문_함수

## 조건문(Conditional Statement)

- 조건을 판단하여 해당 조건에 맞는 상황을 수행

### 복수 조건문 : elif 활용

### 중첩 조건문 : if문 안에 if문 사용(들여쓰기 유의)

### 조건 표현식

> true인 경우 값 if 조건 else false인 경우 값

```python
# 절대값 구하기
value = num if num >= 0 else -num

# 홀수 짝수 판단
num = 2
result = '홀수입니다.' if num % 2 else '짝수입니다.'
print(result)
```

## 반복문(Loop)

- 특정 조건을 만족하는 동안 같은 동작을 계속 반복

- 반복문의 종류 : while문, for문

### while문

- 조건식이 참인 경우 반복적으로 코드를 실행

- 무한 루프를 하지 않도록 종료 조건이 반드시 필요함

### for문

- 순회 가능한 객체의 요소를 모두 순회하며 코드를 실행

- 별도의 종료 조건이 필요하지 않음

- enumerate 순회
  
  - 인덱스와 객체를 쌍으로 담은 enumerate 객체 반환
  
  - (index, value) 형태의 tuple로 구성된 열거 객체를 반환
  
  ```python
  months = ['January', 'February', 'March', 'April', 'May', 'June']
  
  for idx, month in enumerate(months):
      print(idx, month)
      # 0 January
      # 1 February
      # 2 March
      # 3 April
      # 4 May
      # 5 June
  
  for idx, month in enumerate(months, start=1):
      print(idx, month)
      # 1 January
      # 2 February
      # 3 March
      # 4 April
      # 5 May
      # 6 June
  ```

- List Comprehension
  
  ```python
  [code for 변수 in iterable if 조건식]
  ```

- Dictionary Comprehension
  
  ```python
  {key:value for 변수 in iterable if 조건식}
  ```

### 반복문 제어

- break
  
  - 반복문을 종료 (그대로 나와버림)
  
  - 특정 조건에서 반복문을 종료시키기 위해 주로 사용

- continue
  
  - continue 이후의 코드 블록은 수행하지 않고, 다음 반복을 수행

- for-else
  
  - 끝까지 반복문을 실행한 이후에 else문 실행
  
  - break를 통해 중간에 종료되는 경우 else문은 실행되지 않음

- pass
  
  - 문법적으로 필요하지만 할 일이 없을 때 사용
  
  - 반복문이 아니어도 사용 가능

## 함수

### 함수

- Decomposition(분해) : 기능을 분해하고 재사용 가능하게

- Abstraction(추상화) : 복잡한 내용을 모르더라도 사용할 수 있도록

### 함수 기초

- 함수
  
  - 특정한 기능을 하는 코드의 조각
  
  - 특정 코드를 매번 다시 작성하지 않고 필요시에만 호출하여 간편히 사용

- 함수의 종류
  
  - 내장함수
  
  - 외장함수 : import문을 통해 사용하며, 외부 라이브러리에서 제공하는 함수
  
  - 사용자 정의 함수

- 함수의 기본 구조
  
  - 선언과 호출(define & call)
    
    - def 키워드 이용
    
    - 동작 후 return을 통해 결과값을 전달
  
  - 입력(Input)
    
    - 가변 인자(*args)
      
      - 여러 개의 인자를 하나의 parameter로 받아서 사용
      
      - 몇 개의 인자를 받을지 모르는 함수를 정의할 때 유용
    
    - 가변 키워드 인자(**kwargs)
      
      - 몇 개의 키워드 인자를 받을지 모르는 함수를 정의할 때 유용
      
      - 가변 인자와 가변 키워드 인자를 함께 사용할 수 있음
  
  - 문서화(Docstring)
  
  - 범위(Scope)
    
    - LEGB Rule
  
  - 결과값(Output)
    
    - **print와 return의 차이**
    
    - print를 사용하면 호출될 때마다 값을 출력
    
    - return을 사용하면 결과값을 얻음

### 함수 응용

- map
  
  - map(function, iterable)
    
    ```python
    n, m = map(int, input().split())
    ```

- filter
  
  - filter(function, iterable)
  
  - iterable의 모든 요소에 function을 적용하고 그 결과가 True인 것들을 filter object로 반환
    
    ```python
    def odd(n):
        return n % 2
    numbers = [1, 2, 3]
    result = filter(odd, numbers)
    print(result, type(result))
    # <filter object at 0x0000024C99194E80> <class 'filter'>
    print(list(result))  # [1, 3]
    # 리스트 형변환을 통해 결과 직접 확인
    ```

- zip
  
  - zip(*iterables)
  
  - 복수의 iterable을 모아 튜플을 원소로 하는 zip object를 반환
    
    ```python
    girls = ['jane', 'ashley']
    boys = ['justin', 'eric']
    pair = zip(girls, boys)
    print(pair, type(pair))
    # <zip object at 0x0000018EC6F3E740> <class 'zip'>
    print(list(pair))  # [('jane', 'justin'), ('ashley', 'eric')]
    ```

- lambda
  
  - `lambda[parameter] : 표현식`
  
  - return문을 가질 수 없음
  
  - 간편 조건문 외 조건문이나 반복문을 가질 수 없음
  
  - 함수를 정의해서 사용하는 것보다 간결하게 사용 가능
  
  - def를 사용할 수 없는 곳에서도 사용 가능

- 재귀함수
  
  - 자기 자신을 호출하는 함수
  
  - 무한한 호출을 목표로 하는 것이 아니며, 알고리즘 설계 및 구현에서 유용하게 활용
  
  - 1개 이상의 base case(종료되는 상황)가 존재하고, 수렴하도록 작성
  
  ```python
  def factorial(n):
      if n == 0 or n == 1:
          return 1
      else:
          return n * factorial(n-1)
  print(factorial(4))  # 24
  ```

- 재귀함수 주의사항
  
  - 재귀함수는 base case에 도달할 때까지 함수를 호출함
  
  - 메모리 스택이 넘치게 되면(stack overflow) 프로그램이 동작하지 않게 됨
  
  - 파이썬에서는 최대 재귀 깊이(maximum recursion depth)가 1,000번으로 호출 횟수가 이를 넘어가게 되면 Recursion Error 발생

- 반복문과 재귀함수 비교
  
  - 알고리즘 자체가 재귀적인 표현이 자연스러운 경우 재귀함수를 사용
  
  - 재귀 호출을 변수 사용을 줄여줄 수 있음
  
  - 재귀 호출은 입력 값이 커질수록 연산속도가 오래걸림