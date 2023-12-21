# SQL

### 문자열 자르기

- SUBSTRING / LEFT / RIGHT
  
  ```sql
  SUBSTRING(문자열, 시작위치, 길이)
  // 문자열에서 시작 위치부터 길이만큼 출력
  
  LEFT(문자열, 길이)
  // 문자열에서 왼쪽부터 길이만큼 출력
  
  RIGHT(문자열, 길이)
  // 문자열에서 오른쪽부터 길이만큼 출력
  ```
  
  - 예시
    
    ```sql
    SELECT SUBSTRING(WORD, 1, 2), LEFT(WORD, 1), RIGHT(WORD, 2)
    FROM LIST
    ```

### 날짜 및 시간 함수

- FORMAT_DATE
  
  - 날짜를 지정한 형식으로
    
    ```sql
    SELECT DATE_FORMAT(PUBLISHED_DATE, '%Y-%m-%d') AS PUBLISHED_DATE
    ```
    
    - `%Y`
      
      - 4자리 년도
    
    - `%y`
      
      - 2자리 년도
    
    - `%M`
      
      - 긴 월, 영문
    
    - `%b`
      
      - 짧은 월, 영문
    
    - `%m`
      
      - 긴 월, 숫자
    
    - `%c`
      
      - 짧은 월, 숫자
    
    - `%d`
      
      - 긴 일자
    
    - `%e`
      
      - 짧은 일자
    
    - `%W`
      
      - 긴 요일, 영문
    
    - `%a`
      
      - 짧은 요일, 영문
    
    - `%I`
      
      - 시간, 12시간
    
    - `%H`
      
      - 시간, 24시간
    
    - `%i`
      
      - 분
    
    - `%S`
      
      - 초
    
    - `%T`
      
      - `hh:mm:ss`
    
    - `%r`
      
      - `hh:mm:ss AM, PM`

### JOIN

- SELF JOIN
  
  ```sql
  SELECT 열목록
  FROM 테이블 AS A JOIN 테이블 AS B
  WHERE 검색조건
  ```
  
  - 예시
    
    ```sql
    SELECT DISTINCT A.USER_ID, A.PRODUCT_ID
    FROM ONLINE_SALE AS A JOIN ONLINE_SALE AS B
    ON A.USER_ID = B.USER_ID AND A.PRODUCT_ID = B.PRODUCT_ID
    WHERE A.SALES_DATE != B.SALES_DATE
    ORDER BY USER_ID ASC, PRODUCT_ID DESC
    ```
