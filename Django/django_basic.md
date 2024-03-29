# 장고

## 장고 구조 이해하기

### MTV Design Pattern

- Design Pattern
  
  - 다수의 엔지니어들이 일반화된 패턴으로 소프트웨어 개발을 할 수 있도록 한 규칙
  
  - 커뮤니케이션의 효율성을 높이는 기법

- MTV Design Pattern
  
  - 장고에서의 디자인 패턴
  
  - Model
    
    - 데이터와 관련된 로직 관리
    
    - 응용프로그램의 데이터 구조를 정의하고 데이터베이스 기록을 관리
  
  - Template
    
    - 레이아웃 화면을 처리
    
    - 화면 상의 사용자 인터페이스 구조와 레이아웃을 정의
  
  - View
    
    - Model & Template과 관련한 로직을 처리해서 응답을 반환
    
    - 클라이언트의 요청에 대해 처리를 분기하는 역할

## 장고 프로젝트

### 가상환경 설정 및 활성화

- bash창을 열어 가상환경 설정
  
  - `python -m venv venv` : python -m venv 가상환경 폴더명

- 가상환경 활성화
  
  - `source venv/Script/activate` : 윈도우
  
  - `source venv/Bin/activate` : 맥
  
  - `pip list`를 통해 가상환경이 정상적으로 적용되었는지 확인

### 장고 설치

- `pip install django==3.2` : Django의 LTS 버전이 3.2

- 패키지 리스트 생성
  
  - `pip freeze > requirements.txt`

- 이미 작성된 패키지 리스트 설치
  
  - `pip install -r requirements.txt`

### 장고 프로젝트 생성

- `django-admin startproject config .`
  
  - django-admin startproject 프로젝트폴더명 [.]
  
  - 마지막에 .이 있는 경우 현재 폴더에 바로 생성
  
  - .이 없는 경우 프로젝트 폴더를 만들고 그 내부에 필요한 폴더와 파일 생성

### 장고 application 생성

- `python manage.py startapp articles`
  
  - python manage.py startapp application이름
  
  - application이름은 복수형으로

- `setting.py`에 방금 생성한 application 등록
  
  - `INSTALLED_APPS` 리스트 내부에 application 이름 등록

### base.html 생성

- base.html은 코드의 재사용성을 높이기 위한 파일

- 전체 폴더 아래 `templates` 폴더 생성

- `setting.py`의 `TEMPLATES`의 `DIRS`에 방금 생성한 폴더의 경로 등록
  
  - `'DIRS': [BASE_DIR / 'templates'],`
    
    - BASE_DIR : 전체 폴더 경로를 의미

- `templates` 폴더 내부에 base.html 파일 생성
  
  ```html
  <!-- cdn 주소 포함 -->
  <!-- DTL의 block tag 추가 -->
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  </head>
  <body>
      {% block content %}
      {% endblock content %}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </body>
  </html>
  ```

### url 분리

- application 폴더 내부에 `urls.py` 파일 생성

- `urls.py` 내부에 코드 작성
  
  ```python
  from django.urls import path  # path 함수 import
  from . import views
  
  # app_name 설정
  app_name = 'articles'
  # 빈 리스트 urlpattern 생성
  urlpatterns = [
  
  ]
  ```

- 프로젝트 폴더의 `urls.py`에 방금 생성한 `appication/urls.py` 등록
  
  ```python
  from django.contrib import admin
  from django.urls import path, include  # include 함수 import
  
  # include 함수를 이용해서 urlpattern에 등록
  urlpatterns = [
      path('admin/', admin.site.urls),
      path('articles/', include('articles.urls')),
  ]
  ```

### admin 계정 생성

- `python manage.py createsuperuser`
  
  - username과 password를 입력해 관리자 계정 생성

- 모델의 record를 보기 위해서는 `admin.py`에 등록 필요
  
  ```python
  from django.comtrib import admin
  from .models import 모델명
  
  admin.site.register(모델명)
  ```

### Model 작성

- Migrations
  
  - 모델에 대한 청사진을 만들고 이를 통해 테이블을 생성하는 일련의 과정
  
  - Django가 모델에 생긴 변화(필드 추가, 모델 삭제 등)를 DB에 반영하는 방법

- makemigrations
  
  - 테이블을 만들기 위한 설계도 생성
    
    ```bash
    $ python manage.py makemigrations
    ```

- migrate
  
  - makemigrations로 만든 설계도를 실제 db.sqlite3 DB 파일에 반영하는 과정
  
  - 모델과 DB의 동기화
    
    ```bash
    $ python manage.py migrate
    ```
