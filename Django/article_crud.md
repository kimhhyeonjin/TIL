# Article_CRUD

### 사전 준비

- model 생성
  
  - makemigrations와 migrate도 함께 실행
    
    ```python
    # articles/models.py
    
    from django.db import models
    
    class Article(models.Model):
        title = models.CharField(max_length=100)
        content = models.TextField()
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
    ```

- index  페이지 작성
  
  ```python
  # articles/urls.py
  
  from django.urls import path
  from . import views
  
  app_name = 'articles'
  urlpatterns = [
      path('', views.index, name='index'),
  ]
  ```
  
  ```python
  # articles/views.py
  
  from django.shortcuts import render
  
  def index(request):
      return render(request, 'articles/index.html')
  ```
  
  ```html
  <!-- templates/articles/index.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <h1>Articles</h1>
  {% endblock content %}
  ```

## Read

### Index page

- 전체 게시글 조회
  
  ```python
  # articles/views.py
  
  from django.shortcuts import render
  from .models import Article
  
  def index(request):
      articles = Article.objects.all()
      context = {
          'articles': articles,
      }
      return render(request, 'articles/index.html', context)
  ```
  
  ```html
  <!-- templates/articles/index.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <h1>Articles</h1>
    <hr>
    {% for article in articles %}
      <p>글 번호: {{ article.pk }}</p>
      <p>글 제목: {{ article.title }}</p>
      <p>글 내용: {{ article.content }}</p>
      <hr>
    {% endfor %}
  {% endblock content %}
  ```

## Create

- 두 개의 함수가 필요
  
  - 사용자의 입력을 받을 페이지를 렌더링하는 함수
  
  - 사용자가 입력한 데이터를 전송받아 DB에 저장하는 함수

### New

- 사용자의 입력을 받을 페이지를 렌더링하는 함수
  
  ```python
  # articles/urls.py
  
  urlpatterns = [
      ...
      path('new/', views.new, name='new'),
  ]
  ```
  
  ```python
  # articles/views.py
  
  def new(request):
      return render(request, 'articles/new.html')
  ```
  
  ```html
  <!-- templates/articles/new.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <h1>NEW</h1>
    <form action="#" method='GET'>
      {% comment %}
      label과 input을 묶을 때는 label의 for과 input의 id를 동일하게
      {% endcomment %}
      <label for="title">Title: </label>
      <input type="text"  name="title"><br>
      <label for="content">Content: </label>
      <textarea name="content"></textarea><br>
      <input type="submit">
    </form>
    <hr>
    <a href="{% url 'articles:index' %}">[back]</a>
  {% endblock content %}
  ```

- new 페이지로 이동할 수 있는 하이퍼링크 작성
  
  ```html
  <!-- templates/articles/index.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <h1>Articles</h1>
    <a href="{% url 'articles:index' %}">[back]</a>
    <hr>
    ...
  {% endblock content %}
  ```

### Create

- 사용자가 입력한 데이터를 전송받아 DB에 저장하는 함수

- 데이터 생성하기
  
  ```python
  # articles/urls.py
  
  urlpatterns = [
      ...
      path('create/', views.create, name='create'),
  ]
  ```
  
  ```python
  # articles/views.py
  
  def create(request):
      title = request.GET.get('title')
      content = request.GET.get('content')
  
      article = Article()
      article.title = title
      article.content = content
      article.save()
  
      return redirect('articles:index')
  ```

- 게시글 작성 후 DB에 저장하도록 new.html의 form action 설정
  
  ```html
  <!-- templates/articles/new.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <h1>NEW</h1>
    <form action="{% url 'articles:create' %}" method="GET">
      ...
    </form>
    <hr>
    <a href="{% url 'articles:index' %}">[back]</a>
  {% endblock content %}
  ```

- POST method 적용하기
  
  - POST method
    
    - 서버로 데이터를 전송할 때 사용
    
    - 서버에 변경사항을 만듦
    
    - 리소스를 생성/변경하기 위해 데이터를 HTTP body에 담아 전송
    
    - GET의 쿼리 스트링 파라미터와 다르게 URL로 보내지지 않음
    
    - CRUD에서 C, U, D 역할을 담당
  
  - new.html 코드 변경
    
    ```html
    <!-- templates/articles/new.html -->
    
    {% extends 'base.html' %}
    
    {% block content %}
      <h1>NEW</h1>
      <form action="{% url 'articles:create' %}" method="POST">
        {% csrf_token %}
        ...
      </form>
      <hr>
      <a href="{% url 'articles:index' %}">[back]</a>
    {% endblock content %}
    ```
    
    - CSRF
      
      - Cross-Site-Request-Forgery
      
      - 사용자가 자신의 의지와 무관하게 공격자가 의도한 행동을 하여 특정 웹페이지를 보안에 취약하게 하거나 수정, 삭제 등의 작업을 하게 만드는 공격 방법
    
    - CSRF 공격 방어
      
      - CSRF Token
      
      - 사용자의 데이터에 임의의 난수 값(token)을 부여해 매 요청마다 해당 난수 값을 포함시켜 전송시키도록 함
      
      - 이후 서버에서 요청받을 때마다 전달된 token 값이 유효한지 검증
  
  - create함수에서 데이터를 받아오는 방식 변경
    
    ```python
    # articles/views.py
    
    def create(request):
        title = request.POST.get('title')
        content = request.POST.get('content')
        ...
    ```

## Read

### Detail page

- 개별 게시글 상세 페이지 제작
  
  ```python
  # articles/urls.py
  
  urlpatterns = [
      ...
      path('detail/<article_id>', views.detail, name='detail'),
  ]
  ```
  
  ```python
  # articles/views.py
  
  def detail(request, article_id):
      article = Article.objects.get(id=article_id)
      context = {
          'article' : article,
      }
      return render(request, 'articles/detail.html', context)
  ```
  
  ```html
  <!-- templates/articles/detail.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <p>글 번호: {{ article.pk }}</p>
    <p>글 제목: {{ article.title }}</p>
    <p>글 내용: {{ article.content }}</p>
    <hr>
    <a href="{% url 'articles:index' %}">[목록보기]</a>
  {% endblock content %}
  ```
  
  ```html
  <!-- templates/articles/index.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    ...
    {% for article in articles %}
      <a href="{% url 'articles:detail' article.id %}">{{ article.title }}</a>
      <hr>
    {% endfor %}
  {% endblock content %}
  ```

- create함수 redirect 인자 변경 
  
  ```python
  # articles/views.py
  
  def create(request):
      ...
      return redirect('articles:detail', article.id)
  ```

## Update

- 두 개의 함수가 필요
  
  - 사용자의 입력을 받을 페이지를 렌더링하는 함수
  
  - 사용자가 입력한 데이터를 전송받아 DB에 저장하는 함수

### Edit

- 사용자의 입력을 받을 페이지를 렌더링하는 함수
  
  ```python
  # articles/urls.py
  
  urlpatterns = [
      ...
      path('edit/<article_id>', views.edit, name='edit'),
  ]
  ```
  
  ```python
  # articles/views.py
  
  def edit(request, article_id):
      article = Article.objects.get(id=article_id)
      context = {
          'article' : article,
      }
      return render(request, 'articles/edit.html', context)
  ```
  
  ```html
  <!-- templates/articles/edit.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <h1>글 수정하기</h1>
    <form action="#" method="POST">
      {% csrf_token %}
      <label for="submit">Title: </label>
      <input type="text" name="title" id="title" value="{{ article.title }}">
      <br>
      <label for="content">Content: </label>
      <textarea name="content" id="content" cols="30" rows="10">{{ article.content }}</textarea>
      <br>
      <button>글 수정</button>
    </form>
    <hr>
    <a href="{% url 'articles:index' %}">[목록보기]</a>
  {% endblock content %}  
  ```
  
  - html 태그의 value 속성을 사용해 기존에 입력되어있던 데이터를 출력
  
  - textarea 태그는 value 속성이 없으므로 태그 내부 값으로 작성해야 함

- Edit 페이지로 이동하기 위한 하이퍼링크 작성
  
  ```html
  <!-- templates/articles/detail.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <p>글 번호: {{ article.pk }}</p>
    <p>글 제목: {{ article.title }}</p>
    <p>글 내용: {{ article.content }}</p>
    <hr>
    <a href="{% url 'articles:edit' article.id %}">[수정하기]</a><br>
    ...
  {% endblock content %}
  ```

### Update

- 사용자가 입력한 데이터를 전송받아 DB에 저장하는 함수
  
  ```python
  # articles/urls.py
  
  urlpatterns = [
      ...
      path('update/<article_id>', views.update, name='update'),
  ]
  ```
  
  ```python
  # articles/views.py
  
  def update(request, article_id):
      article = Article.objects.get(id=article_id)
      article.title = request.POST.get('title')
      article.content = request.POST.get('content')
      article.save()   
      return redirect('articles:detail', article.id)html
  ```
  
  - 게시글 작성 후 DB에 저장하도록 edit.html의 form action 설정
  
  ```html
  <!-- templates/articles/edit.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    <h1>글 수정하기</h1>
    <form action="{% url 'articles:update' article.pk %}" method="POST">
      {% csrf_token %}
      ...
    </form>
    <hr>
    <a href="{% url 'articles:index' %}">[목록보기]</a>
  {% endblock content %}
  ```

## Delete

- 특정 글을 조회 후 삭제
  
  ```python
  # articles/urls.py
  
  urlpatterns = [
      ...
      path('delete/<article_id>', views.delete, name='delete'),
  ]
  ```
  
  ```python
  # articles/views.py
  
  def delete(request, article_id):
      if request.method == 'POST':
          article = Article.objects.get(id=article_id)
          article.delete()
      return redirect('articles:index')
  ```
  
  ```html
  <!-- templates/articles/detail.html -->
  
  {% extends 'base.html' %}
  
  {% block content %}
    ...
    <a href="{% url 'articles:index' %}">[목록보기]</a>
    <form action="{% url 'articles:delete' article.id %}" method="POST">
      {% csrf_token %}
      <input type="submit" value="[삭제하기]">
    </form>
  {% endblock content %}
  ```
  
  - DB에 영향을 미치기 때문에 POST method 사용 (form tag 이용)
