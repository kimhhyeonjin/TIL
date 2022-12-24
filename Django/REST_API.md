# REST API

### REST API

- API
  
  - Application Programming Interface
  
  - 애플리케이션과 프로그래밍으로 소통하는 방법
    
    - 개발자가 복잡한 기능을 보다 쉽게 만들 수 있도록 프로그래밍 언어로 제공되는 구성
  
  - 복잡한 코드를 추상화하여 대신 사용할 수 있는 몇 가지 더 쉬운 구문을 제공

- Web API
  
  - 웹 서버 또는 웹 브라우저를 위한 API
  
  - 현재 웹 개발은 모든 것을 직접 개발하기보다 여러 오픈 API를 활용하는 추세임
    
    - 오픈 API
      
      - 누구나 사용할 수 있도록 공개된 API
    
    - Youtube API, Naver Papago API, Kakao Map API 등
  
  - API는 다양한 타입의 데이터를 응답함
    
    - HTML, XML, JSON 등

- REST
  
  - Representational State Transfer
  
  - API Server를 개발하기 위한 일종의 소프트웨어 설계 방법론
  
  - REST의 기본 아이디어는 자원
    
    - 자원을 정의하고 자원에 대한 주소를 지정하는 전반적인 방법을 서술
      
      - 자원의 식별 / 자원의 행위 / 자원의 표현
  
  - REST 원리를 따르는 시스템을 `RESTful`하다고 부름

- REST에서 자원을 정의하고 주소를 지정하는 방법
  
  - 자원의 식별
    
    - ex) URI
  
  - 자원의 행위
    
    - ex) HTTP Method
  
  - 자원의 표현
    
    - 자원과 행위를 통해 궁극적으로 표현되는 결과물
    
    - ex) JSON으로 표현된 데이터

- JSON
  
  - lightweight data-interchange format
  
  - JavaScript의 표기법을 따른 단순 문자열
  
  - C 계열의 언어가 갖고 있는 자료구조로 쉽게 변환할 수 있는 key-value 형태의 구조를 갖고 있음
  
  - 사람이 읽고 쓰기 쉽고 기계가 파싱하고 만들어내기 쉽게 때문에 현재 API에서 가장 많이 사용하는 데이터타입