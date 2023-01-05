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

## Response JSON

### 서버가 응답하는 것

- 서버가 응답하는 것
  
  - 지금까지 Django로 작성한 서버는 사용자에게 페이지(html)만을 응답하고 있었지만 페이지 뿐 아니라 다양한 데이터 타입 응답 가능
    
    - html, JSON 데이터

### Response

- JSON 데이터 응답하기
  
  - JsonResponse()를 사용한 JSON 응답
    
    - Django가 기본적으로 제공하는 JsonResponse 객체를 활용하여 Python 데이터 타입을 손쉽게 JSON으로 변환하여 응답
      
      ```python
      from django.http.response import JsonResponse
      ```
    
    - JsonResponse()
      
      - JSON-encoded response를 만드는 클래스
      
      - safe parameter
        
        - 디폴트 값은 True
        
        - False로 설정 시 모든 타입의 객체를 serialize 할 수 있음

- Django Serializer를 사용한 JSON 응답
  
  - Django의 내장 HttpResponse()를 활용한 JSON 응답
  
  - 위의 방법은 JSON의 모든 필드를 전부 작성해야 했지만 이 방법은 그렇지 않음
  
  - Serialization
    
    - 직렬화
    
    - `데이터 구조나 객체 상태를` 동일하거나 다른 컴퓨터 환경에 저장하고 `나중에 재구성할 수 있는 포맷으로 변환하는 과정`
    
    - 변환 포맷은 대표적으로 json, xml, yaml이 있으며 json이 가장 보편적으로 사용됨

- Django REST framework (DRF)
  
  - Django에서 RESTful API 서버를 쉽게 구축할 수 있도록 도와주는 오픈소스 라이브러리
  
  - Web API 구축을 위한 강력한 tool kit을 제공
  
  - REST framework를 작성하기 위한 여러 기능을 제공
  
  - DRF의 serializer는 Django의 Form 및 ModelForm 클래스와 매우 유사하게 작동
  
  - [DRF참고하기](https://www.django-rest-framework.org/)

## Django REST framework - Single Model

- [Postman](https://www.postman.com/downloads)
  
  - API를 구축하고 사용하기 위한 플랫폼
  
  - API를 빠르게 만들 수 있는 여러 도구 및 기능을 제공

### ModelSerializer

- ModelSerializer
  
  - ModelSerializer 클래스는 모델 필드에 해당하는 필드가 있는 Serializer 클래스를 자동으로 만들 수 있는 shortcut 제공
    
    - Model 정보에 맞춰 자동으로 필드 생성
    
    - serializer에 대한 유효성 검사기를 자동으로 생성
    
    - `.create()` 및 `.update()`의 간단한 기본 구현이 포함됨

- ModelSerializer 작성
  
  - serializers.py의 위치나 파일명은 자유롭게 작성 가능
    
    ```python
    # articles/serializers.py
    
    from rest_framework import serializers
    from .models import Article
    
    class ArticleListSerializer(serializers.ModelSerializer):
    
        class Meta:
            model = Article
            fields = ('id', 'title', 'content',)
    ```

- `many` option
  
  - 단일 객체 인스턴스 대신 QuerySet 또는 객체 목록을 serialize 하려면 many=True를 작성해야 함