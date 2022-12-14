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

# 