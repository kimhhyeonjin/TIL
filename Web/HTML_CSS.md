# HTML & CSS

### 웹 사이트의 구성 요소

- HTML -> 구조

- CSS -> 표현

- Javascript -> 동작

## HTML

### HTML

- HTML : Hyper Text Markup Language

- Hyper Text : 하이퍼링크를 통해 사용자가 한 문서에서 다른 문서로 즉시 접근할 수 있는 텍스트

- Markup Language : 태그 등을 이용하여 문서나 데이터의 구조를 명시하는 언어

### HTML 기본구조

- html : 문서의 최상위(root) 요소

- head : 문서의 메타데이터 요소
  
  - 문서 제목, 인코딩, 스타일, 외부 파일 로딩 등
  
  - 일반적으로 브라우저에 나타나지 않는 내용

- body : 문서 본문 요소
  
  - 실제 화면 구성과 관련된 내용

- html창에서 !를 누르고 탭 버튼을 누르면 형식이 기본적으로 작성되어 뜸

- 시맨틱 태그
  
  - HTML 태그가 특정 목적, 역할 및 의미적 가치(semantic value)를 가지는 것
  
  - 대표적인 태그 목록
    
    - header : 문서 전체나 섹션의 헤더 (머리말 부분)
    
    - nav : 내비게이션
    
    - aside : 사이드에 위치한 공간, 메인 콘텐츠와 관련성이 적은 콘텐츠
    
    - section : 문서의 일반적인 구분, 컨텐츠의 그룹을 표현
    
    - article : 문서, 페이지, 사이트 안에서 독립적으로 구분되는 영역
    
    - footer : 문서 전체나 섹션의 푸터 (마지막 부분)

### HTML 문서 구조화

- 인라인 / 블록 요소
  
  - HTML 요소는 크게 인라인 / 블록 요소로 나눔
  
  - 인라인 요소는 글자처럼 취급
  
  - 블록 요소는 한 줄 모두 사용

- 텍스트 요소
  
  | 태그              | 설명                                  |
  |:---------------:|:-----------------------------------:|
  | `<a></a>`       | href 속성을 활용하여 다른 URL로 연결하는 하이퍼링크 생성 |
  | `<img>`         | src 속성을 활용하여 이미지 표현                 |
  | `<span></span>` | 의미 없는 인라인 컨테이너                      |

- 그룹 컨텐츠
  
  | 태그            | 설명                                                     |
  |:-------------:|:------------------------------------------------------:|
  | `<p></p>`     | 하나의 문단 (paragraph)                                     |
  | `<hr>`        | 문단 레벨 요소에서의 주제의 분리를 의미하며 수평선으로 표현됨 (A Horizontal Rule) |
  | `<ol></ol>`   | 순서가 있는 리스트 (ordered)                                   |
  | `<ul></ul>`   | 순서가 없는 리스트 (unordered)                                 |
  | `<div></div>` | 의미 없는 블록 레벨 컨테이너                                       |

- form
  
  - **`<form>`은 정보(데이터)를 서버에 제출하기 위해 사용하는 태그**
  
  - 기본 속성
    
    - action: form을 처리할 서버의 URL
    
    - method: form을 제출할 때 사용할 HTTP 메서드
    
    - enctype: method가 post인 경우 데이터의 유형
      
      - application/x-www-form-urlencoded: 기본값
      
      - multipart/form-data: 파일 전송 시

- input
  
  - 다양한 타입을 가지는 입력 데이터 유형과 위젯이 제공됨
  
  - label과 함께 사용하는 경우 input의 id 속성을, label의 for 속성을 활용하여 상호 연관시킴

## CSS

### CSS

- CSS : Cascading Style Sheets

- 스타일을 지정하기 위한 언어

- CSS 정의 방법
  
  - 인라인(inline)
    
    - 인라인을 쓰게 되면 실수가 잦아짐 (중복도 있을거고 찾기가 어려워서)
  
  - 내부 참조(embedding) - `<style>`
    
    - 내부 참조를 쓰게 되면 코드가 너무 길어짐
  
  - 외부 참조(link file) - 분리된 CSS 파일
    
    - 가장 많이 쓰는 방식

### CSS Selectors

- 선택자(Selector) 유형
  
  - 기본 선택자
    
    - 전체 선택자(*), 요소 선택자
    
    - 클래스 선택자(.), 아이디 선택자(#), 속성 선택자
  
  - 결합자(Combinators)
    
    - 자손 결합자( ), 자식 결합자(>)
    
    - 일반 형제 결합자(~), 인접 형제 결합자(+)

- CSS 적용 우선순위(cascading order)
  
  - 중요도(Importance) : 사용시 주의
    
    - !important
  
  - 우선 순위(Specificity)
    
    - 인라인 > id > class, 속성, pseudo-class > 요소, pseudo-element
  
  - CSS 파일 로딩 순서

- CSS 상속
  
  - CSS는 상속을 통해 부모 요소의 속성을 자식에게 상속
  
  - 속성(프로퍼티) 중에는 상속이 되는 것과 되지 않는 것들이 있음
  
  - 상속 되는 것
    
    > Text 관련 요소(font, color, text-align) 등
  
  - 상속 되지 않는 것
    
    > Box model 관련 요소(width, height, margin, padding, border, box-sizing, display)
    > 
    > position 관련 요소(position, top/right/bottom/left) 등

### CSS 기본 스타일

- 크기 단위
  
  - px(픽셀)
    
    - 모니터 해상도의 한 화소
    
    - 픽셀의 크기는 변하지 않기 때문에 고정적인 단위
  
  - %
    
    - 백분율 단위
    
    - 가변적인 레이아웃에서 자주 사용
  
  - em
    
    - 상속의 영향을 받음
    
    - 배수 단위, 요소에 지정된 사이즈에 상대적인 사이즈를 가짐
  
  - rem
    
    - 상속의 영향을 받지 않음
    
    - 최상위 요소인 html 사이즈를 기준으로 배수 단위를 가짐

- viewport
  
  - 웹 페이지를 방문한 유저에게 바로 보이게 되는 디바이스 화면
  
  - vw, vh, vmin, vmax 등
    
    - px와 vw의 비교
      
      - px: 브라우저 크기를 변경해도 그대로
      
      - vw: 브라우저의 크기에 따라 크기가 변함

### CSS Box model

- CSS 원칙
  
  - 모든 요소는 네모(박스모델)이고, 위에서부터 아래로, 왼쪽에서 오른쪽으로 쌓인다.(좌측 상단에 배치)
    
    - 하나의 박스는 네 영역으로 이루어짐
      
      - margin
        
        - 테두리 바깥의 외부 여백
      
      - border
        
        - 테두리 영역
      
      - padding
        
        - 테두리 안쪽의 내부 여백
        
        - 요소에 적용된 배경색, 이미지는 이 부분까지만 적용됨
      
      - content
        
        - 글이나 이미지 등 요소의 실제 내용
  
  - display에 따라 크기와 배치가 달라진다
    
    - block
      
      - 줄 바꿈이 일어나는 요소
      
      - 화면 크기 전체의 가로 폭 차지
      
      - 블록 레벨 요소 안에 인라인 레벨 요소가 들어갈 수 있음
      
      - div / ul, ol, li / p / hr / form 등
    
    - inline
      
      - 줄 바꿈이 일어나지 않는 요소
      
      - content 너비만큼 가로 폭을 차지
      
      - width, height, margin-top, margin-bottom을 지정할 수 없음
      
      - 상하 여백은 line-height로 지정
      
      - span / a / img / input, lable / b, em, i, strong 등
    
    - inline-block
      
      - inline처럼 한 줄에 표시할 수 있고, block처럼 width, height, margin 속성을 모두 지정할 수 있음
    
    - none
      
      - 해당 요소를 화면에 표시하지 않고, `공간조차 부여되지 않음`
      
      - visibility: hidden과의 비교
        
        - 해당 요소가 공간은 차지하나 화면에 표시만 하지 않음
  
  - position으로 위치의 기준을 변경

### CSS Position

- CSS position
  
  - 문서 상에서 요소의 위치를 지정
  
  - static : 모든 태그의 기본 값(기준 위치)
    
    - 일반적인 요소의 배치 순서에 따름(좌측 상단)
    
    - 부모 요소 내에서 배치될 때는 부모 요소의 위치를 기준으로 배치 됨
  
  - relative : 상대위치
    
    - 자기 자신의 static 위치를 기준으로 이동(normal flow 유지)
    
    - 레이아웃에서 요소가 차지하는 공간은 static일 때와 같음(normal position 대비 offset)
  
  - absolute : 절대위치
    
    - 요소를 일반적인 문서 흐름에서 제거 후 레이아웃에 공간을 차지하지 않음(normal flow에서 벗어남)
    
    - static이 아닌 가장 가까이 있는 부모/조상 요소를 기준으로 이동 (없는 경우 브라우저 화면 기준으로 이동/body tag를 기준으로 이동)
  
  - fixed : 고정위치
    
    - 요소를 일반적인 문서 흐름에서 제거 후 레이아웃에 공간을 차지하지 않음 (normal flow에서 벗어남)
    
    - 부모 요소와 관계없이 viewport를 기준으로 이동
    
    - 스크롤 시에도 항상 같은 곳에 위치함
  
  - sticky : 스크롤에 따라 static -> fixed로 변경
    
    - 속성을 적용한 박스는 평소에 문서 안에서 position: static 상태와 같이 일반적인 흐름에 따르지만 스크롤 위치가 임계점에 이르면 position: fixed와 같이 박스를 화면에 고정

### 가상클래스 선택자

- 참고: 겹치는 부분이 있으면 마지막에 작성한 css 코드가 실행됨
  
  ```css
  /* 방문하지 않은 링크 */
  a:link{
      color:black;
  }
  /* 방문한 링크 */
  a:visited{
      color:red;
  }
  /* hover한 경우 */
  a:hover{
      color:yellow;
  }
  /* 활성화 된 경우 */
  a:active{
      color:green;
  }
  /* focus 된 경우 */
  a:focus{
      color:white;
  }
  ```

### etc

- object-fit
  
  - 요소의 크기에 맞게 `img`태그와 `video`태그의 크기를 조정하는 속성
  
  - `fill`
    
    - 기본값
    
    - 요소의 크기에 맞게 꽉 채워 보여줌
    
    - 사진이나 영상이 늘어나거나 찌그러질 수 있음
  
  - `contain`
    
    - 요소의 가로나 세로 크기에 가능한 딱 맞추어 크기가 조정
    
    - 비율이 고정되어 남는 공간이 발생할 수 있음
  
  - `cover`
    
    - 요소의 가로나 세로 크기에 가능한 맞추어 크기가 조정
    
    - 가득 채울 때까지 확대되어 사진이나 영상이 잘릴 수 있음
  
  - `none`
    
    - 크기가 조정되지 않고 원본사이즈로 처리 딤
    
    - 크면 잘리고 작으면 남음

- transition
  
  - 속성을 서서히 변화시키는 속성
  
  - `transition: property timing-function duration delay |initial| inherit`
  
  - `property`
    
    - transition을 적용시킬 속성
  
  - `timing-function`
    
    - transition의 진행 속도
  
  - `duration`
    
    - transition의 총 시간
  
  - `delay`
    
    - transition의 시작을 연기
  
  - `initial`
    
    - 기본값 설정
  
  - `inherit`
    
    - 부모 요소의 속성값을 상속
  
  - 예시
    
    ```css
    transition: all 0.15s;
    ```

- text-decoration
  
  - `underline`
    
    ```css
    text-decoration: underline;
    ```
    
    - 밑줄