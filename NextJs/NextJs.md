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
  
  - 빌드
    
    ```bash
    npm run build
    ```
    
    - NextJs 사이트를 배포하기 전 실행
    
    - 프로덕션 빌드 구축
  
  - 우클릭 → 페이지 소스 보기
    
    - 비어있는 뼈대만 있는 것이 아니라 실제 페이지 내용이 존재
    
    - 기본 React 앱과 다른 중요한 차이점
      
      - 서버에서 페이지를 사전 렌더링
        
        - 단점
          
          - 사전 렌더링한 페이지는 컴포넌트가 첫 번째 렌더링 사이클을 마친 이후의 상태를 갖고 있으므로 중요한 데이터가 손실된 상태
          
          - 따라서 사전 렌더링 과정을 미세 조정해야 함
  
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

- 프로그래밍 방식으로 탐색하기
  
  - `router.push();`
    
    - 새 페이지를 페이지 더미에 연결
    
    - Link 컴포넌트를 사용하는 것과 같음
    
    - 단지 프로그래밍 방식으로 탐색하는 것
      
      ```js
      import { useRouter } from "next/router";
      
      ...
      
      function MeetupItem(props) {
        const router = useRouter();
      
        const showDetailsHandler = () => {
          router.push("/" + props.id);
        };
      
        return (
          ...
                <button onClick={showDetailsHandler}>Show Details</button>
          ...
        );
      }
      
      export default MeetupItem;
      ```

- useRouter
  
  - `import { useRouter } from "next/router";`
  
  - 동적 매개변수
  
  - 프로그래밍 방식으로 탐색하기

### 배포(deploy)

- head 메타 데이터 추가하기
  
  - `import Head from "next/head";`
    
    ```js
    import Head from "next/head";
    import { MongoClient } from "mongodb";
    import MeetupList from "../components/meetups/MeetupList";
    import { Fragment } from "react";
    
    const HomePage = (props) => {
      return (
        <Fragment>
          <Head>
            {/* 탭 이름 */}
            <title>React Meetups</title>
            {/* 검색엔진에서 선택되어 나타나는 설명 */}
            <meta
              name="description"
              content="Browse a huge list of highly active React meetups!"
            />
          </Head>
          <MeetupList meetups={props.meetups} />;
        </Fragment>
      );
    };
    
    export default HomePage;
    ```
    
    - <title> 속성
      
      - 탭 이름
    
    - <meta> 속성
      
      - 검색엔진에서 선택되어 나타나는 설명

### 개념

- SSG와 SSR
  
  - SSG (Static Site Generation)
    
    - 일반적으로 사용하는 접근법
    
    - 컴포넌트가 사전 렌더링되는 시점은 애플리케이션을 빌드하거나  Next 프로젝트를 빌드하는 시점
      
      ```js
      const HomePage = (props) => {
        // getStaticProps를 쓰면 상태를 관리할 필요가 없어짐
        // const [loadedMeetups, setLoadedMeetups] = useState([]);
      
        // getStaticProps를 쓰면 useEffect가 필요하지 않음
        // 컴포넌트 함수가 실행되고 난 후에 useEffect 실행
        // useEffect(() => {
        //   // send a http request and fetch data
        //   setLoadedMeetups(DUMMY_MEETUPS);
        // }, []);
      
        // getStaticProps 사용 이전
        // return <MeetupList meetups={loadedMeetups} />;
        // getStaticProps 사용 이후
        return <MeetupList meetups={props.meetups} />;
      };
      
      export async function getStaticProps() {
        return {
          props: {
            meetups: DUMMY_MEETUPS,
          },
          revalidate: 10,
        };
      }
      
      export default HomePage;
      ```
      
      - pages 폴더 안에 있는 컴포넌트 파일에서만 작동
      
      - 컴포넌트 함수를 호출하기 전에 `getStaticProps`를 호출
      
      - NextJs가 `getStaticProps`를 찾으면 사전 렌더링 프로세스 중에 이 함수를 실행
        
        - 컴포넌트 함수를 바로 호출하지 않고 반환된 JSX의 형태를 HTML 내용으로 사용
      
      - 작업을 완료했으면 객체를 반환
        
        - props 프로퍼티 설정
          
          - 이름은 반드시 props
        
        - revalidate 프로퍼티 설정
          
          - 데이터가 자주 변하는 경우
          
          - 점진적 정적 생성 가능
          
          - 숫자를 받아오는데 이 숫자는 이 페이지를 다시 생성할 때까지 NextJs가 대기하는 시간을 초 단위로 표시한 것
            
            - 숫자는 데이터 업데이트 빈도에 따라 결정
            
            - 이 경우 해당 페이지는 빌드 프로세스 중에 바로 생성되지 않고 페이지에 요청이 있다면 서버에서 해당 숫자의 초 간격으로 페이지가 다시 생성
            
            - 그 후 기존의 페이지를 대체
    
    - `getStaticProps`
      
      - 페이지에서 사용할 props를 준비
      
      - 비동기적으로 설정할 수 있어 유용
        
        ```js
        export async function getStaticProps() {};
        ```
        
        - NextJs는 이 promise가 해결될 때까지 기다린 후 컴포넌트 함수에서 사용할 props를 반환
      
      - 일반적으로 서버에서만 돌아가는 어떤 코드든지 전부 실행할 수 있음
        
        - 파일 시스템에 연결할 수 있음
        
        - 데이터베이스에 안전하게 연결할 수 있음
        
        - 서버에서도, 클라이언트 측에서도 실행되지 않음
        
        - API나 데이터베이스에서 데이터를 가져오거나 파일 시스템의 일부 파일에서 데이터를 읽어올 수 있음
      
      - useRouter 훅을 사용할 수 없음
        
        - 대신 `context.params`를 통해 매개변수를 받아올 수 있음
        
        - params가 pregenerate 되지 않은 상태에서 해당 페이지로 이동하는 경우 404 에러
          
          ```js
          export async function getStaticProps(context) {
            // fetch data for a single meetup
          
            // context.params;
            const meetupId = context.params.meetupId;
            console.log(meetupId);
          
            return {
              props: {
                meetupData: {
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Funguni_Island%2C_Pangani%2C_Tanga.jpg/1280px-Funguni_Island%2C_Pangani%2C_Tanga.jpg",
                  id: meetupId,
                  title: "A First Meetup",
                  address: "Some Street 5, Some City",
                  description: "This is a first meetup",
                },
              },
            };
          }
          ```
    
    - `getStaticPaths`
      
      - 동적 세그먼트 값이 있는 객체를 반환
        
        ```js
        export async function getStaticPaths() {
          return {
            fallback: false,
            paths: [
              {
                params: {
                  // pregenerate되는 값
                  meetupId: "m1",
                },
              },
              {
                params: {
                  // pregenerate되는 값
                  meetupId: "m2",
                },
              },
            ],
          };
        }
        ```
      
      - fallback 키
        
        - path 배열이 모든 지원되는 매개변수를 저장할지 일부만 저장할지 지정
        
        - false
          
          - 모든 지원되는 매개변수 저장
        
        - true / "blocking"
          
          - 일부만 저장
          
          - 지정한 경로 목록이 완전하지 않을 수 있고 더 유효한 페이지가 있을 수 있음
          
          - NextJs가 바로 페이지를 찾을 수 없는 경우 바로 404페이지를 보이지 않고 요청 시 페이지를 생성한 후 캐시에 저장하여 pregenerate
          
          - true와 blocking의 차이
            
            -  true
              
              - 빈 페이지 즉시 반환
              
              - 페이지에 데이터가 아직 없는 경우에 대한 처리 필요
            
            - blocking
              
              - 페이지가 미리 생성될 때까지 사용자는 아무것도 볼 수 없음
              
              - 완성된 페이지 제공
      
      - path 키를 배열로 받아옴
        
        - 배열에는 객체가 여러 개 있는데 동적 페이지 버전 당 하나의 객체를 가져야 함
  
  - SSR (Server-side Rendering)
    
    - `getServerSideProps`
      
      - `요청이 들어올 때마다` 페이지를 다시 만들어야 하는 경우
      
      - 들어오는 요청에 작업이 필요한 경우나 매 초마다 요청이 들어오는 경우
      
      - 페이지를 동적으로 pregenerate 해야 함
        
        ```js
        export async function getServerSideProps(context) {
          const req = context.req;
          const res = context.res;
        
          return {
            props: {
              meetups: DUMMY_MEETUPS,
            },
          };
        }
        ```
        
        - 단점
          
          - 요청이 들어올 때까지 기다려야 함
        
        - getStaticProps와의 차이점
          
          - 빌드 과정에서는 실행되지 않음
          
          - revalidate 사용할 수 없음
            
            - 애초에 말이 안 됨
          
          - 인증의 경우 getStaticProps가 더 나음
            
            - 캐싱 가능
            
            - 페이지를 여러 번 pregenerate 할 필요 없음

- API route
  
  - HTML 코드를 반환하지 않고 대신 HTTP 요청을 받음
  
  - pages 폴더 내에 api 폴더 생성
    
    - 이름은 항상 api 이어야 함
    
    - api 폴더에 자바스크립트 파일 생성
      
      - 파일 이름은 url에서 경로 세그먼트
      
      - 파일에 리액트 컴포넌트 함수는 입력하지 않고 서버 사이드 코드를 포함하는 함수 정의
      
      - API route는 클라이언트에서는 돌아가지 않고 서버에서만 돌아가기 때문
  
  - Mongodb로 작업하기
    
    - Mongobd 패키지 설치
      
      ```bash
      npm install mongodb
      ```
    
    - 작업
      
      ```js
      import { MongoClient } from "mongodb";
      
      // /api/new-meetup
      // POST /api/new-meetup
      
      // node.js, express.js
      async function handler(req, res) {
        if (req.method === "POST") {
          const data = req.body;
      
          // MongoClient 연결
          const client = await MongoClient.connect(
            "mongodb+srv://<username>:<password>@cluster0.uqu8pq0.mongodb.net/meetups?retryWrites=true&w=majority"
          );
      
          // meetups에 연결 중인 데이터베이스 받아오기
          // meetups 데이터베이스가 없는 경우 바로 생성됨
          const db = client.db();
      
          // meetups라는 이름의 collection에 접근
          // meetups collection이 없는 경우 바로 생성됨
          const meetupsCollection = db.collection("meetups");
      
          // collection에 object 형태의 새 문서 삽입
          const result = await meetupsCollection.insertOne(data);
      
          console.log(result);
      
          // 데이터베이스 연결 차단
          client.close();
      
          // res를 통해 응답 반환
          res.status(201).json({ message: "Meetup inserted!" });
        }
      }
      
      export default handler;
      ```
    
    - API 경로로 HTTP 요청 보내기
      
      ```js
      import { useRouter } from "next/router";
      import NewMeetupForm from "../../components/meetups/NewMeetupForm";
      
      const NewMeetupPage = () => {
        const router = useRouter();
      
        async function addMeetupHandler(enteredMeetupData) {
          const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          const data = await response.json();
      
          console.log(data);
      
          // POST 요청 보낸 후 기본 url로 돌아가도록
          // router.push와 router.replace 비교
          router.push("/");
        }
      
        return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
      };
      
      export default NewMeetupPage;
      ```
    
    - 데이터베이스에서 데이터 가져오기
      
      ```js
      import { MongoClient } from "mongodb";
      import MeetupList from "../components/meetups/MeetupList";
      
      const HomePage = (props) => {
        return <MeetupList meetups={props.meetups} />;
      };
      
      export async function getStaticProps() {
        // MongoClient 연결
        const client = await MongoClient.connect(
          "mongodb+srv://<username>:<password>@cluster0.uqu8pq0.mongodb.net/meetups?retryWrites=true&w=majority"
        );
      
        // meetups에 연결 중인 데이터베이스 받아오기
        // meetups 데이터베이스가 없는 경우 바로 생성됨
        const db = client.db();
      
        // meetups라는 이름의 collection에 접근
        // meetups collection이 없는 경우 바로 생성됨
        const meetupsCollection = db.collection("meetups");
      
        // 모든 문서 반환
        const meetups = await meetupsCollection.find().toArray();
      
        // 데이터베이스 연결 차단
        client.close();
      
        return {
          props: {
            meetups: meetups.map((meetup) => ({
              title: meetup.title,
              address: meetup.address,
              image: meetup.image,
              // 객체를 사용가능한 문자열로 변환
              id: meetup._id.toString(),
            })),
          },
          revalidate: 10,
        };
      }
      
      export default HomePage;
      ```
      
      ```js
      import { MongoClient, ObjectId } from "mongodb";
      import MeetupDetail from "../../components/meetups/MeetupDetail";
      
      const MeetupDetails = (props) => {
        return (
          <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
          />
        );
      };
      
      export async function getStaticPaths() {
        const client = await MongoClient.connect(
          "mongodb+srv://<username>:<password>@cluster0.uqu8pq0.mongodb.net/meetups?retryWrites=true&w=majority"
        );
      
        // meetups에 연결 중인 데이터베이스 받아오기
        // meetups 데이터베이스가 없는 경우 바로 생성됨
        const db = client.db();
      
        // meetups라는 이름의 collection에 접근
        // meetups collection이 없는 경우 바로 생성됨
        const meetupsCollection = db.collection("meetups");
      
        // find(필터 기준, 선택할 argument 지정)
        // 아래의 경우 find(전체, id 필드만 포함)
        const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
      
        client.close();
      
        return {
          fallback: false,
          paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
          })),
        };
      }
      
      export async function getStaticProps(context) {
        // context.params;
        const meetupId = context.params.meetupId;
      
        // fetch data for a single meetup
      
        const client = await MongoClient.connect(
          "mongodb+srv://<username>:<password>@cluster0.uqu8pq0.mongodb.net/meetups?retryWrites=true&w=majority"
        );
      
        // meetups에 연결 중인 데이터베이스 받아오기
        // meetups 데이터베이스가 없는 경우 바로 생성됨
        const db = client.db();
      
        // meetups라는 이름의 collection에 접근
        // meetups collection이 없는 경우 바로 생성됨
        const meetupsCollection = db.collection("meetups");
      
        // 하나의 문서 찾기
        const selectedMeetup = await meetupsCollection.findOne({
          _id: new ObjectId(meetupId),
        });
      
        client.close();
      
        return {
          props: {
            meetupData: {
              id: selectedMeetup._id.toString(),
              title: selectedMeetup.title,
              address: selectedMeetup.address,
              image: selectedMeetup.image,
              description: selectedMeetup.description,
            },
          },
        };
      }
      
      export default MeetupDetails;
      ```
