# Next.js

## Next.js

### Next.js

- 공식 웹사이트
  
  - [nestjs.org](nestjs.org)

- The React `Framework` for Production

- 대규모 양산형 React 앱을 더 편리하게 구축할 수 있도록 많은 기능을 제공

### 주요 기능

- 서버 사이드 렌더링 (SSR) 내장
  
  - 서버 사이드 렌더링 (SSR)
    
    - 페이지 콘텐츠를 클라이언트가 아니라 전적으로 서버에서 준비
  
  - 클라이언트 사이드 렌더링 (CSR)
    
    - 모든 렌더링은 클라이언트 쪽에서

- 검색엔진 최적화 (SEO)
  
  - 검색엔진이 이해하기 쉽도록 홈페이지의 구조와 페이지를 개발해 검색 결과 상위에 노출될 수 있도록 하는 작업

- 파일 기반 라우팅으로 라우팅 간소화
  
  - Next.js 애플리케이션에는 특수 페이지 폴더 존재
    
    - 이름은 pages

- 풀스택 프레임워크
  
  - Next 또는 React 애플리케이션에 백엔드 코드를 쉽게 추가할 수 있음

### Next.js 프로젝트 시작하기

- node.js가 설치되어 있지 않은 경우 먼저 설치

- bash에 `npx create-next-app` 입력
  
  ```bash
  npx create-next-app
  ```

- 페이지 추가하기
  
  - index 파일은 / 뒤에 아무것도 없는 경우 불러옴
  
  - 그 외의 다른 파일 이름은 경로 이름으로 사용
    
    - 예를 들어 news.js라는 파일이 있다면
    
    - 도메인 뒤에 `/news`라는 요청에 반응
  
  - index.js
    
    ```js
    const HomePage = () => {
        return <h1>The Home Page</h1>
    };
    
    export default HomePage;
    ```
    
    - Next.js 프로젝트는 최신 React 설정을 지원해서 `import React from 'react'` 생략 가능
  
  - 실행
    
    ```bash
    npm run dev
    ```
    
    - terminal에 출력되는 주소로 url 실행
  
  - 우클릭 → 페이지 소스 보기
    
    - 비어있는 뼈대만 있는 것이 아니라 실제 페이지 내용이 존재
    
    - 기본 React 앱과 다른 중요한 차이점
      
      - 서버에서 페이지를 사전 렌더링
  
  - index.js가 아닌 따로 이름 붙인 파일을 대체하는 방법
    
    - pages 폴더 안에 원하는 주소를 이름으로 하는 하위 폴더를 만들고 그 안에 index.js 파일 생성
    
    - 예를 들어 pages 폴더 안에 news 폴더를 만들고 그 안에 index.js 파일을 생성하는 경우
      
      - `domain.com/news`의 형태가 됨
    
    - 세그먼트를 하나 이상 만드는 경우(중첩 경로를 만드는 경우) 유용
