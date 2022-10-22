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