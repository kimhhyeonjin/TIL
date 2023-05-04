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
