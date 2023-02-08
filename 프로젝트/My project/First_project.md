# 첫 번째 프로젝트

## 시작

- 사용할 기술 스택: DRF + Vue.js

- 파트 나누기
  
  - 백엔드와 프론트를 함께 진행
  
  - 컨벤션

- ERD
  
  - (프로젝트 이후 추가)
    
    - 식별관계와 비식별관계
    
    - 식별관계
      
      - 부모 테이블의 기본키 또는 유니크 키를 자식 테이블이 자신의 기본키로 사용
    
    - 비식별관계
      
      - 부모 테이블의 기본키 또는 유니크 키를 자신의 기본키로 사용하지 않고 외래키로 사용

- Vue tree

## 코딩

### Django REST framework

- api를 통해 데이터를 받아와서 원하는 항목만 고른 후 fixture 생성

- models.py에 사용할 model 입력

- serializers.py에 JSON 파일 형태로 Vue로 보내줄 항목 작성

- urls.py에 정보를 받아올 때 사용할 url 주소 작성

- views.py에서는 필요한 조건의 데이터를 선택한 후 serializer를 이용하여 JSON 파일로 응답
  
  - 필요한 부분을 추출하는 알고리즘 작성 등

### Vue.js

- 컴포넌트 생성하기

- CORS 설정을 통해 Vue에서 Django에 요청을 보냈을 때 브라우저에서 막지 않도록 설정
  
  - Django에 요청을 보내 데이터가 제대로 받아와지는지 확인

- dj-rest-auth를 활용한 회원가입, 로그인, 로그아웃 기능 구현
  
  - 로그인에 성공한 경우 회원정보를 메인페이지에 표시하고 싶은데
    
    - 정보가 어떤 경우는 정상적으로 넘어오고 어떤 경우는 넘어오지 않음

- store.js
  
  - 중앙 저장소에 데이터를 모아서 상태를 관리
  
  - dispatch
    
    - store의 actions
    
    - state의 상태 변화를 제외한 나머지
  
  - commit
    
    - store의 mutations
    
    - mutations에서 state의 상태 변화

- 마이페이지 생성
  
  - created를 이용하여 함수를 실행하여 실행 결과를 html에 표현하려고 했음
    
    - 비동기 방식을 이용하였기 때문에 함수 실행 이전의 결과를 출력
      
      - setTimeout()과 nextTick을 이용하여 해결
        
        ```javascript
        export default {
          ...
          data() {
            return {
              is_user: false,
            }
          },
          ...
          methods: {
            isUser: function() {
              setTimeout(() => {
                if (this.article.username === this.$store.state.user.username) {
                  this.is_user = true
                }
              }, 40)
            },
          },
          ...
          mounted() {
            this.$nextTick(function () {
              this.isUser()
            })
          },
        }
        ```
        
        - 권장하는 방법은 아님

## 배포

### Django

- decouple
  
  - SECRET_KEY, DEBUG 등 따로 관리해야할 정보 처리
  
  - [django_decouple](https://pypi.org/project/python-decouple/) 참고하여 설치 및 settings.py 파일 변경
  
  - .env 파일 생성 후 따로 관리해야할 정보 입력
