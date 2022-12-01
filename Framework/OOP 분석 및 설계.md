# OOP 분석 및 설계

## OOAD (Object Oriented Analysis and Design)

### S/W품질과 OOAD

- 품질
  
  - 모든 기업들이 목표로 하는 것

- 품질이 좋은 S/W의 조건
  
  - 분석이 분명하고 쉬워야 한다.
    
    - 분명하면서 이해가 잘 되어야 한다.
    
    - 복잡도가 낮아야 한다.
  
  - 설계가 탄탄해야 한다.
    
    - 유지보수가 효과적이어야 한다.
    
    - 테스트가 좋아야 한다.
    
    - 확장이 쉬워야 한다.
  
  - 분석 / 설계 / 구현에 빈틈이 없어야 함

- 품질이 좋은 S/W를 개발하기 위해서
  
  - 구성원들과 같은 청사진을 갖고, 정형화된 개발 프로세스를 통해 빠르게 개발을 해야 한다.
    
    - 개발을 하기 전 분석과 설계를 철저히 한다.
    
    - 분석과 설계에 miscommunication이 없도록 문서화한다.
    
    - Agile 개발 프로세스
      
      - 코드리뷰 / TDD / Clean Code 등

### OOAD

- OOAD(Object Oriented Analysis and Design)
  
  - 객체기반으로 개발되는 S/W에 대한 분석과 설계방법을 의미한다.
  
  - 분석 설계의 산출물
    
    - Diagram 기반 모델링 언어를 통한 문서화

- UML
  
  - 객체지향설계 표기법의 표준
  
  - UML Diagram
    
    - 분석 / 설계의 최종 결과물

## OOP

### 객체 지향 개발 방법이 필요한 이유

- 절차 지향 개발
  
  - 작은 규모의 개발
    
    - 개발하는데 불편함 없음
  
  - 큰 규모의 개발
    
    - 여러 용도로 쓰이는 함수가 많아짐으로써 소스코드 변경 시, 여러 곳에 영향을 끼쳐 유지보수가 어려움
    
    - 협업이 어려움
      
      - 역할 분배 / 기능추가로 인해 Side Effect 논의 필요

- 객체 지향 개발
  
  - 큰 규모의 개발
    
    - 독립적으로 수행하는 역할을 나누어 운영하는 시스템화 필요
    
    - 담당 내용의 일부가 바뀌더라도 다른 사람에게 영향을 받지 않음
    
    - 재사용성이 좋음

- 클래스의 등장
  
  - 객체 단위로 구현하기 시작
    
    - 클래스로 객체 구현
  
  - 장점
    
    - 유지보수성이 좋음
      
      - 연관된 클래스만 코드를 변경하면 된다.
    
    - 재사용성이 좋음
      
      - 만들어 둔 객체를 다른 곳에서도 사용할 수 있다.
      
      - 외부에서 만든 객체를 가져다 쓰기 편리하다.
    
    - 협업이 가능함
      
      - 절차지향에 비해 담당 파트를 정하기 편리하다.

### 클래스 구현

- Server Code와 Client Code
  
  - Server Code
    
    - Client의 요청을 받으면 처리해주는 코드
    
    - Library
  
  - Client Code
    
    - Server Code에게 일을 요청하는 코드
    
    - Library 사용자

### 객체 지향의 4대 특성

- 캡슐화
  
  - Server Code와 Client Code로 본 캡슐화
    
    - 데이터와 필드를 넣는다.
    
    - 허용하는 데이터 / 필드로만 데이터 제어 가능
    
    - 허용하지 않는 데이터 / 필드 접근 막음
  
  - 장점
    
    - Server Code가 허용한 방법대로 Client Code를 작성하도록 유도

- 상속
  
  - 상속
    
    - 부모가 가진 요소들을 자식들이 물려받아 사용할 수 있음
  
  - OOP 상속
    
    - 부모 자식 관계로 보기 어려움
    
    - 코드 중복 방지를 위해 공통적인 요소를 일반화시킴
  
  - 장점
    
    - 유지보수가 쉬움

- 추상화
  
  - 이해하기 쉽게 단순화

- 다형성 (polymorphism)
  
  - 한 객체가 다양한 타입을 담을 수 있는 형태

### 참고

- Overriding / Overloading
  
  - Overriding
    
    - Super Class 메서드 재정의
  
  - Overloading
    
    - 같은 이름의 메서드이지만 다른 Argument로 함수 구분

### Interface

- Interface
  
  - 클라이언트 사용자들이 서버에 대한 내용을 자세히 알지 못해도 사용할 수 있도록
  
  - 표준화시켜 개발하는 경우 어떠한 클라이언트라도 사용하기 편리함

- S/W Interface
  
  - 소프트웨어 내부에 접근하기 위한 공통적인 형태
  
  - 사용자는 interface만 알고 있으면 쉽게 함수 사용이 가능
  
  - 표준 규격을 만들어 놓고 표준 규격을 사용하는 Server 코드로 구현해 둠

## UML

- UML
  
  - Unified Modeling Language
  
  - SW Life Cycle에서의 요구사항 분석 / 설계 단계의 산출물
  
  - 객체지향 설계 표기법의 표준
  
  - SW 품질인증
  
  - 특징
    
    - 타 조직과의 의사소통
      
      - 문서를 통한 정확한 의사소통
    
    - 같은 조직 내 오해 방지
      
      - 획일화된 목표
    
    - 기획 산출물이 완료되었다는 증거

- UML 다이어그램 종류
  
  - Structure Diagram (구조적)
    
    - 시간에 상관없는 정적인 구조
    
    - Class Diagram
  
  - Behavior Diagram (행동)
    
    - 시간에 따라 변경이 일어나는 것을 표현하기 위함
    
    - Use Case Diagram
    
    - Activity
    
    - State Machine
    
    - Sequence Diagram

### SW Life Cycle

1. 요구사항 분석

2. 설계

3. 구현

4. 배포

5. 유지보수

### Class Diagram

- Class Diagram
  
  - 객체 설계 분석 시 가장 많이 사용되는 대표적인 다이어그램
  
  - 객체의 관계, 속성, 동작을 표현

- Class Diagram 관계
  
  - Association
    
    - 다른 클래스를 사용하는데 **참조를 유지**하는 방식
  
  - Dependency
    
    - 외부 클래스를 임시적으로 사용하는 관계
    
    - 클래스가 **참조를 유지하지 않음**
    
    - 대표적인 세 가지 형태
      
      - Local
      
      - Parameter
      
      - Factory
  
  - Composition
    
    - 함께 생성되며 함께 소멸되는 관계
    
    - 반드시 존재해야만 하는 관계
  
  - Aggregation
    
    - Association과 구분이 확실하지 않음
    
    - Aggregation을 Association이라고 불러도 됨
  
  - Generalization
    
    - 일반화
    
    - 공통적인 것을 추출하여 분류를 만들어 냄
  
  - Realization
    
    - 구현화
    
    - Interface를 실제로 구현

### Use Case Diagram

- Use Case Diagram
  
  - 고객 입장에서 요구 사항을 정리하는데 유용한 다이어그램
  
  - 요구사항을 개념화하는 목적
  
  - 어떻게 구현하는지 표현하지 않고, 어떤 것이 필요한지만 기술

### Sequence Diagram

- Sequence Diagram
  
  - 여러 객체들이 어떻게 상호작용을 하는지 나타내는 다이어그램

### Activity Diagram

- Activity Diagram
  
  - Flow Chart와 매우 유사한 다이어그램
    
    - 친숙도가 높고, 가독성이 좋음
  
  - 하나의 Activity를 도식화한 다이어그램


