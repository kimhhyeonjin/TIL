# Form과 ModelForm

## Django Form

- Form은 Django의 유효성 검사 도구 중 하나로 외부의 악의적 공격 및 데이터 손상에 대한 중요한 방어 수단

- Django는 Form과 관련한 유효성 검사를 단순화하고 자동화할 수 있는 기능을 제공하여 개발자가 직접 작성하는 코드보다 더 안전하고 빠르게 수행하는 코드를 작성할 수 있음

- Django에서 처리하는 Form과 관련된 작업
  
  - 렌더링을 위한 데이터 준비 및 재구성
  
  - 데이터에 대한 HTML forms 생성
  
  - 클라이언트로부터 받은 데이터 수신 및 처리

### The Django Form Class

- Form Class 선언
  
  - Model과 마찬가지로 상속을 통해 선언
    
    - forms 라이브러리의 Form 클래스를 상속받음

- 앱 폴더에 `forms.py` 생성 후 class 선언
  
  ```python
  # articles/forms.py
  
  from django import forms
  
  class ArticleForm(forms.Form):
      title = forms.CharField(max_length=10)
      content = forms.CharField(widget=forms.Textarea)
  ```
  
  - form에는 model field와 달리 TextField가 존재하지 않음

- New 관련 업데이트
  
  - view 함수 업데이트
    
    ```python
    # articles/views.py
    
    from .forms import ArticleForm
    
    def new(request):
        form = ArticleForm()
        context = {
            'form' : form,
        }
        return render(request, 'articles/new.html', context)
    ```
  
  - 템플릿 업데이트
    
    ```html
    <!-- articles/new.html -->
    
    {% extends 'base.html' %}
    
    {% block content %}
      <h1>NEW</h1>
      <form action="{% url 'articles:create' %}" method="POST">
        {% csrf_token %}
        {{ form.as_p }}
        <button>글쓰기</button>
      </form>
      <hr>
      <a href="{% url 'articles:index' %}">[back]</a>
    {% endblock content %}
    ```

- Form rendering options
  
  - `<label>`, `<input>` 쌍에 대한 3가지 출력 옵션
  
  - as_p()
    
    - 각 필드가 `<p>` 태그로 감싸져서 렌더링
  
  - as_ul()
    
    - 각 필드가 `<li>` 태그로 감싸져서 렌더링
    
    - `<ul>` 태그는 직접 작성해야 함
  
  - as_table()
    
    - 각 필드가 테이블(`<tr>` 태그) 행으로 감싸져서 렌더링

# 