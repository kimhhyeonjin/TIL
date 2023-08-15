### 프로젝트 생성하기

- 기본세팅
  
  - node.js 18버전 이상
  
  - vscode

- Next.js 프로젝트 생성
  
  ```bash
  npx create-next-app@latest --experimental-app
  ```

- 미리보기
  
  ```bash
  npm run dev
  ```

### 프로젝트 fresh

- 생성
  
  - src directory 사용 X
  
  - app directory 사용 O
    
    - next 13에서 app directory를 이용하는 경우 client에서 렌더링 하도록 하려면
      
      `'use client'` 키워드 사용해야 함
  
  - 구조
    
    - app > page.js
      
      - 메인 페이지
    
    - app > layout.js
      
      - page.js를 감싸는 파일
      
      - 페이지 변경과 상관없이 계속 보여줄 UI를 작성하면 편리
    
    - app > globals.css
      
      - 모든 페이지에 적용할 스타일
    
    - app > file.module.css
      
      - 특정 페이지에만 적용할 스타일
    
    - node_modules
      
      - 설치한 라이브러리 보관
    
    - public
      
      - 이미지 등 소스코드 외의 파일 보관용
    
    - package.json
      
      - scripts
        
        - 터미널에서 쓸 수 있는 명령어 표시
      
      - dependencies
        
        - 설치한 라이브러리를 자동으로 기록해줌

- 기본 react
  
  - 데이터 바인딩
    
    - `{}`
      
      ```js
      export default function Home() {
        const name = "park";
      
        return (
          <div>
            <p>{name}</p>
          </div>
        );
      }
      ```
  
  - css
    
    - css 파일
      
      - className 이용
        
        - js
          
          ```js
          export default function Home() {
            const name = "park";
          
            return (
              <div>
                <h4 className="title">신선배송</h4>
                <p className="title-sub">by dev {name}</p>
              </div>
            );
          }
          ```
        
        - css
          
          ```css
          body {
            margin: 0;
            background: #303030;
            color: white;
          }
          
          .title {
            text-align: center;
            margin-top: 150px;
          }
          
          .title-sub {
            text-align: center;
          }
          ```
    
    - style 속성
      
      - `style={{}}`의 형식
        
        ```js
        export default function Home() {
        const link = "https://google.com";
        
          return (
            <div>
              <div style={{ textAlign: "center" }}>
                <a style={{ color: "red", fontSize: "12px" }} href={link}>
                  링크
                </a>
              </div>
            </div>
          );
        }
        ```
  
  - 이미지 넣기
    
    - img 태그 이용
      
      ```js
      {products.map((product, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img" />
            <h4>{product}</h4>
          </div>
        );
      })}
      ```
    
    - Image 태그 이용
      
      - 최적화된 이미지로 넣을 수 있음 (lazy loading + 사이즈 최적화 + layout shift 방지)
        
        ```js
        import Image from "next/image";
        import food0 from "/public/food0.png";
        
        export default function Test() {
        
          return (
            <div>
              <Image src={food0} className="food-img" />
            </div>
          );
        }
        ```
      
      - 외부 이미지는 width, height 속성이 필요
        
        - 또한 `next.config.js` 파일에 도메인 및 경로 등록 해야 함
  
  - 컴포넌트
    
    - server component
      
      - 장점
        
        - 로딩 속도가 빠름
        
        - 검색 엔진 노출에 유리함
      
      - 단점
        
        - html에 자바스크립트 기능 넣기 불가능
        
        - useState, useEffect 등 역시 사용 불가능
    
    - client component
      
      - 파일 맨 위에 `'use client'`를 넣고 만든 경우
      
      - 장점
        
        - html에 자바스크립트 기능 넣을 수 있음
        
        - useState, useEffect 사용 가능
      
      - 단점
        
        - 로딩 속도가 느림
          
          - 자바스크립트 파일이 많이 필요
          
          - hydration 필요
            
            - hydration
              
              - html 유저에게 보낸 후에 자바스크립트로 html을 다시 읽고 분석하는 일
    
    - 큰 페이지는 server component, 자바스크립트 기능이 필요한 곳에 client component 사용하는 것이 좋음

### 프로젝트 forum

- 생성
  
  - src directory 사용 O
  
  - app directory 사용 O
    
    - next 13에서 app directory를 이용하는 경우 client에서 렌더링 하도록 하려면
      
      `'use client'` 키워드 사용해야 함
      
      - useRouter를 사용할 때에도
        
        ```ts
        import { useRouter } from "next/router";
        ```
        
         가 아닌
        
        ```ts
        import { useRouter } from "next/navigation";
        ```
        
         사용해야 함
  
  - ts 사용

- database
  
  - 관계형 database
    
    - 데이터를 표로 저장할 수 있음
    
    - PostgreSQL, MySQL, ORACLE 등
  
  - 비관계형 database
    
    - 데이터 저장 방식이 제각각
      
      - mongoDB
        
        - JS object 자료형처럼 데이터 저장 가능
    
    - mongoDB, Cloud Firestore, cassandra 등

- mongodb 사용하기
  
  - mongodb 라이브러리 설치
    
    ```bash
    npm install mongodb
    ```
  
  - mongodb 연결
    
    - js로 구현
      
      - js mongodb 연결 기본 틀
        
        ```js
        import { MongoClient } from 'mongodb'
        const url = 'DB접속URL'
        const options = { useNewUrlParser: true }
        let connectDB
        
        if (process.env.NODE_ENV === 'development') {
          // 개발 중 상태면 global 전역변수에 보관
          if (!global._mongo) {
            global._mongo = new MongoClient(url, options).connect()
          }
          connectDB = global._mongo
          // 실제 프로덕션 상태일 땐 global을 사용 하지 않는 것이 좋음
        } else {
          connectDB = new MongoClient(url, options).connect()
        }
        export { connectDB }
        ```
      
      - DB 입출력이 필요한 곳에서 connectDB 함수를 가져다 사용
        
        ```js
        import { connectDB } from "/util/database.js"
        
        export default async function Home() {
          let client = await connectDB;
          const db = client.db('forum');
          let result = await db.collection('post').find().toArray();
        
          return (
            <main>
              {result[0].title}
            </main>
          )
        }
        ```
    
    - ts로 구현
      
      - 환경변수 설정 root/.env
        
        ```env
        MONGODB_URL=DB접속URL
        ```
        
        - 따옴표 없이 그냥 DB접속URL
      
      - .gitignore 파일에 .env 추가
        
        ```gitignore
        # env
        .env
        ```
      
      - ts mongodb 연결 기본 틀 root/src/util/database.ts
        
        ```ts
        import { MongoClient } from "mongodb";
        // Connect MongoDB
        const url = process.env.MONGODB_URL;
        // 환경변수 설정하지 않으면 에러 발생
        if (!url) {
          throw new Error("The MONGODB_URL environment variable is not defined");
        }
        let connectDB: Promise<MongoClient>;
        if (process.env.NODE_ENV === "development") {
          // 개발 중 상태면 global 전역변수에 보관
          if (!global._mongo) {
            global._mongo = new MongoClient(url).connect();
          }
          connectDB = global._mongo;
          // 실제 프로덕션 상태일 땐 global을 사용 하지 않는 것이 좋음
        } else {
          connectDB = new MongoClient(url).connect();
        }
        export { connectDB };
        ```
      
      - _mongo 전역 타입 지정 root/src/type/global.d.t.ts
        
        ```ts
        export {};
        declare global {
            var _mongo: Promise<MongoClient> | undefined;
        }
        ```
      
      - 컴파일 설정 tsconfig.json
        
        ```json
        ...
        "typeRoots": [
          "./src/types",
          "./node_modules/@types"
        ],
        ...
        "include": [
          ".next/types/**/*.ts",
          "src/**/*",
          "global.d.ts"
        ],
        ```
      
      - DB 입출력이 필요한 곳에서 connectDB 함수를 가져다 사용
        
        ```tsx
        import { connectDB } from "@/util/database";
        
        export default async function Home() {
          const client = await connectDB;
          const db = client.db("forum");
          const result = await db.collection("post").find().toArray();
          console.log(result)
        
          return (
            <main>
              {result[0].title}
            </main>
          )
        }
        ```
  
  - db 입출력 코드는 server component 안에서만 사용하기
  
  - mongodb 저장
    
    - ts로 구현
      
      ```tsx
      import type { NextApiRequest, NextApiResponse } from "next";
      import { connectDB } from "@/util/database";
      
      export default async function handler(
        req: NextApiRequest,
        res: NextApiResponse
      ) {
        // 유저가 보낸 데이터
        // console.log(req.body);
        if (req.method == "POST") {
          if (req.body.title == "") {
            return res.status(500).json("제목을 입력해주세요.");
          } else if (req.body.content == "") {
            return res.status(500).json("내용을 입력해주세요.");
          }
          try {
            const client = await connectDB;
            const db = client.db("forum");
            const result = await db.collection("post").insertOne(req.body);
            // redirect 시키고 싶은 경우
            return res.redirect(302, "/list");
            // return res.status(200).json('저장')
          } catch (error) {
            console.log(error);
          }
        }
      }
      ```
  
  - `findOne()`
    
    - 게시물 하나만 mongodb에서 가져오고 싶은 경우
      
      ```tsx
      import { ObjectId } from "mongodb";
      
      db.collection("post").findOne({ _id: new ObjectId(props.params.id) });
      ```
      
      - ObjectId로 찾고 싶으면 new ObjectId() 사용
  
  - `insertOne()`
    
    - object 하나를 mongodb로 저장하고 싶은 경우
      
      ```tsx
      // 유저가 보낸 데이터 : req.body
      
      await db.collection("post").insertOne(req.body)
      ```
  
  - `updateOne()`
    
    - object 하나를 mongodb에 수정하고 싶은 경우
      
      ```tsx
      // .updateOne({수정할 게시물 정보}, {$set : {수정할 내용}})
      
      const edits = { title: req.body.title, content: req.body.content };
      
      const result = await db
              .collection("post")
              .updateOne({ _id: new ObjectId(req.body._id) }, { $set: edits });
      ```
  
  - `deleteOne()`
    
    - object 하나를 mongodb에서 삭제하고 싶은 경우
      
      ```tsx
      // .deleteOne({삭제할 게시물 정보}, {$set : {수정할 내용}})
      
      const edits = { title: req.body.title, content: req.body.content };
      
      const result = await db
              .collection("post")
              .deleteOne({ _id: new ObjectId(req.body._id) }, { $set: edits });
      ```

- dynamic route
  
  - root/src/app/detail/**[id]**/page.js
    
    - [id] 자리에는 아무 값이나 와도 됨
    
    - [id] 값을 가져오는 방법: props
      
      ```tsx
      import { connectDB } from "@/util/database";
      import { ObjectId } from "mongodb";
      
      interface Props {
        params: {
          id: string;
        };
        searchParams: {};
      }
      
      export default async function Detail(props: Props) {
        const client = await connectDB;
        const db = client.db("forum");
        const result = await db
          .collection("post")
          .findOne({ _id: new ObjectId(props.params.id) });
      
        // 유저가 dynamic route 자리에 입력한 값을 출력
        console.log(props);
      
        return (
          <div>
            <h4>상세페이지</h4>
            <h4>{result?.title}</h4>
            <p>{result?.content}</p>
          </div>
        );
      }
      ```

- `next/navigation`
  
  - useRouter()
    
    ```tsx
    "use client";
    
    // 클라이언트 컴포넌트에서만 사용
    import { useRouter } from "next/navigaion";
    
    export default function Test() {
      const router = useRouter();
      return (
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          버튼
        </button>
      );
    }
    ```
    
    - router.push('주소')
      
      - 주소로 이동
    
    - router.back()
      
      - 뒤로 가기
    
    - router.forward()
      
      - 앞으로 가기
    
    - router.refresh()
      
      - 바뀐 내용 새로고침
    
    - router.prefetch('주소')
      
      - 페이지 미리 로드
      
      - 참고로 <Link>에도 prefetch 기능 내장되어 있음
        
        - 설정하고 싶지 않으면
          
          ```tsx
          <Link prefetch={false} href={`/detail/${result._id.toString()}`}>
            <h4>{result.title}</h4>
          </Link>
          ```
          
          와 같이 `prefetch={false}` 사용
  
  - usePathname()
    
    - 현재 URL 가져오기
      
      ```tsx
      "use client";
      
      // 클라이언트 컴포넌트에서만 사용
      import { usePathname } from "next/navigation";
      
      export default function Test() {
        // 현재 URL 출력
        const currentURL = usePathname();
        console.log(currentURL);
        return (
          <button>버튼</button>
        );
      }
      ```
  
  - useSearchParams()
    
    - search parameter 가져오기
      
      ```tsx
      "use client";
      
      // 클라이언트 컴포넌트에서만 사용
      import { useSearchParams } from "next/navigation";
      
      export default function Test() {
        // search parameter 출력
        const searchParams = useSearchParams();
        console.log(searchParams);
        return (
          <button>버튼</button>
        );
      }
      ```
  
  - useParams()
    
    - 유저가 dynamic route 자리에 입력한 값 가져오기
      
      ```tsx
      "use client";
      
      // 클라이언트 컴포넌트에서만 사용
      import { useParams } from "next/navigation";
      
      export default function Test() {
        // 유저가 dynamic route 자리에 입력한 값 출력
        const dynamicParams = useParams();
        console.log(dynamicParams);
        return (
          <button>버튼</button>
        );
      }
      ```

- 서버 기능 개발하기
  
  - app 폴더 안에 api 폴더를 만들어서 그 안에 서버 기능 만들기
    
    - 아직은 기능을 완전히 사용하기 힘듦
  
  - src 폴도 안에 pages라는 폴더를 만들고 그 안에 api 폴더 생성 후 그 안에 서버 기능 만들기
    
    - 요청과 응답이 필요한 경우 해당 타입 import
      
      ```tsx
      import type { NextApiRequest, NextApiResponse } from "next";
      ```
    
    - 예시
      
      - 현재 날짜, 현재 시간을 보내주는 서버 기능
        
        ```tsx
        // src/pages/api/date.tsx
        
        import type { NextApiRequest, NextApiResponse } from "next";
        
        export default function handler(req: NextApiRequest, res: NextApiResponse) {
          const time = new Date();
          res.status(200).json(time);
        }
        ```

- 서버로 데이터 보내기
  
  - form 태그
    
    - GET과 POST만 가능함
    
    - 새로고침 되기 때문에 event.preventDefault() 등을 사용해야 함
  
  - fetch() 이용
    
    - 버튼 클릭 시 GET 요청 보내기
      
      ```tsx
      <span
        // GET 요청
        onClick={() => {
          fetch("/api", {
            //생략 가능
            method: "GET"
          })
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        🗑️
      </span>
      ```
    
    - 버튼 클릭 시 POST 요청 보내기
      
      ```tsx
      <span
        // POST 요청
        onClick={() => {
          fetch("/api/post/delete", {
            method: "DELETE",
            body: result._id.toString(),
          })
            .then((response) => {
              if (response.status == 200) {
                return response.json();
              } else {
                // 서버가 에러코드 전송 시 실행할 코드
              }
              // console.log(response);
            })
            .then((response) => {
              // 성공 시 실행할 코드
              console.log(response);
            })
            .catch((error) => {
              // 인터넷 문제로 실패 시 실행할 코드
              console.log(error);
            });
        }}
      >
        🗑️
      </span>
      ```
      
      - JSON.stringify()
        
        - JavaScript 객체를 JSON 문자열로 변환
      
      - JSON.parse()
        
        - JSON 문자열을 JavaScript 객체로 변환
  
  - query string (또는 search parameter)
    
    - 클라이언트 컴포넌트
      
      ```tsx
      "use client";
      
      <span
        onClick={() => {
          // root/src/pages/api/test.tsx파일 생성 후
          // 아래처럼 요청을 보내면 해당 파일에서
          // req.query를 통해 확인이 가능
      
          // URL 뒤에 ?데이터이름=값
          fetch("/api/test?name=kim&age=100");
        }}
      >
        🗑️
      </span>
      ```
    
    - root/src/pages/api/test.tsx
      
      ```tsx
      import type { NextApiRequest, NextApiResponse } from "next";
      
      export default function handler(req: NextApiRequest, res: NextApiResponse) {
        console.log(req.query);
        return res.status(200).json("쿼리");
      }
      ```
      
      - `req.query`를 통해 확인 가능
      
      - console.log 확인
        
        - { name: 'kim', age: '100' }
    
    - 장점
      
      - 간단함
      
      - GET 요청도 데이터 전송 가능
    
    - 단점
      
      - 데이터가 많으면 깔끔하지 않음
      
      - URL에 데이터가 노출됨
  
  - URL parameter
    
    - 클라이언트 컴포넌트
      
      ```tsx
      "use client";
      
      <span
        onClick={() => {
          // root/src/pages/api/test/[anyword].tsx파일 생성 후
          // 아래처럼 요청을 보내면 해당 파일에서
          // req.query를 통해 확인이 가능
          fetch("/api/test/happy");
        }}
      >
        🗑️
      </span>
      ```
    
    - root/src/pages/api/test/[anyword].tsx
      
      ```tsx
      import type { NextApiRequest, NextApiResponse } from "next";
      
      export default function handler(req: NextApiRequest, res: NextApiResponse) {
        console.log(req.query);
        return res.status(200).json("쿼리");
      }
      ```
      
      - `req.query`를 통해 확인 가능
      
      - console.log 확인
        
        - { anyword: 'happy' }

### 로그인

- session 방식
  
  - 유저가 로그인을 완료하면 DB 또는 서버 메모리에 아이디, 로그인 날짜, 유효기간, session id 등을 기록한 후 session id를 보내줌
  
  - 장점
    
    - 유저의 요청마다 로그인 상태 체크 가능
  
  - 단점
    
    - 매번 확인하기 때문에 DB의 부담이 심해짐

- token 방식
  
  - JWT (JSON Web Token) 방식
  
  - 유저가 로그인을 완료하면 기록하는 과정 없이 아이디, 로그인 날짜, 유효기간 등을 암호화하여 유저에게 보냄
  
  - 장점
    
    - GET 요청이나 POST 요청을 보낼 때 DB를 조회할 필요가 없어 DB 부담이 적음

- Next-auth 라이브러리를 이용하면 간편하게 구현 가능

### 배포

- `npm run build`
  
  - development mode로 앱 실행
  
  - 코드를 html, javascript, css 파일로 바꿔줌
  
  - build가 끝나면 아래와 같은 문구 확인 가능
    
    ```
    λ (Server) server-side renders at runtime (uses getInitialProps or getServerSideProps)
    ○ (Static) automatically rendered as static HTML (uses no initial props)
    ```
    
    - ○ : static rendering
      
      - 디폴트 렌더링
      
      - npm run build할 때 만든 html 페이지 그대로 유저에게 보냄
      
      - static rendering이 되어야 하는데 dynamic rendering으로 표시된 페이지가 있는 경우가 있음
        
        - static rendering으로 수정
          
          - 해당 페이지에서 `dynamic` 변수를 만듦
            
            ```tsx
            export const dynamic = "force-static";
            ```
    
    - λ : dynamic rendering
      
      - 유저가 페이지에 접속할 때마다 html 페이지를 새로 만들어 보내줌
      
      - dynamic rendering이 되어야 하는데 static rendering으로 표시된 페이지가 있는 경우가 있음
        
        - dynamic rendering으로 수정
          
          - 해당 페이지에서 `dynamic` 변수를 만듦
            
            ```tsx
            export const dynamic = "force-dynamic";
            ```
      
      - 단점
        
        - 서버/DB 부담 증가
          
          - 캐싱 기능 사용하면 도움됨
            
            - 페이지 캐싱
              
              - 페이지 완성본을 잠깐 저장해두고 재사용
                
                ```tsx
                // 페이지 단위 캐싱
                export const revalidate = 60;
                ```
                
                - 60초마다 캐싱
            
            - GET 요청 결과 캐싱
              
              - GET 요청 결과를 잠깐 저장해두고 재사용
                
                ```tsx
                // 디폴트
                await fetch("/URL", { cache: "force-cache" });
                // 매번 서버로 요청해 실시간 데이터 받아옴
                await fetch("/URL", { cache: "no-store" });
                // 60초마다 캐싱된 데이터 갱신
                await fetch("/URL", { next: { revalidate: 60 } });
                ```
              
              - 다만 캐싱된 데이터는 하드용량을 차지함

- `npm run start`
  
  - production mode로 앱 실행

### 라이브러리

- `dotenv`
  
  - 환경변수 (environment variables)
    
    - 개념
      
      - 시스템 또는 프로세스에 대한 설정 값들을 저장하는 방법
      
      - 실행 중인 프로그램이나 서버에 영향을 미치는 설정 정보를 저장할 때 유용
    
    - 목적
      
      - 프로그램의 설정 정보를 저장
        
        - 데이터베이스 연결 정보, 포트 번호, 서비스 URL 등을 환경변수로 설정하여 프로그램이 실행될 때 동적으로 가져와 사용
      
      - 운영체제의 동작을 제어
        
        - 시스템 관리를 위해 시스템 레벨의 설정 정보를 저장
      
      - 보안 정보
        
        - 비밀번호, API 키와 같은 중요한 정보를 환경변수로 저장하여 안전하게 관리
      
      - 다양한 환경 지원
        
        - 개발, 테스트, 운영 등 다양한 환경에서 프로그램을 실행하고 동작시키기 위해 환경변수를 사용하여 설정값들을 다르게 할 수 있음
    
    - 접근
      
      - `process.env`
        
        - Node.js의 글로벌 객체로, 현재 프로세스의 환경변수를 담고 있는 속성을 갖고 있음
  
  - 설치
    
    ```bash
    npm install dotenv
    ```
  
  - 사용
    
    - `.env` 파일에 환경변수 입력
      
      ```env
      MONGODB_URL=DB접속URL
      ```
    
    - `.gitignore` 파일에 추가
      
      ```gitignore
      # env
      .env
      ```
    
    - 가져와 사용하기
      
      ```ts
      const url = process.env.MONGODB_URL;
      ```

- `Next-auth`
  
  - 설치
    
    ```bash
    npm install next-auth@4.21.1
    ```
  
  - 세팅
    
    - root/src/pages/api/auth 폴더 생성 후 [...nextauth].ts 파일 생성
      
      ```ts
      import NextAuth from "next-auth";
      import GithubProvider from "next-auth/providers/github";
      
      const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID!;
      const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!;
      
      export const authOptions = {
        // 구현하고 싶은 로그인 방식 입력
        providers: [
          GithubProvider({
            // clientId: "Github에서 발급받은ID",
            clientId: GITHUB_CLIENT_ID,
            // clientSecret: "Github에서 발급받은Secret",
            clientSecret: GITHUB_CLIENT_SECRET,
          }),
        ],
        // secret: "jwt생성시쓰는암호",
        secret: "jwt생성시쓰는암호",
      };
      export default NextAuth(authOptions);
      ```
      
      - clientId와 clientSecret에 undefined 에러가 뜨는 경우 `!`를 변수 뒤에 붙여주어 해당 변수가 undefined 또는 null이 될 수 없음을 강제로 알려줌
  
  - 사용
    
    - 사용하려는 클라이언트 컴포넌트에 signIn 함수 사용 
      
      - signIn 함수 실행 시 로그인페이지 자동이동
    
    - getServerSession
      
      - 로그인 된 유저정보 출력
        
        ```tsx
        import { getServerSession } from "next-auth/next";
        import { authOptions } from "@/pages/api/auth/[...nextauth]";
        
        export default async function RootLayout() {
          await getServerSession(authOptions);
          return (
            ...
          );
        }
        ```
