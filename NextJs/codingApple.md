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