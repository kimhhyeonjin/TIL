# OOP(Object-Oriented Programming)
## 객체지향 프로그래밍(OOP)
### 객체 지향 프로그래밍이란?
> 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러 개의 독립된 **객체**들과 그 객체 간의 상호작용으로 파악하는 프로그래밍 방법
- 객체지향 프로그래밍이 필요한 이유
   > 현실 세계를 프로그램 설계에 반영 **(추상화)**
   ```python
   class Person:  # 클래스
       def __init__(self, name, gender):  # 매직 메서드
           self.name = name
           self.gender = gender

       def greeting(self):  # 메서드
           print(f'안녕하세요, {self.name}입니다.')

   jimin = Person('지민', '남')  # Person의 인스턴스 (그냥 인스턴스는 아님)
   jimin.greeting()

   jieun = Person('아이유', '여')
   jieun.greeting()
   ```
 - 객체지향의 장점 / 단점
   - 장점
     - 클래스 단위로 모듈화시켜 개발할 수 있으므로 많은 인원이 참여하는 대규모 소프트웨어 개발에 적합
     - 필요한 부분만 수정하기 쉽기 때문에 프로그램의 유지보수가 쉬움
   - 단점
     - 설계 시 많은 노력과 시간이 필요함 (다양한 객체들의 상호 작용 구조를 만들기 위해 많은 시간과 노력이 필요)
     - 실행 속도가 상대적으로 느림 (절차지향 프로그래밍이 컴퓨터의 처리구조와 비슷해서 실행 속도가 빠름)
### OOP 기초
 - 객체(object) : 클래스에서 정의한 것을 토대로 메모리(실제 저장공간)에 할당된 것으로 프로그램에서 사용되는 데이터 또는 식별자에 의해 참조되는 공간을 의미하며, 변수, 자료 구소, 함수 또는 메서드가 될 수 있다
   - 객체와 인스턴스 : 클래스로 만든 객체를 인스턴스라고 함
     > 123, 900, 5는 모두 int의 인스턴스
     >
     > 'hello', 'bye'는 모두 string의 인스턴스
     >
     > [232, 89, 1], []는 모두 list의 인스턴스
   - 클래스와 객체 : 클래스라는 개념이 있고 객체는 개념에 해당하는 실제 사례
   - 파이썬은 모든 것이 객체 (모든 것엔 속성과 행동이 존재)
 - 객체(object)의 특징 : 타입(type), 속성(attribute), 조작법(method)
   - 타입(type) : 어떤 연산자(operator)와 조작(method)이 가능한가?
     > 문자열 + 문자열 / 숫자 + 숫자
   - 속성(attribute) : 어떤 상태(데이터)를 가지는가?
   - 조작법(method) : 어떤 행위(함수)를 할 수 있는가?
### 객체와 클래스 문법
 - 기본 문법
   - `class MyClass:` : 클래스 정의
     - `Upper Camel Case(Pascal Case)` : 클래스 생성 시 단어의 첫글자를 대문자로 하는 것 ex) MyClass
     - `Snake Case` : 함수 생성 시 단어 사이에 _ 표시 ex) my_class
   - `my_instance = MyClass()` : 인스턴스 생성
   - `my_instance.my_method()` : 메서드 호출
   - `my_instance.my_attribute()` : 속성
 - 클래스와 인스턴스
   - 객체의 설계도(클래스)를 가지고 객체(인스턴스)를 생성
     ```python
     class Person:
         pass
     print(type(Person))  # <class 'type'>
     # 클래스의 타입은 type
     person1 = Person()

     print(isinstance(person1, Person))  # True
     # person1이 Person에서 생성된 인스턴스인지의 여부
     print(type(person1))  # <class '__main__.Person'>
     ```
     - 파이썬은 모든 것이 객체, 모든 객체는 특정 타입의 인스턴스
 - 객체 비교하기
   - ==
     - 변수가 참조하는 객체가 동등한(내용이 같은) 경우 True
     - 두 객체가 같아 보이지만 실제로 동일한 대상을 가리키고 있다고 확인해 주는 것은 아님
   - is
     - 두 변수가 동일한 객체를 가리키는 경우 True
     ```python
     a = [1, 2, 3]
     b = [1, 2, 3]

     print(a == b, a is b)  # True False

     a = [1, 2, 3]
     b = a

     print(a == b, a is b)  # True True
     ```
### OOP 속성
 - 속성 : 특정 데이터 타입/클래스의 객체들이 가지게 될 상태/데이터를 의미
 - 클래스 변수 / 인스턴스 변수가 존재
   ```python
   class Person:
       blood_color = 'red'  # 클래스 변수
       population = 100     # 클래스 변수

       def __init__(self, name):
           self.name = name  # 인스턴스 변수

   person1 = Person('지민')
   print(person1.name)  # 지민
   ```
 - 인스턴스 변수
   - 인스턴스가 개인적으로 가지고 있는 속성(attribute)
   - 각 인스턴스들의 고유한 변수
   - 생성자 메서드(__init__)에서 `self.<name>`으로 정의
   - 인스턴스가 생성된 이후 `<instance>.<name>`으로 접근 및 할당
     ```python
     class Person:
         
         def __init__(self, name):  # 인스턴스 변수 정의
             self.name = name
     john = Person('john')          # 인스턴스 변수 접근 및 할당
     print(john.name)  # john
     john.name = 'John Kim'         # 인스턴스 변수 접근 및 할당
     print(john.name)  # John Kim
     ```
 - 클래스 변수
   - 한 클래스의 모든 인스턴스가 공유하는 값을 의미
   - 같은 클래스의 인스턴스들은 같은 값을 갖게 됨
   - 클래스 선언 내부에서 정의
   - `<classname>.<name>`으로 접근 및 할당
     ```python
     class Circle():
         pi = 3.14  # 클래스 변수 정의

         def __init__(self, r):
             self.r = r  # 인스턴스 변수
     c1 = Circle(5)
     c2 = Circle(10)

     print(Circle.pi)  # 3.14
     print(c1.pi)      # 3.14
     print(c2.pi)      # 3.14
     # 인스턴스 변수가 없는 경우 클래스 변수에 있다면 그 값을 가져옴

     Circle.pi = 5     # 클래스 변수 변경
     print(Circle.pi)  # 5
     print(c1.pi)      # 5
     print(c2.pi)      # 5
     ```
   - 활용 예시 (사용자 수 계산하기)
     ```python
     class Person:
         count = 0
         # 인스턴스 변수 설정
         def __init__(self, name):
             self.name = name
             Person.count += 1
             # 클래스에서 사용하는 변수임을 확실하게 하기 위해 앞에 클래스명 붙임
             # 인스턴스가 생성될 때마다 클래서 변수가 늘어나도록 설정
     person1 = Person('아이유')
     person2 = Person('이찬혁')

     print(Person.count)
     ```
 - 클래스 변수와 인스턴스 변수
   - 클래스 변수를 변경할 때는 항상 `클래스.클래스변수` 형식으로 변경
     ```python
     class Circle():
         pi = 3.14  # 클래스 변수 정의

         def __init__(self, r):
             self.r = r  # 인스턴스 변수
    
     c1 = Circle(5)
     c2 = Circle(10)

     print(Circle.pi)  # 3.14
     print(c1.pi)      # 3.14
     print(c2.pi)      # 3.14
     # 인스턴스 변수가 없는 경우 클래스 변수에 있다면 그 값을 가져옴 

     c2.pi = 5         # 인스턴스 변수 변경
     print(Circle.pi)  # 3.14 (클래스 변수)
     print(c1.pi)      # 3.14 (클래스 변수)
     print(c2.pi)      # 5 (새로운 인스턴스)
     ```
### OOP 메서드
 - 메서드 : 특정 데이터 타입 / 클래스의 객체에 공통적으로 적용 가능한 행위(함수)
   ```python
   class Person:

       def talk(self):
           print('안녕')

       def eat(self, food):
           print(f'{food}를 냠냠')

   person1 = Person()
   person1.talk()       # 안녕
   person1.eat('피자')  # 피자를 냠냠
   person1.eat('치킨')  # 치킨를 냠냠
   ```
 - 메서드의 종류 : 인스턴스 메서드, 클래스 메서드, 정적 메서드
### 인스턴스 메서드
 - 인스턴스 메서드
   - 인스턴스 변수를 사용하거나, 인스턴스 변수에 값을 설정하는 메서드
   - 클래스 내부에 정의되는 메서드의 기본
   - 호출 시 첫번째 인자로 인스턴스 자기자신(self)이 전달됨
 - self
   - 인스턴스 자기자신
   - 파이썬에서 인스턴스 메서드는 호출 시 첫번째 인자로 인스턴스 자신이 전달되게 설계
 - 생성자(constructor) 메서드
   - 인스턴스 객체가 생성될 때 자동으로 호출되는 메서드
   - 인스턴스 변수들의 초기값을 설정
     - 인스턴스 생성
     - __init__메서드 자동 호출
     ```python
     class Person:
         def __init__(self):
             print('인스턴스가 생성되었습니다.')

     person1 = Person()  # 인스턴스가 생성되었습니다.


     class Person:
         def __init__(self, name):
             print(f'인스턴스가 생성되었습니다. {name}')

     person1 = Person('지민')  # 인스턴스가 생성되었습니다. 지민
     ```
 - 매직 메서드
   - Double underscore(__)가 있는 메서드는 특수한 동작을 위해 만들어진 메서드
   - 특정 상황에 자동으로 불리는 메서드
   - ex) `__str__(self)`: 프린트, `__len(self)__`, `__repr__(self)`, `__eq__(self, other)` 등
 - 소멸자(destructor) 메서드
   - 인스턴스 객체가 소멸(파괴)되기 직전에 호출되는 메서드
   ```python
   class Person:
       def __del__(self):
           print('인스턴스가 사라졌습니다.')

   person1 = Person()
   del person1  # 인스턴스가 사라졌습니다.
   ```

### 클래스 메서드
 - 클래스 메서드
   - 클래스가 사용할 메서드
   - @classmethod 데코레이터를 사용하여 정의
   - 호출 시 첫번째 인자로 클래스(cls)가 전달됨
   ```python
   class Person:
       count = 0  # 클래스 변수
       def __init__(self, name):  # 인스턴스 변수 설정
           self.name = name
           Person.count += 1

       @classmethod
       def number_of_population(cls):
           print(f'인구수는 {cls.count}입니다.')

   person1 = Person('아이유')
   person2 = Person('이찬혁')
   print(Person.count)  # 2
   ```
 - 데코레이터
   - 함수를 어떤 함수로 꾸며서 새로운 기능을 부여
   - @데코레이터(함수명) 형태로 함수 위에 작성
   - 순서대로 적용되기 때문에 작성 순서가 중요
 - 스태틱 메서드
   - 인스턴스 변수, 클래스 변수를 전혀 다루지 않는 메서드
   - 속성을 다루지 않고 단지 기능(행동)만을 하는 메서드를 정의할 때 사용
   - @staticmethod 데코레이터를 사용하여 정의
   - 일반 함수처럼 동작하지만 클래스의 이름공간에 귀속됨
   ```python
   class Person:
       count = 0  # 클래스 변수
       def __init__(self, name):  # 인스턴스 변수 설정
           self.name = name
           Person.count += 1

       @staticmethod
       def check_rich(money): # static은 cls나 self 사용하지 않음
           return money > 10000

   person1 = Person('아이유')
   person2 = Person('이찬혁')
   print(Person.check_rich(100000))  # True
   print(person1.check_rich(100000))  # True
   # static은 인스턴스와 클래스에서 모두 접근 가능
   ```
 - 인스턴스와 클래스 간의 이름공간(namespace)
   - 클래스를 정의하면 클래스에 해당하는 이름공간 생성
   - 인스턴스를 만들면 인스턴스 객체가 생성되고 이름공간 생성
   - 인스턴스에서 특정 속성에 접근하면 인스턴스-클래스 순으로 탐색
   ```python
   # Person 정의
   class Person:
       name = 'unknown'

       def talk(self):
        print(self.name)

   p1 = Person()
   p1.talk()  # unknown

   # p2 인스턴스 변수 설정 전/후
   p2 = Person()
   p2.talk()  # unknown
   p2.name = 'Kim'
   p2.talk()  # Kim

   print(Person.name)  # unknown
   print(p1.name)  # unknown
   print(p2.name)  # Kim
   ```

### 메서드 정리
 - 인스턴스 메서드
   - 호출한 인스턴스를 의미하는 **self** 매개변수를 통해 인스턴스를 조작
 - 클래스 메서드
   - 클래스를 의미하는 **cls** 매개변수를 통해 클래스를 조작
 - 스태틱 메서드
   - 클래스 변수나 인스턴스 변수를 사용하지 않는 경우에 사용
   - 객체 상태나 클래스 상태를 수정할 수 없음
 ```python
 class MyClass:
     def method(self):
         return 'instance method', self

     @classmethod
     def classmethod(cls):
         return 'class method', cls

     @staticmethod
     def staticmethod():
         return 'static method'
 ```
 - 인스턴스 메서드를 호출한 결과
   ```python
   obj = MyClass()  # 인스턴스

   print(obj.method())  # 권장되는 방법
   # ('instance method', <__main__.MyClass object at 0x0000028ECEEF4DC0>)
   print(MyClass.method(obj))
   # ('instance method', <__main__.MyClass object at 0x0000028ECEEF4DC0>)
   ```
 - 클래스 자체에서 각 메서드를 호출하는 경우
   - 인스턴스 메서드는 호출할 수 없음
   ```python
   print(MyClass.classmethod())
   # ('class method', <class '__main__.MyClass'>)
   print(MyClass.staticmethod())
   # static method
   MyClass.method()
   # TypeError: method() missing 1 required positional argument: 'self'
   # 인스턴스 메서드는 호출할 수 없음
   ```
   - 인스턴스는 클래스 메서드와 스태틱 메서드 모두 접근할 수 있음
   ```python
   print(obj.classmethod())
   # ('class method', <class '__main__.MyClass'>)
   print(MyClass.classmethod())
   # ('class method', <class '__main__.MyClass'>)
   print(obj.staticmethod())
   # static method
   ```

## 객체 지향의 핵심 개념
### 추상화

### 상속
 - 상속
 - 상속 관련 함수와 메서드
 - 상속 정리
 - 다중 상속
 - mro 메서드 (Method Resolution Order)

### 다형성
 - 다형성
 - 메서드 오버라이딩

### 캡슐화
 - 캡슐화
 - 접근제어자 종류
 - Public Member
 - Protected Member
 - Private Member
 - getter 메서드와 setter 메서드


## 에러와 예외
### 디버깅
 - 버그란?
 - 디버깅의 정의
 - 디버깅

### 에러와 예외
 - 문법 에러(Syntax Error)
 - 예외(Exception)
 - 파이썬 내장 예외

### 예외 처리
 - 예외 처리
 - 예외 처리 예시
 - 에러 메시지 처리(as)
 - 복수의 예외 처리 실습
 - 예외 처리 종합
 - 예외 처리 종합 예시