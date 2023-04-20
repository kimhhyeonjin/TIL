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
    
    - 이름은 `pages`
    
    - 그 외의 일반 React 컴포넌트는 pages가 아닌 다른 이름의 폴더 안에 저장
      
      - 이 안의 컴포넌트는 pages처럼 자동으로 불러오지 못함
      
      - pages 폴더 안의 컴포넌트에서 import해서 사용

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

- 동적 페이지 만들기
  
  - 경로에 있는 값이 동적인 경우
    
    - 파일명을 `[].js`와 같이 입력
      
      - Next.js가 이것을 동적 페이지로 인식해서 경로에 여러 값을 불러옴
      
      - [] 안에 식별자를 추가
        
        - `[newsId].js`
    
    - 동적 폴더 이름 설정을 통한 방법도 가능
      
      - 폴더명을 `[]`와 같이 입력
        
        - 파일명을 index.js로

- 동적 매개변수 값 추출하기
  
  - `import { useRouter } from 'next/router';` 이용
    
    - 기본 React 훅인데 React에 내장된 것은 아니고 Next에서 만들어서 흔히 쓰이는 훅
    
    - 특정 라우팅 기능을 사용할 수 있음
      
      - `useRouter();`를 이용하여 호출
        
        - 라우터 객체에 접근하고 그 라우터 객체에서 특정 데이터나 호출할 수 있는 특정 메소드를 얻을 수 있음
        
        - URL에 인코딩된 값, 동적 경로 세그먼트의 구체적인 값에 접근 가능
          
          - 접근 방법
            
            - 라우터 객체에서 query 속성 사용
            
            - 식별자를 속성 이름으로 넣으면 됨
              
              ```js
              import { useRouter } from "next/router";
              
              const DetailPage = () => {
                useRouter();
              
                const router = useRouter();
                const newsId = router.query.newsId;
                console.log(newsId);
              
                return <h1>The Detail Page</h1>;
              };
              
              export default DetailPage;
              ```

- 페이지 간 연결하기
  
  - a 태그 이용
    
    ```js
    <a href="/news/nextjs-is-a-great-framework">
      NextJS Is A Great Framework
    </a>
    ```
    
    - 항상 브라우저가 새 요청을 보내고 새 HTML 페이지를 받음
    
    - SPA가 아니라는 뜻
    
    - 이전에 저장한 상태가 사라짐
  
  - `import Link from 'next/link';` 이용
    
    - Next에서 제공하는 링크 담당 하위 패키지
      
      - JSX 코드에서 링크를 만들 때 사용
      
      - 사용
        
        - a 태그 대신 Link 사용
        
        - a 태그를 렌더링하고 a 태그에의 클릭을 감지해서 클릭하면 브라우저가 기본 동작으로 새 HTML 페이지 받는 요청을 보내지 못하도록 함
        
        - 대신 불러올 컴포넌트를 읽어들이고 url을 변경하여 페이지가 바뀐 것처럼 보이게 함
    
    ```js
    import Link from 'next/link';
    
    <Link href="/news/nextjs-is-a-great-framework">
      NextJS Is A Great Framework
    </Link>
    ```
    
    - SPA
    
    - 사용자가 이미 페이지에 들어온 상태에서 탐색하는 경우 SPA를 유지하는 것이 좋음
      
      - 페이지 전체에 걸쳐 상태를 보존하면서도 더 빠르게 반응
    
    - 화면에 보이는 콘텐츠는 React에서 재렌더링한 것
    
    - 장점
      
      - 상호작용하고 반응하는 SPA으로 페이지 상태를 관리하고 저장할 수 있음
      
      - 동시에 사용자가 url을 입력하고 엔터 키를 눌러 페이지에 바로 들어오면 이미 완성된 HTML 반환
        
        - 검색 엔진으로 직접 들어와도 완성된 HTML 페이지를 볼 수 있음
        
        - 이미 웹사이트에 접속한 상태에서 링크를 클릭하는 경우 SPA에 그대로 머물게 됨

- _app.js
  
  - pages 폴더에서 바로 쓸 수 있는 특수파일
  
  - NextJS가 렌더링하는 최상위 컴포넌트처럼 작동
  
  - 프로퍼티를 받고 구조 분해 할당을 통해 Component와 pageProps를 받아옴
    
    ```js
    import '../styles/globals.css'
    
    function MyApp({ Component, pageProps }) {
      return <Component {...pageProps} />
    }
    
    export default MyApp
    ```
    
    - NextJS가 자동으로 이 프로퍼티를 MyApp 컴포넌트로 보냄
    
    - `Component`
      
      - 렌더링 될 실제 페이지 콘텐츠를 저장하고 있는 프로퍼티
      
      - 페이지를 전환할 때마다 바뀜
    
    - `pageProps`
      
      - 페이지가 받는 특수 프로퍼티
  
  - 네브바를 추가하는 경우
    
    ```js
    import Layout from "../components/layout/Layout";
    import "../styles/globals.css";
    
    function MyApp({ Component, pageProps }) {
      return (
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      );
    }
    
    export default MyApp;
    ```
