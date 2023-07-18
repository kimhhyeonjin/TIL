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
