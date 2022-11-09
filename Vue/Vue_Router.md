# Vue Router

## UX & UI

### UX & UI

- UX (User Experience)
  
  - 유저와 가장 가까이에 있는 분야, 데이터를 기반으로 유저를 조사하고 분석해서 개발자, 디자이너가 이해할 수 있게 소통
  
  - 좋은 UX
    
    - 사람들의 마음과 생각을 이해하고 정리해서 제품에 녹여내는 과정 필요
    
    - 유저 리서치, 데이터 설계 및 정제, 유저 시나리오, 프로토타입 설계 등이 필요

- UI (User Interface)
  
  - 유저에게 보여지는 화면을 디자인
  
  - 좋은 UI
    
    - 사용자가 보다 쉽게 편리하게 사용할 수 있도록 하는 부분까지 고려
    
    - 통일된 디자인을 위한 디자인 시스템, 소통을 위한 중간 산출물, 프로토타입 등이 필요

### Prototyping

- Software prototyping
  
  - 애플리케이션의 프로토타입을 만드는 것
  
  - 개발 중인 소프트웨어 프로그램의 완성되기 전 버전을 만드는 것
  
  - 중간마다 현재 상태를 체크하는 과정

- Figma
  
  - 70% 이상의 Prototyping tool 시장 점유율
  
  - 협업에 중점을 두면서 UI/UX 설계에 초점을 맞춤
    
    - 실시간으로 팀원들이 협업할 수 있는 기능을 제공
  
  - 웹 기반 시스템을 가짐(웹 환경에서 동작)
    
    - 매우 가벼운 환경에서 실행가능, 모든 작업 내역에 웹에 저장됨
  
  - 직관적으로 다양한 디자인 툴 제공
  
  - 대부분의 기능을 무료로 사용할 수 있음

## Vue Router

### Routing

- Routing
  
  - 네트워크에서 경로를 선택하는 프로세스
  
  - 웹 서비스에서의 라우팅
    
    - 유저가 방문한 URL에 대해 적절한 결과를 응답하는 것

- Routing in SSR
  
  - URL로 요청이 들어오면 응답으로 완성된 HTML 제공
  
  - 서버가 모든 라우팅을 통제
  
  - 즉, Routing(URL)에 대한 결정권을 서버가 가짐

- Routing in SPA / CSR
  
  - 서버는 하나의 HTML만을 제공
  
  - 이후의 모든 동작은 하나의 HTML 문서 위에서 JavaScript 코드를 활용
  
  - 페이지 간의 이동이 없으므로 하나의 URL만 가짐
  
  - Routing이 없다면
    
    - 유저가 URL을 통한 페이지의 변화를 감지할 수 없음
    
    - 페이지가 무엇을 렌더링 중인지에 대한 상태를 알 수 없음
      
      - 새로고침 시 처음 페이지로 돌아감
      
      - 링크를 공유할 시 처음 페이지만 공유 가능
    
    - 브라우저의 뒤로 가기 기능을 사용할 수 없음

### Vue Router

- Vue의 공식 라우터

- 라우트(routes)에 컴포넌트를 매핑한 후, 어떤 URL에서 렌더링할지 알려줌
  
  - SPA를 MPA처럼 URL을 이동하면서 사용 가능
    
    - MPA (Multiple Page Application)
      
      - 여러 개의 페이지로 구성된 애플리케이션
      
      - SSR 방식으로 렌더링
  
  - SPA의 단점 중 하나인 URL이 변경되지 않는 부분을 해결

- Vue Router 실행하기
  
  ```bash
  // Vue 프로젝트 생성 및 디렉토리 이동 후
  $ vue add router  // Vue CLI를 통해 router plugin 적용
  ```
  
  - History mode
    
    - 브라우저의 History API를 활용한 방식
      
      - 새로고침 없이 URL 이동 기록을 남길 수 있음 (/)
    
    - History mode를 사용하지 않으면 Default 값이 hash mode로 설정됨 (#)

- router-link
  
  - URL을 이동시킴(a태그와 비슷한 기능)
    
    - routes에 등록된 컴포넌트와 매핑됨
    
    - 히스토리 모드에서 router-link는 클릭 이벤트를 차단하여 a태그와 달리 브라우저가 페이지를 다시 로드하지 않도록 함
  
  - 목표 경로는 to속성으로 지정됨
  
  - 기능에 맞게 HTML에서 a태그로 렌더링되지만 필요에 따라 다른 태그로 바꿀 수 있음

- router-view
  
  - 주어진 URL에 대해 일치하는 컴포넌트를 렌더링하는 컴포넌트
  
  - 실제 컴포넌트가 DOM에 부착되어 보이는 자리를 의미
  
  - router-link를 클릭하면 routes에 매핑된 컴포넌트를 렌더링

- src/router/index.js
  
  - 라우터에 관련된 정보 및 설정이 작성되는 곳
  
  - routes에 URL과 컴포넌트를 매핑

- src/Views
  
  - router-view에 들어갈 컴포넌트 작성
  
  - 폴더별 컴포넌트 배치 (권장사항)
    
    - views/
      
      - routes에 매핑되는 컴포넌트를 모아두는 폴더
      
      - 다른 컴포넌트와 구분하기 위해 View로 끝나도록 만드는 것을 권장
    
    - components/
      
      - routes에 매핑된 컴포넌트의 하위 컴포넌트를 모아두는 폴더

### Vue Router 실습

- 주소를 이동하는 2가지 방법
  
  - 선언적 방식 네비게이션
    
    - router-link의 to속성으로 주소 전달
      
      - routes에 등록된 주소와 매핑된 컴포넌트로 이동
        
        - App.vue
          
          ```html
          <template>
            <div id="app">
              <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link> |
              </nav>
              <router-view/>
            </div>
          </template>
          ```
    
    - Named Routes를 이용하는 경우
      
      - 동적인 값을 사용하기 때문에 v-bind를 사용해야 정상적으로 작동
        
        - router/index.js
          
          ```js
          const routes = [
            {
              path: '/',
              name: 'home',
              component: HomeView
            },
            ...
          ]
          ```
        
        - App.vue
          
          ```html
          <template>
            <div id="app">
              <nav>
                <router-link :to="{ name: 'home' }">Home</router-link> |
                <router-link :to="{ name: 'about' }">About</router-link> |
              </nav>
              <router-view/>
            </div>
          </template>
          ```
  
  - 프로그래밍 방식 네비게이션
    
    - Vue 인스턴스 내부에서 라우터 인스턴스에 `$router`로 접근할 수 있음
    
    - 다른 URL로 이동하려면 `this.$router.push`를 사용
      
      - history stack에 이동한 URL을 넣는 방식
      
      - history stack에 기록이 남기 때문에 사용자가 브라우저의 뒤로 가기 버튼을 클릭하면 이전 URL로 이동할 수 있음
    
    - 동작 원리는 선언적 방식과 동일
    
    - AboutView.vue
      
      ```html
      <template>
        <div class="about">
          <h1>This is an about page</h1>
          <!-- 선언적 방식 -->
          <router-link :to="{ name: 'home' }">홈으로!</router-link>
          <!-- 프로그래밍 방식 -->
          <button @click="toHome">홈으로</button>
        </div>
      </template>
      ```
      
      ```js
      <script>
      export default {
        name: 'AboutView',
        methods: {
          toHome() {
            // 프로그래밍 방식
            this.$router.push({ name: 'home' })
          },
        },
      }
      </script>
      ```

- Dynamic Route Matching
  
  - 동적 인자 전달
    
    - URL의 특정 값을 변수처럼 사용할 수 있음
  
  - router/index.js
    
    ```js
    import HelloView from '@/views/HelloView'
    
    const routes = [
      ...,
      // route를 추가할 때 동적 인자를 명시 (:userName)
      {
        path: '/hello/:userName',
        name: 'hello',
        component: HelloView,
      },
    ]
    ```
  
  - views/HelloView.vue
    
    ```html
    <template>
      <div>
        <h1>hello, {{ $route.params.userName }}</h1>
        <h1>hello, {{ userName }}</h1>
      </div>
    </template>
    ```
    
    ```js
    <script>
    export default {
      name: 'HelloView',
      data() {
        return {
          userName: this.$route.params.userName
        }
      }
    }
    </script>
    ```
  
  - 선언적 방식 네비게이션
    
    - params를 이용하여 동적 인자 전달 가능
      
      ```html
      // App.vue
      
      <template>
        <div id="app">
          <nav>
            <router-link :to="{ name: 'hello', params: {userName: 'gello'} }">Hello</router-link>
          </nav>
          <router-view/>
        </div>
      </template>
      ```
  
  - 프로그래밍 방식 네비게이션
    
    ```html
    // AboutView.vue
    
    <template>
      <div class="about">
        ...
        <input
          type="text"
          v-model="inputData"
          @keyup.enter="goToHello"
        >
      </div>
    </template>
    ```
    
    ```js
    // AboutView.vue
    
    <script>
    export default {
      name: 'AboutView',
      data() {
        return {
          inputData: null,
        }
      },
    
      methods: {
        ...
        goToHello() {
          this.$router.push({ name: 'hello', params: { userName: this.inputData }})
        }
      },
    }
    </script>
    ```

- lazy-loading
  
  - 모든 파일을 한 번에 로드하려고 하면 모든 것을 다 읽는 시간이 오래 걸림
  
  - 미리 로드를 하지 않고 특정 라우트에 `방문할 때` 매핑된 컴포넌트의 코드를 로드하는 방식을 활용할 수 있음
    
    - 모든 파일을 한 번에 로드하지 않아도 되기 때문에 최초에 로드하는 시간이 빨라짐
    
    - 당장 사용하지 않을 컴포넌트는 먼저 로드하지 않는 것이 포인트

# 
