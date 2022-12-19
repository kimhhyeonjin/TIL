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

## Authentication in Web requests

### Login

- AuthenticationForm
  
  - 로그인을 위한 built-in form
    
    - 로그인하고자하는 사용자 정보를 입력받음
    
    - 기본적으로 username과 password를 받아 데이터가 유효한지 검증
  
  - request가 첫 번째 인자

- `login()`
  
  - login(request, user, backend=None)
  
  - 인증된 사용자를 로그인시키는 로직으로 view 함수에서 사용됨
  
  - 현재 세션에 연결하려는 인증된 사용자가 있는 경우 사용
  
  - HttpRequest 객체와 User 객체가 필요

- 로그인 페이지 작성
  
  ```python
  # accounts/urls.py
  
  from django.urls import path
  from . import views
  
  app_name = 'accounts'
  urlpatterns = [
      path('login/', views.login, name='login'),
  ]
  ```
  
  ```html
  <!-- accounts/login.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <h1>LOGIN</h1>
    <form action="{% url 'accounts:login' %}" method="POST">
      {% csrf_token %}
      {{ form.as_p }}
      <input type="submit">
    </form>
  {% endblock content %}
  ```
  
  ```python
  # accounts/views.py
  
  from django.contrib.auth.forms import AuthenticationForm
  from django.contrib.auth import login as auth_login
  
  def login(request):
      if request.method == 'POST':
          form = AuthenticationForm(request, request.POST)
          # form = AuthenticationForm(request, data=request.POST)
          if form.is_valid():
              # 로그인
              # login(request, 유저정보)
              # login으로 받으면 함수 login과 겹치기 때문에 이름을 바꾸어 사용
              auth_login(request, form.get_user())
              # 단축평가를 이용하여 next뒤 값이 있는 경우 
              # 로그인 후 해당하는 곳으로 돌아감
              return redirect('articles:index')
      else:
          form = AuthenticationForm()
      context = {
          'form': form,
      }
      return render(request, 'accounts/login.html', context)
  ```
  
  - view 함수의 login과의 충돌을 방지하기 위해 import한 login 함수 이름을 auth_login으로 변경해서 사용

- get_user()
  
  - AuthenticationForm의 인스턴스 메서드
  
  - `유효성 검사를 통과했을 경우` 로그인 한 사용자 객체를 반환

### Authentication with User

- 현재 로그인 되어있는 유저 정보 출력하기

  - 템플릿에서 인증 관련 데이터를 출력하는 방법
    
    ```html
    <!-- base.html -->
    
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
      <div class="container">
        <h3>{{ user }}</h3>
        <a href="{% url 'accounts:login' %}">Login</a>
        <hr>
        {% block content %}
        {% endblock content %}
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </body>
    </html>
    ```
    
    - base.html에서 context 데이터 없이 user 변수를 사용할 수 있는 이유
      
      - settings.py의 context processors 설정값
        
        - settings.py -> TEMPLATES -> OPTIONS -> context_processors
      
      - context processors
        
        - 템플릿이 렌더링될 때 호출 가능한 context 데이터 목록
        
        - django에서 자주 사용하는 데이터 목록을 미리 템플릿에 로드해 둔 것
        
        - 작성된 context 데이터는 기본적으로 템플릿에서 사용가능한 변수로 포함
    
    - django.contrib.auth.context_processors.auth
      
      - 현재 로그인한 사용자를 나타내는 User 클래스의 인스턴스가 템플릿 변수 `{{ user }}`에 저장됨
      
      - 클라이언트가 로그인하지 않은 경우 AnonymousUser 클래스의 인스턴스로 생성
  
  ### Logout

  - `logout()`
    
    - logout(request)
    
    - HttpRequest 객체를 인자로 받고 반환 값이 없음
    
    - 사용자가 로그인하지 않은 경우 오류를 발생시키지 않음
      
      - `AnonymousUser`로 출력
    
    - 현재 요청에 대한 session data를 DB에서 삭제
    
    - 클라이언트의 쿠키에서도 session id를 삭제
    
    - 위의 두 과정은 다른 사람이 동일한 웹 브라우저를 사용하여 로그인하고, 이전 사용자의 세션 데이터에 접근하는 것을 방지하기 위함

- 로그아웃 페이지 작성
  
  ```python
  # accounts/urls.py
  
  ...
  urlpatterns = [
      ...
      path('logout/', views.logout, name='logout'),
  ]
  ```
  
  ```python
  # accounts/views.py
  
  from django.contrib.auth import logout as auth_logout
  
  def logout(request):
      auth_logout(request)
      return redirect('articles:index')
  ```
  
  ```html
  <!-- base.html -->
  
  <body>
    <div class="container">
      <h3>{{ user }}</h3>
      <a href="{% url 'accounts:login' %}">Login</a>
      <form action="{% url 'accounts:logout' %}" method="POST">
        {% csrf_token %}
        <input type="submit" value="Logout">
      </form>
      <hr>
      {% block content %}
      {% endblock content %}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  </body>
  ```

## Authentication with User

### 회원가입

- 회원가입은 User를 Create하는 것이며 UserCreationForm built-in form을 사용

- UserCreationForm
  
  - 주어진 username과 password로 권한이 없는 새 user를 생성하는 ModelForm
  
  - 3개의 필드를 가짐
    
    - username
    
    - password1
    
    - password2

- 회원가입 페이지 작성
  
  ```python
  # accounts/urls.py
  
  urlpatterns = [
      ...
      path('signup/', views.signup, name='signup'),
  ]
  ```
  
  ```html
  <!-- accounts/signup.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <h1>SIGNUP</h1>
    <form action="{% url 'accounts:signup' %}" method="POST">
      {% csrf_token %}
      {{ form.as_p }}
      <input type="submit">
    </form>
  {% endblock content %}
  ```
  
  ```python
  # accounts/views.py
  
  from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
  
  def signup(request):
      if request.method == 'POST':
          form = UserCreationForm(request.POST)
          if form.is_valid():
              form.save()
              return redirect('articles:index')
      else:
          form = UserCreationForm()
      context = {
          'form': form,
      }
      return render(request, 'accounts/signup.html', context)
  ```
  
  - views.py 로직을 위와 같이 작성하면 에러 남
    
    - 회원가입에 사용하는 `UserCreationForm`이 대체한 커스텀 유저 모델이 아닌 `기존 유저 모델로 인해 작성된 클래스이기 때문`

### Custom user와 Built-in auth forms

- AbstractBaseUser의 모든 subclass와 호환되는 forms
  
  - 아래의 Form 클래스는 기존의 User 모델을 참조하는 Form이 아니기 때문에 User 모델을 대체하더라도 커스텀하지 않아도 사용 가능
    
    - AuthenticationForm
    
    - SetPasswordForm
    
    - PasswordChangeForm
    
    - AdminPasswordChangeForm

- 커스텀 유저 모델을 사용하려면 다시 작성하거나 확장해야 하는 forms
  
  - UserCreationForm
  
  - UserChangeForm
  
  - 두 form 모두 Meta 클래스에서 `model = User`이므로 반드시 커스텀해야 함

- UserCreationForm() 커스텀하기
  
  ```python
  # accounts/forms.py
  
  from django.contrib.auth.forms import UserCreationForm, UserChangeForm
  from django.contrib.auth import get_user_model
  
  class CustomUserCreationForm(UserCreationForm):
  
      class Meta(UserCreationForm.Meta):
          # 장고에서는 유저모델을 참고할 때
          # User를 바로 import하는 것을 권장하지 않음
          model = get_user_model()
          # 기존의 필드에 email을 추가하고 싶은 경우
          fields = UserCreationForm.Meta.fields + ('email',)
  
  class CustomUserChangeForm(UserChangeForm):
  
      class Meta(UserChangeForm.Meta):
          model = get_user_model()
          fields = ('email', 'first_name', 'last_name',)
  ```
  
  - get_user_model()
    
    - 현재 프로젝트에서 활성화된 사용자 모델을 반환
    
    - Django에서는 User클래스를 직접 참조하는 대신 get_user_model()을 사용해 참조할 것을 권장

- views.py에서 UserCreationForm을 CustomCreationForm()으로 대체하기
  
  ```python
  # accounts/views.py
  
  from .forms import CustomUserCreationForm, CustomUserChangeForm
  
  def signup(request):
      if request.method == 'POST':
          # User를 auth.User에서 accounts.User로 바꾸었으므로 해당 사항을
          # forms.py에 입력하여 새로운 폼으로 받아와야 함
          # form = UserCreationForm(request.POST)
          form = CustomUserCreationForm(request.POST)
          if form.is_valid():
              user = form.save()
              # 회원가입 후 자동으로 로그인 상태 만들어주기
              auth_login(request, user)
              return redirect('articles:index')
      else:
          # form = UserCreationForm()
          form = CustomUserCreationForm()
      context = {
          'form': form,
      }
      return render(request, 'accounts/signup.html', context)
  ```
