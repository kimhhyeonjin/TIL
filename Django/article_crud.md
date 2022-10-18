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
