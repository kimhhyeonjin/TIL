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

- 객체(object) : 클래스에서 정의한 것을 토대로 메모리

- (실제 저장공간)에 할당된 것으로 프로그램에서 사용되는 데이터 또는 식별자에 의해 참조되는 공간을 의미하며, 변수, 자료 구소, 함수 또는 메서드가 될 수 있다
  
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

- 메서드 : 특정 데이터 타입 / 클래스의 객체에 공통적으로 적용 가능한 행위(**함수**)
  
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
  
  - 클래스가 사용할 메서드에 해당
  
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

- 현실 세계를 프로그램 설계에 반영

- 함수, 변수, 클래스

- 예시
  
  ```python
  # 학생을 표현하기 위한 클래스 생성
  class Student:
      def __init__(self, name, age, gpa):
          self.name = name
          self.age = age
          self.gpa = gpa
  
      def talk(self):
          print(f'반갑습니다. {self.name}입니다.')
  
      def study(self):
          self.gpa += 0.1
  
  # 교수를 표현하기 위한 클래스 생성
  class Professor:
      def __init__(self, name, age, department):
          self.name = name
          self.age = age
          self.department = department
  
      def talk(self):
          print(f'반갑습니다. {self.name}입니다.')
  
      def teach(self):
          self.age += 1
  
  class Person:
      def __init__(self, name, age):
          self.name = name
          self.age = age
  
      def talk(self):
          print(f'반갑습니다. {self.name}입니다.')
  ```

### 상속

- 상속
  
  - 두 클래스 사이에 부모-자식 관계를 정립하는 것
  
  - 클래스는 상속이 가능함 (모든 파이썬 클래스는 object를 상속받음)
  
  - 하위 클래스는 상위 클래스에 정의된 속성, 행동, 관계 및 제약 조건을 모두 상속 받음
  
  - 부모 클래스의 속성, 메서드가 자식 클래스에 상속되므로 코드 재사용성이 높아짐
  
  ```python
  class ChildClass(ParentClass):
  
  # 상속을 통한 메서드 재사용
  class Person:
      def __init__(self, name, age):
          self.name = name
          self.age = age
  
      def talk(self):  # 메서드 재사용
          print(f'반갑습니다. {self.name}입니다.')
  
  class Professor(Person):
      def __init__(self, name, age, department):
          self.name = name
          self.age = age
          self.department = department
  
  class Student(Person):
      def __init__(self, name, age, gpa):
          self.name = name
          self.age = age
          self.gpa = gpa
  
  p1 = Professor('박교수', 49, '컴퓨터공학과')
  s1 = Student('김학생', 20, 3.5)
  
  # 부모 Person 클래스의 talk 메서드를 활용
  p1.talk()  # 반갑습니다. 박교수입니다.
  s1.talk()  # 반갑습니다. 김학생입니다.   
  ```

- 상속 관련 함수와 메서드
  
  - isinstance(object, classinfo) : object가 classinfo의 인스턴스이거나 subclass인 경우 True를 반환
  
  - issubclass(class, classinfo) : class가 classinfo의 subclass인 경우 True를 반환
  
  - super() : 자식 클래스에서 부모 클래스를 사용하고 싶은 경우
    
    ```python
    class Person:
        def __init__(self, name, age, number, email):
            self.name = name
            self.age = age
            self.number = number
            self.email = email
    
    class Student(Person):
        def __init__(self, name, age, number, email, student_id):
            # Person 클래스
            super().__init__(name, age, number, email)
            self.student_id = student_id
    ```

- 상속 정리
  
  - 파이썬의 모든 클래스는 object로부터 상속됨
  
  - 부모 클래스의 모든 요소(속성, 메서드)가 상속됨
  
  - super()를 통해 부모 클래스의 요소를 호출할 수 있음
  
  - 메서드 오버라이딩을 통해 자식 클래스에서 재정의 가능함
  
  - 상속관계에서 이름공간은 인스턴스, 자식 클래스, 부모 클래스 순으로 탐색

- 다중 상속
  
  - 두 개 이상의 클래스를 상속받는 경우
  
  - 상속받은 모든 클래스의 요소를 활용 가능함
  
  - 중복된 속성이나 메서드가 있는 경우 상속 순서에 의해 결정됨
  
  ```python
  class Person:
      def __init__(self, name):
          self.name = name
  
      def greeting(self):
          return f'안녕, {self.name}'
  
  class Mom(Person):
      gene = 'XX'
      def swim(self):
          return '엄마가 수영'
  
  class Dad(Person):
      gene = 'XY'
      def walk(self):
          return '아빠가 걷기'
  
  class FirstChild(Dad, Mom):
      def swim(self):
          return '첫째가 수영'
  
      def cry(self):
          return '첫째가 응애'
  
  baby1 = FirstChild('아가')
  print(baby1.cry())   # 첫째가 응애
  print(baby1.swim())  # 첫째가 수영
  print(baby1.walk())  # 아빠가 걷기
  print(baby1.gene)    # XY         # Dad를 먼저 썼기 때문
  
  class SecondChild(Mom, Dad):
      def walk(self):
          return '둘째가 걷기'
  
      def cry(self):
          return '둘째가 응애'
  
  baby2 = SecondChild('아가')
  print(baby2.cry())   # 둘째가 응애
  print(baby2.walk())  # 둘째가 걷기
  print(baby2.swim())  # 엄마가 수영
  print(baby2.gene)    # XX         # Mom을 먼저 썼기 때문
  ```

- mro 메서드 (Method Resolution Order)
  
  - 해당 인스턴스의 클래스가 어떤 부모 클래스를 가지는지 확인하는 메서드
    
    ```python
    print(FirstChild.mro())
    # [<class '__main__.FirstChild'>, <class '__main__.Dad'>, <class '__main__.Mom'>, <class '__main__.Person'>, <class 'object'>]
    print(SecondChild.mro())
    # [<class '__main__.SecondChild'>, <class '__main__.Mom'>, <class '__main__.Dad'>, <class '__main__.Person'>, <class 'object'>]
    ```

### 다형성

- 다형성(Polymorphism)
  
  - 동일한 메서드가 클래스에 따라 다르게 행동할 수 있음을 의미
  
  - 서로 다른 클래스에 속해있는 객체들이 동일한 메세지에 대해 다른 방식으로 응답할 수 있음

- 메서드 오버라이딩
  
  - 상속받은 메서드를 재정의
    
    - 클래스 상속 시 부모 클래스에서 정의한 메서드를 자식 클래스에서 변경
    
    - 부모 클래스의 메서드 이름과 기본 기능은 그대로 사용하지만 특정 기능을 바꾸고 싶을 때 사용
    
    - 상속받은 클래스에서 같은 이름의 메서드로 덮어씀
    
    - 부모 클래스의 메서드를 실행시키고 싶은 경우 super를 활용
    
    ```python
    class Person:
        def __init__(self, name):
            self.name = name
    
        def talk(self):
            print(f'반갑습니다. {self.name}입니다.')
    
    # 자식 클래스 - Professor
    class Professor(Person):
        def talk(self):
            print(f'{self.name}일세.')
    
    # 자식 클래스 - Student
    class Student(Person):
        def talk(self):
            super().talk()
            print(f'저는 학생입니다.')
    
    p1 = Professor('김교수')
    p1.talk()  # 김교수일세.
    
    s1 = Student('이학생')
    s1.talk()
    # 반갑습니다. 이학생입니다.
    # 저는 학생입니다.
    ```

### 캡슐화

- 캡슐화
  
  - 객체의 일부 구현 내용에 대해 외부로부터의 직접적인 액세스를 차단 (ex. 주민등록번호)
  
  - 파이썬에서 암묵적으로 존재하지만 언어적으로는 존재하지 않음

- 접근제어자 종류
  
  - Public Access Modifier
  
  - Protected Access Modifier
  
  - Private Access Modifier

- Public Member
  
  - 언더바 없이 시작하는 메서드나 속성
  
  - 어디서나 호출이 가능, 하위 클래스 override 허용
  
  - 일반적으로 작성되는 메서드와 속성의 대다수를 차지
  
  ```python
  class Person:
  
      def __init__(self, name, age):
          self.name = name
          self.age = age
  
  p1 = Person('김학생', 30)
  print(p1.name)  # 김학생
  print(p1.age)   # 30
  ```

- Protected Member
  
  - 언더바 1개로 시작하는 메서드나 속성
  
  - 암묵적 규칙에 의해 부모 클래스 내부와 자식 클래스에서만 호출 가능
  
  - 하위 클래스 override 허용
  
  ```python
  class Person:
      def __init__(self, name, age):
          self.name = name
          self._age = age
  
      def get_age(self):
          return self._age
  
  # 인스턴스를 만들고 get_age 메서드를 활용하여 호출할 수 있음
  p1 = Person('김학생', 30)
  print(p1.get_age())  # 30
  
  # _age에 직접 접근하여도 확인 가능
  # 파이썬에서는 암묵적으로 활용(거의 사용 안하는 듯)
  print(p1._age)  # 30
  ```

- Private Member
  
  - 언더바 2개로 시작하는 메서드나 속성
  
  - 본 클래스 내부에서만 사용이 가능
  
  - 하위클래스 상속 및 호출 불가능 (오류)
  
  - 외부 호출 불가능 (오류)
  
  ```python
  class Person:
      def __init__(self, name, age):
          self.name = name
          self.__age = age
  
      def get_age(self):
          return self.__age
  
  # 인스턴스를 만들고 get_age 메서드를 활용하여 호출할 수 있음
  p1 = Person('김학생', 30)
  print(p1.get_age())  # 30
  
  # __age에 직접 접근이 불가능
  print(p1.__age)  # AttributeError: 'Person' object has no attribute '__age'
  ```

- getter 메서드와 setter 메서드
  
  - 변수에 접근할 수 있는 메서드를 별도록 생성
    
    - getter 메서드 : 변수의 값을 읽는 메서드
      
      > @property 데코레이터 사용
    
    - setter 메서드 : 변수의 값을 설정하는 성격의 메서드
      
      > @변수.setter 사용
      
      ```python
      class Person:
      
          def __init__(self, age):
              self.age = age
      
          @property  # getter
          def age(self):
              return self._age
      
          @age.setter  # setter
          def age(self, new_age):
              if new_age <= 19:
                  raise ValueError('No Alcohol')
                  return
      
              self._age = new_age
      
      p1 = Person(20)
      print(p1.age)  # 20
      # _ 표시 없이 age만 입력해도 동작 (getter 메서드)
      p1.age = 33
      print(p1.age)  # 33
      
      p1.age = 19
      print(p1.age)  # ValueError: No Alcohol
      ```

## 에러와 예외

### 디버깅

- 버그 : 소프트웨어에서 발생하는 문제

- 디버깅 : 잘못된 프로그램을 수정하는 것

### 에러와 예외

- 문법 에러(Syntax Error) : 파일이름, 줄번호, ^ 문자를 통해 파이썬이 코드를 읽어 나갈 때 문제가 발생한 위치를 표현
  
  - Invalid syntax : 문법 오류
  
  - assign to literal : 잘못된 할당
  
  - EOL(End of Line) / EOF(End of File)

- 예외(Exception)
  
  - 실행 중에 감지되는 에러
  
  - 여러 타입으로 나타나고 타입이 메세지의 일부로 출력
  
  - 모든 내장 예외는 Exception Class를 상속받아 이루어짐
  
  - ZeroDivisionError : 0으로 나누고자 할 때 발생
  
  - NameError : namespace 상에 이름이 없는 경우
  
  - TypeError : 타입 불일치 / argument 누락 / argument 갯수 초과 / argument type 불일치
  
  - ValueError : 타입은 올바르나 값이 적절하지 않거나 없는 경우
  
  - IndexError : 인덱스가 존재하지 않거나 범위를 벗어나는 경우
  
  - KeyError : 해당 키가 존재하지 않는 경우
  
  - ModuleNotFoundError : 해당 Module이 존재하지 않는 경우
  
  - ImportError : Module은 있으나 존재하지 않는 클래스/함수를 가져오는 경우
  
  - KeyboardInterrupt : 임의로 프로그램을 종료하였을 때
  
  - IndentationError : Indentation이 적절하지 않은 경우

- 파이썬 내장 예외 (built-in-exceptions)

### 예외 처리

- 예외 처리
  
  - try
    
    - 코드를 실행
  
  - except
    
    - try문에서 예외가 발생하면 실행
  
  - else
    
    - try문에서 예외가 발생하지 않으면 실행
  
  - finally
    
    - 예외 발생 여부와 관계없이 항상 실행

- 예외 처리 예시
  
  ```
  try:
      try 명령문
  except 예외그룹-1 as 변수-1:
      예외처리 명령문 1
  except 예외그룹-2 as 변수-2:
      예외처리 명령문 2
  finally:  # 선택사항
      finally 명령문
  ```

- 복수의 예외 처리 실습
  
  - 100을 사용자가 입력한 정수로 나누고 출력하는 코드 작성
  
  ```python
  try:
      num = input('100으로 나눌 값을 입력하시오 : ')
      100 / int(num)
  except (ValueError, ZeroDivisionError):  # 발생 가능한 에러를 모두 명시
      print('제대로 입력하시오.')
  
  try:
      num = input('100으로 나눌 값을 입력하시오 : ')
      100 / int(num)
  except ValueError:  # 에러 별로 별도의 에러 처리
      print('숫자를 넣어주세요.')
  except ZeroDivisionError:
      print('0으로 나눌 수 없습니다.')
  except:
      print('에러가 발생하였습니다.')
  # 순차적으로 수행되므로 가장 작은 범주부터 예외 처리 해야 함
  ```

- 예외 처리 종합 예시
  
  > 파일을 열고 읽는 코드 작성
  > 
  > 파일을 열 때 파일이 없으면 '해당 파일이 없습니다' 출력 (except)
  > 
  > 파일이 있으면 파일 내용을 출력 (else)
  > 
  > 해당 파일 읽기 작업 종료 메세지 출력 (finally)
  
  ```python
  try:
      f = open('abc.txt')  # 파일 열기 시도
  except FileNotFoundError:  # 파일이 없는 경우
      print('해당 파일이 없습니다.')
  else:  # 파일이 있는 경우
      print('파일을 읽기 시작합니다.')
      print(f.read())
      print('파일을 모두 읽었습니다.')
      f.close()
  finally:  # 종료 메세지 출력
      print('파일 읽기를 종료합니다.')
  ```
