# SQL

## SQL 문법 순서와 실행 순서

- SQL 문법 순서
  
  ```sql
  SELECT 컬럼명
  FROM 테이블명
  WHERE 테이블 조건
  GROUP BY 컬럼명
  HAVING 그룹 조건
  ORDER BY 컬럼명
  ```

- SQL 실행 순서
  
  ```sql
  FROM -- 각 테이블 확인
  ON -- 조인 조건 확인
  JOIN -- 테이블 조인 (병합)
  WHERE -- 데이터 추출 조건 확인
  GROUP BY -- 특정 칼럼으로 데이터 그룹화
  CUBE | ROLLUP
  HAVING -- 그룹화 이후 데이터 추출 조건 확인
  SELECT -- 데이터 추출
  DISTINCT -- 중복 제거
  ORDER BY -- 데이터 정렬
  TOP
  ```

### Select절

- CASE WHEN
  
  - 프로그래밍 언어에서의 IF문과 유사
    
    ```sql
    CASE 컬럼
    WHEN 조건1 THEN 값1
    WHEN 조건2 THEN 값2
    ELSE 값3
    END
    ```
    
    - 예시
      
      ```sql
      SELECT ADDRESS, CASE WHEN FREEZER_YN IS NULL THEN 'N' ELSE FREEZER_YN END AS FREEZER_YN
      ```

### Where절

- IN 연산자
  
  - Where 절 내에서 특정값 여러 개를 선택하는 연산자
    
    ```sql
    SELECT * FROM 테이블명
    WHERE 컬럼명 IN (값1, 값2, ...);
    ```
    
    - 예시
      
      ```sql
      SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
      FROM ANIMAL_INS
      WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
      ORDER BY ANIMAL_ID
      ```

- LIKE 연산자
  
  - 문자열 부분일치 검색
    
    - `_`
      
      - 한 글자 문자
    
    - `%`
      
      - 모든 문자
    
    - 예시
      
      ```sql
      WHERE ADDRESS LIKE '경기도%'
      ```

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

- DATE_FORMAT
  
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

### 결과값 개수 제한

- MySql
  
  - LIMIT
    
    - 쿼리가 ORDER BY 절까지 모두 실행 후 해당 결과에서 원하는 행의 데이터를 가져옴
  
  - `LIMIT 개수`
    
    ```sql
    SELECT 컬럼명
    FROM 테이블명
    LIMIT 개수
    ```
    
    - 0번부터 개수개 만큼의 결과 반환
    
    - 예시
      
      ```sql
      SELECT NAME
      FROM ANIMAL_INS
      ORDER BY DATETIME
      LIMIT 1
      ```
  
  - `LIMIT offset, 개수`
    
    ```sql
    SELECT 컬럼명
    FROM 테이블명
    LIMIT offset, 개수
    ```
    
    - offset번부터 개수개 만큼의 결과 반환
      
      - 0번부터 셈
    
    - 예시
      
      ```sql
      SELECT NAME
      FROM ANIMAL_INS
      ORDER BY DATETIME
      LIMIT 2, 3
      ```
      
      - 3번째 행부터 3개 반환

- Oracle
  
  - ROWNUM
    
    - 쿼리가 완전히 수행되지 않은 원 데이터의 정렬순서대로 번호를 매김
    
    - SELECT절로 한번 감싼후에 ROWNUM으로 조건을 주면 LIMIT와 동일한 결과가 출력
    
    - 예시
      
      ```sql
      SELECT NAME 
      FROM (
          SELECT NAME
          FROM ANIMAL_INS
          ORDER BY DATETIME
      )
      WHERE ROWNUM = 1
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

- OUTER JOIN
  
  ![File:Joins del SQL.svg](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Joins_del_SQL.svg/691px-Joins_del_SQL.svg.png?20210224114301)
  
  - LEFT OUTER JOIN
  
  - RIGHT OUTER JOIN
  
  - FULL OUTER JOIN
