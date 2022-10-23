### 데이터를 생성하는 3가지 방법

- DB에 저장 (3가지 방법)
  
  1. 인스턴스를 만들고 인스턴스에 데이터 입력 후 저장
     
     ```python
     article = Article()
     
     article.title = title
     
     article.content = content
     
     article.save()
     ```
  
  2. 인스턴스를 생성할 때 클래스 변수를 함께 입력
     
     ```python
     article = Article(title = title, content = content)
     
     article.save()
     ```
  
  3. QuerySet API 중 create() 메서드 활용
     
     ```python
     Article.objects.create(title = title, content = content)
     ```
  - 데이터가 저장되기 전 유효성 검사 과정을 거쳐야 하므로 save() 메서드가 사용되는 방법을 선택

### Widget

- Widget
  
  - Django의 HTML input element의 표현을 담당
  
  - Widgets는 반드시 form fields에 할당됨
  
  - 단순히 HTML 렌더링을 처리하는 것이며 유효성 검증과 아무런 관계가 없음

- Textarea 위젯 적용하기
  
  - form에는 model field와 달리 TextField가 존재하지 않음
  
  - Widget을 이용하여 해결
    
    ```python
    # articles/forms.py
    
    class ArticleForm(forms.Form):
        title = forms.CharField(max_length=10)
        content = forms.CharField(widget=forms.Textarea)
    ```

- 그 외에도 다양한 widget이 존재
  
  - RadioSelect
    
    ```python
    class ArticleForm(forms.Form):
        NATION_A = 'kr'
        NATION_B = 'ch'
        NATION_C = 'jp'
        NATIONS_CHOICES = [
            (NATION_A, '한국'),
            (NATION_B, '중국'),
            (NATION_C, '일본'),
        ]
        # 드랍다운 형식
        nation = forms.ChoiceField(choices=NATIONS_CHOICES)
        nation = forms.ChoiceField(choices=NATIONS_CHOICES, widget=forms.RadioSelect)
    ```
