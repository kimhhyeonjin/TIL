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
  
  - db 입출력 코드는 server component 안에서만 사용하기
