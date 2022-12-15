# Django Authentication

## The Django authentication system

### The Django authentication system

- Authentication
  
  - 인증 / 신원 확인
  
  - 사용자가 자신이 누구인지 확인하는 것

- Authorization
  
  - 권한 부여
  
  - 인증된 사용자가 수행할 수 있는 작업을 결정

- Django authentication system(인증 시스템)
  
  - 인증(Authentication)과 권한(Authorization) 부여를 함께 처리
  
  - 필수 구성은 settings.py의 INSTALLED_APPS에서 확인
    
    - `django.contrib.auth`
  
  - 사전 설정
    
    - accounts 앱 생성 및 등록
      
      ```bash
      $ python manage.py startapp accounts
      ```
      
      ```python
      # settings.py
      
      INSTALLED_APPS = [
          'articles',
          'accounts',
          ...
      ]
      ```
      
      - Django 내부적으로 accounts라는 이름으로 auth와 관련된 경로나 키워드를 사용하고 있기 때문에 되도록 앱 이름을 accounts로 지정하는 것을 권장
    
    - url 분리 및 매핑
      
      ```python
      urlpatterns = [
          ...
          path('accounts/', include('accounts.urls')),
      ]
      ```
      
      ```python
      # accounts/urls.py
      
      from django.urls import path
      from . import views
      
      app_name = 'accounts'
      urlpatterns = [
      
      ]
      ```

### User model 대체하기

- 기본 User Model을 필수적으로 Custom User model로 대체
  
  - 개발자들이 작성하는 프로젝트 중 일부는 django에서 제공하는 built-in User model의 기본 인증 요구사항이 적절하지 않을 수 있음
    
    - Djagno의 User Model은 기본적으로 username을 식별값으로 사용
    
    - 서비스에서 회원가입 시 username 대신 email을 식별값으로 사용하는 것이 더 적합한 사이트인 경우는 User Model의 사용이 적합하지 않음
  
  - 현재 프로젝트에서 사용할 User Model을 결정하는 AUTH_USER_MODEL 설정값으로 Default User Model을 재정의할 수 있음

- AUTH_USER_MODEL
  
  - 프로젝트에서 User를 나타낼 때 사용하는 모델
  
  - 프로젝트가 진행되는 동안(모델을 만들고 마이그레이션 한 후) 변경할 수 없음
    
    - 첫 번째 마이그레이션 전에 확정지어야 하는 값

    - 부득이한 경우

      - 데이터베이스 초기화 후 마이그레이션

        1. migrations 파일 삭제
           
           - migrations 폴더 및 `__init__.py`는 삭제하지 않음
        
        2. db.sqlite3 삭제
        
        3. migrations 진행
           
           - makemigrations
           
           - migrate
  
  - 기본값
    
    ```python
    # settings.py
    
    AUTH_USER_MODEL = 'auth.User'
    ```

- Custom User model로 대체하기
  
  - [공식문서](https://docs.djangoproject.com/en/3.2/topics/auth/customizing/#substituting-a-custom-user-model)
  
  - AbstractUser를 상속받는 커스텀 User 클래스 작성
  
  - 기존 User 클래스도 AbstractUser를 상속받기 때문에 커스텀 User클래스도 완전히 같은 모습을 가지게 됨
    
    ```python
    # accounts/models.py
    
    from django.contrib.auth.models import AbstractUser
    
    class User(AbstractUser):
        pass
    ```
  
  - Django 프로젝트에서 User를 나타내는데 사용하는 모델을 방금 생성한 커스텀 User 모델로 지정
    
    ```python
    # settings.py
    
    AUTH_USER_MODEL = 'accounts.User'
    ```
  
  - admin.py에 커스텀 User 모델을 등록
    
    - 기본 User 모델이 아니기 때문에 등록하지 않으면 admin site에 출력되지 않음
      
      ```python
      # accounts/admin.py
      
      from django.contrib import admin
      from django.contrib.auth.admin import UserAdmin
      from .models import User
      
      admin.site.register(User, UserAdmin)
      ```
