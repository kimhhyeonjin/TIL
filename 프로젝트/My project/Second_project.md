# 두 번째 프로젝트

## 시작

- WebRTC
  
  - Web Real-Time Communication
  
  - 웹 브라우저 간 플러그인의 도움 없이 P2P 연결을 통해 서로 통신할 수 있도록 설계된 API
    
    - P2P
      
      - peer-to-peer network / 동등 계층간 통신망

- OpenVidu
  
  - 웹 또는 모바일 애플리케이션에서 화상 통화를 쉽게 추가할 수 있는 플랫폼
  
  - Kurento기반의 중개 서버를 애플리케이션에 쉽게 추가할 수 있도록 완전한 기술스택을 제공함
    
    - Kurento
      
      - WebRTC 미디어 서버 역할을 함과 동시에 WebRTC 기술을 이용해 애플리케이션 개발을 돕는 클라이언트 API세트

## 마지막

- Refactoring
  
  - 결과의 변경 없이 코드의 구조를 재조정하는 것
  
  - 가독성을 높이고 유지보수를 편하게 함

#### 코드

- redux-persist
  
  - redux의 store는 새로고침할 경우 state가 날라감
    
    - localStorage 또는 session에 원하는 state를 저장하여 새로고침해도 state가 날라가지 않도록 하기 위한 라이브러리
  
  - 설치
    
    ```bash
    npm install redux-persist
    ```
  
  - 사용
    
    - localStorage 저장
      
      ```js
      import storage from "redux-persist/lib/storage";
      ```
    
    - session Storage 저장
      
      ```js
      import storageSession from "redux-persist/lib/storage/session""
      ```