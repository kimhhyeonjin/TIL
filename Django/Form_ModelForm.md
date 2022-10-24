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

## Django ModelForm

- ModelForm Class
  
  - Model을 통해 Form Class를 만들 수 있는 helper class

- ModelForm 선언
  
  - forms 라이브러리에서 파생된 ModelForm 클래스를 상속받음
  
  - 정의한 ModelForm 클래스 안에 Meta 클래스를 선언
  
  - 어떤 모델을 기반으로 form을 작성할 것인지에 대한 정보를 Meta 클래스에 지정
    
    ```python
    # articles/forms.py
    
    from django import forms
    from .models import Article
    
    class ArticleForm(forms.ModelForm):
    
        class Meta:
            model = Article
            fields = '__all__'
    ```

- ModelForm에서의 Meta Class
  
  - ModelForm의 정보를 작성하는 곳
  
  - ModelForm을 사용할 경우 참조할 모델이 있어야 하는데, Meta class의 model 속성이 이를 구성함
  
  - Meta data
    
    - 데이터를 표현하기 위한 데이터
  
  - fields 속성에 `'__all__'`를 사용하여 모델의 모든 필드를 포함할 수 있음
  
  - exclude 속성을 사용하여 모델에서 포함하지 않을 필드를 지정할 수 있음
  
  - fields와 exclude를 함께 작성해도 되나 권장하지 않음

### ModelForm with view functions

#### Create

```python
# articles/views.py

def create(request):
    form = ArticleForm(request.POST)
    # 유효성 검사
    if form.is_valid():
        article = form.save()       # 저장 후 인스턴스를 반환
        return redirect('articles:detail', article.pk)
    # 에러가 발생하는 경우 에러메시지를 포함한 new.html로 돌아가도록
    context = {
        'form': form,
    }
    return render(request, 'articles/new.html', context)
```

- `is_valid()` method
  
  - 유효성 검사를 실행하고, 데이터가 유효한지 여부를 boolean으로 반환
  
  - is_valid()의 반환값이 False인 경우 form 인스턴스의 errors 속성에 유효성 검증을 실패한 원인이 딕셔너리 형태로 저장됨

- `save()` method
  
  - form 인스턴스에 바인딩 된 데이터를 통해 데이터베이스 객체를 만들고 저장
  
  - 키워드 인자 instance 여부를 통해 생성할 지, 수정할 지를 결정
    
    - instance가 제공되지 않은 경우는 생성
    
    - instance가 제공된 경우는 수정

#### Update

```python
# articles/views.py

def edit(request, article_id):
    article = Article.objects.get(id=article_id)
    form = ArticleForm(instance=article)
    context = {
        'article': article,
        'form': form,
    }
    return render(request, 'articles/edit.html', context)
```

```html
<!-- articles/eidt.html -->

{% extends 'base.html' %}

{% block content %}
  <h1>글 수정하기</h1>
  <form action="{% url 'articles:update' article.pk %}" method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <button>글 수정</button>
  </form>
  <hr>
  <a href="{% url 'articles:index' %}">[목록보기]</a>
{% endblock content %}
```

```python
# articles/views.py

def update(request, article_id):
    article = Article.objects.get(id=article_id)
    form = ArticleForm(request.POST, instance=article)
    if form.is_valid():
        article = form.save()
        return redirect('articles:detail', article.id)
    context = {
        'article': article,
        'form': form,
    }
    return render(request, 'articles/edit.html', context)
```

- Form과 ModelForm
  
  - 어느 것이 더 좋다기보다는 각자의 역할이 다름
  
  - Form
    
    - 사용자의 입력을 필요로 하며 **직접 입력 데이터가 DB 저장에 사용되지 않거나** 일부 데이터만 사용될 때
  
  - ModelForm
    
    - 사용자의 입력을 필요로 하며 **입력 받은 것을 그대로 DB 필드에 맞춰 저장**할 때
    
    - 데이터의 유효성 검사가 끝나면 데이터를 각각 어떤 레코드에 매핑해야할지 이미 알고 있기 때문에 곧바로 save() 호출이 가능

### Widgets 활용하기

```python
# articles/forms.py

class ArticleForm(forms.ModelForm):
    title = forms.CharField(
        label='제목',
        # 위젯은 유효성검사와 상관 없는 부분
        widget=forms.TextInput(
            attrs={
                'class': 'my-title form-control',
                'placeholder': 'Enter the title',
                # 길이를 정하더라도 유효성검사를 하지는 않음
                'maxlength': 10,
            }
        ),
    )

    content = forms.CharField(
        label='내용',
        widget=forms.Textarea(
            attrs={
                'class': 'my-content form-control',
                'placeholder': 'Enter the content',
                'rows': 5,
                'cols': 50,
            }
        ),
        error_messages={
            'required': 'Please enter your content',
        }
    )

    class Meta:
        model = Article
        fields = '__all__'
```