# Database

## Database

### Database

- 체계화된 데이터의 모임

- 여러 사람이 공유하고 사용할 목적으로 통합 관리되는 정보의 집합

- 검색, 구조화 같은 작업을 보다 쉽게 하기 위해 조직화된 데이터를 수집하는 저장 시스템
  
  - 내용을 고도로 구조화함으로써 검색과 갱신의 효율화를 꾀한 것
  
  - 자료 파일을 조직적으로 통합하여 자료 항목의 중복을 없애고 구조화하여 기억시켜 놓은 자료의 집합체

- 이러한 Database를 조작하는 프로그램을 DBMS(Database Management System)라고 함
  
  - Oracle, MySQL, SQLite 등
  
  - DBMS에서 Database를 조작하기 위해 사용하는 언어를 SQL이라고 함

- 웹 개발에서 대부분의 데이터베이스는 RDBMS(관계형 데이터베이스 관리 시스템)를 사용하여 SQL로 데이터와 프로그래밍을 구성

### RDB

- RDB
  
  - Relational Database(관계형 데이터베이스)
  
  - 데이터를 테이블, 행, 열 등으로 나누어 구조화하는 방식
  
  - 자료를 여러 테이블로 나누어서 관리하고, 이 테이블간 관계를 설정해 여러 데이터를 쉽게 조작할 수 있다는 장점이 있음
  
  - SQL을 사용하여 데이터를 조회하고 조작

- RDB 기본 구조
  
  - 스키마(Schema)
    
    - 테이블의 구조(Structure)
    
    - 데이터베이스에서 자료의 구조, 표현 방법, 관계 등 전반적인 명세를 기술한 것
  
  - 테이블(Table)
    
    - 필드와 레코드를 사용해 조직된 데이터 요소들의 집합
    
    - 관계(Relation)라고도 부름
    
    - 필드(field)
      
      - 속성, 컬럼(Column)
    
    - 레코드(record)
      
      - 튜플, 행(Row)
      
      - 테이블의 데이터 저장
    
    - 기본 키(PK, Primary Key)
      
      - 각 레코드의 고유한 값
        
        - 각각의 데이터를 구분할 수 있는 교유값
      
      - 기술적으로 다른 항목과 절대로 중복될 수 없는 단일 값(unique)
      
      - 데이터베이스 관리 및 테이블

- 관계형 데이터베이스의 이점
  
  - 데이터를 직관적으로 표현할 수 있음
  
  - 관련한 각 데이터에 쉽게 접근할 수 있음
  
  - 대량의 데이터도 효율적으로 관리 가능

- RDBMS
  
  - Relational Database Management System(관계형 데이터베이스 관리 시스템)
  
  - 관계형 데이터베이스를 만들고 업데이트하고 관리하는데 사용하는 프로그램
  
  - SQLite, MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database 등

- SQLite
  
  - SQLite
    
    - 응용 프로그램에 파일 형식으로 넣어 사용하는 비교적 가벼운 데이터베이스
    
    - 안드로이드, iOS, macOS에 기본적으로 탑재되어 있으며 임베디드 소프트웨어에서도 많이 활용됨
    
    - 오픈 소스 프로젝트이기 때문에 자유롭게 사용 가능
  
  - 장점
    
    - 어떤 환경에서나 실행 가능한 호환성
    
    - 데이터 타입이 비교적 적고 강하지 않기 때문에 유연한 학습 환경을 제공
    
    - Django Framework의 기본 데이터베이스
  
  - 단점
    
    - 대규모 동시 처리 작업에는 적합하지 않음
    
    - 다른 RDMBS에서 지원하는 SQL 기능을 지원하지 않을 수 있음

## SQL

- Structured Query Language

- RDBMS의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어

- 데이터베이스와 상호작용하는 방법

- RDBMS에서 데이터베이스 스키마를 생성 및 수정할 수 있으며, 테이블에서 자료 검색 및 관리도 할 수 있음

- 데이터베이스 객체에 대한 처리를 관리하거나 접근 권한을 설정하여 허가된 사용자만 RDBMS를 관리할 수 있도록 할 수 있음

- 많은 데이터베이스 관련 프로그램들이 SQL을 표준으로 채택하고 있음

### SQL Commands

- 명령어는 특성에 따라 세 가지 그룹으로 분류
  
  - DDL(Data Definition Language)
  
  - DML(Data Manipulation Language)
  
  - DCL(Data Control Language)
    
    | 분류             | 개념                                                | SQL 키워드                            |
    |:--------------:|:-------------------------------------------------:|:----------------------------------:|
    | DDL(데이터 정의 언어) | 관계형 데이터베이스 구조(테이블, 스키마)를 정의(생성, 수정 및 삭제)하기 위한 명령어 | CREATE / DROP / ALTER              |
    | DML(데이터 조작 언어) | 데이터를 조작(추가, 조회, 변경, 삭제)하기 위한 명령어                  | INSERT / SELECT / UPDATE / DELETE  |
    | DCL(데이터 제어 언어) | 데이터의 보안, 수행제어, 사용자 권한 부여 등을 정의하기 위한 명령어           | GRANT / REVOKE / COMMIT / ROLLBACK |

### SQL Syntax

```sql
-- 예시
SELECT column_name FROM table_name;
```

- 모든 SQL문(statement)은 SELECT, INSERT, UPDATE 등과 같은 키워드로 시작하고, 하나의 statement는 세미콜론(;)으로 끝남
  
  - 세미콜론은 각 SQL문을 구분하는 표준 방법

- SQL 키워드는 대소문자를 구분하지 않음
  
  - SELECT와 select는 SQL문에서 동일한 의미
  
  - 하지만 대문자로 작성하는 것을 권장

## DDL(Data Definition Language)

- `CREATE`, `ALTER`, `DROP`

### CREATE TABLE

- 데이터베이스에 새 테이블을 만듦
  
  ```sql
  CREATE TABLE contacts (
    column_1 data_type constraints,
    column_2 data_type constraints,
    column_3 data_type constraints
  );
  ```

- contacts 테이블 생성
  
  ```sql
  CREATE TABLE contacts (
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    email TEXT NOT NULL UNIQUE
  --   마지막에 , 붙이지 않음
  );
  ```

- Query 실행하기

- 쿼리 실행 후 테이블 및 스키마 확인
  
  - id 컬럼은 우리가 직접 기본 키 역할의 컬럼을 정의하지 않으면 자동으로 rowid라는 컬럼으로 만들어짐

### SQLite Data Types

- Data Type
  
  - NULL
    
    - NULL value
    
    - 정보가 없거나 알 수 없음(missing information or unknown)
    
    - 값이 따옴표 없이 NULL인 경우
  
  - INTEGER
    
    - 정수
    
    - 크기에 따라 0, 1, 2, 3, 4, 6 또는 8 바이트와 같은 가변 크기를 가짐
    
    - 값에 둘러싸는 따옴표와 소수점 또는 지수가 없는 경우
  
  - REAL
    
    - 실수
    
    - 8 바이트 부동 소수점을 사용하는 10진수 값이 있는 실수
    
    - 값에 따옴표나 소수점, 지수가 없는 경우
  
  - TEXT
    
    - 문자 데이터
    
    - 값이 작은 따옴표나 큰 따옴표로 묶이는 경우
  
  - BLOB(Binary Large Object)
    
    - 입력된 그대로 저장된 데이터 덩어리(대용 타입 없음)
    
    - 바이너리 등 멀티미디어 파일
    
    - 이미지 데이터 등

- 참고
  
  - Boolean type
    
    - SQLite에는 별도의 Boolean 타입이 없음
    
    - Boolean 값은 정수 0(false)과 1(true)로 저장됨
  
  - Date & Time Datatype
    
    - SQLite에는 날짜 및 시간을 저장하기 위한 타입이 없음
    
    - SQLite의 built-in 'Date And Time Functions'를 이용해 TEXT, REAL 또는 INTEGER 값으로 저장할 수 있음
  
  - Binary Data
    
    - 데이터의 저장과 처리를 목적으로 0과 1의 이진 형식으로 인코딩 된 파일
    
    - 기본적으로 컴퓨터의 모든 데이터는 binary data
      
      - 필요에 따라 이를 텍스트 타입으로 변형해서 사용하는 것

- SQLite Datatypes 특징
  
  - SQLite는 다른 모든 SQL 데이터베이스 엔진(MySQL, PostgreSQL 등)의 정적이고 엄격한 타입(static, rigid typing)이 아닌 '동적 타입 시스템(dynamic type system)'을 사용
    
    - 컬럼에 선언된 데이터 타입에 의해서가 아니라 컬럼에 저장된 값에 따라 데이터 타입이 결정됨
  
  - 테이블을 생성할 때 컬럼에 대해 특정 데이터 타입을 선언하지 않아도 됨
    
    - SQLite의 동적 타입 시스템을 사용하면 기존의 엄격하게 타입이 지정된 데이터베이스에서는 불가능한 작업을 유연하게 수행할 수 있음
    
    - 정적 타입 시스템이 지정된 데이터베이스에서 작동하는 SQL문이 SQLite에서 동일한 방식으로 작동
    
    - 하지만 다른 데이터베이스와의 호환성 문제가 있기 때문에 테이블 생성 시 데이터 타입을 지정하는 것을 권장
  
  - 데이터 타입을 지정하게 되면 SQLite는 입력된 데이터의 타입을 지정된 데이터 타입으로 변환

### Constraints(제약조건)

- constraints
  
  - 입력하는 자료에 대해 제약을 정함
  
  - 제약에 맞지 않다면 입력이 거부됨
  
  - 사용자가 원하는 조건의 데이터만 유지하기 위한(데이터의 무결성을 유지하기 위한) 보편적인 방법으로 테이블의 특정 컬럼에 설정하는 제약

- 데이터 무결성
  
  - 무결성
    
    - 데이터의 정확성, 일관성을 의미
  
  - 데이터 베이스 내의 데이터에 대한 정확성, 일관성을 보장하기 위해 데이터 변경 혹은 수정 시 여러 제한을 두어 데이터의 정확성을 보증하는 것
  
  - 데이터베이스에 저장된 데이터의 무결성을 보장하고 데이터베이스의 상태를 일관되게 유지하는 것이 목적

- Constraints 종류
  
  - NOT NULL
    
    - 컬럼이 NULL 값을 허용하지 않도록 지정
    
    - 기본적으로 테이블의 모든 컬럼은 NOT NULL 제약 조건을 명시적으로 사용하는 경우를 제외하고는 NULL 값을 허용
  
  - UNIQUE
    
    - 컬럼의 모든 값이 서로 구별되거나 고유한 값이 되도록 함
  
  - PRIMARY KEY
    
    - 테이블에서 행의 고유성을 식별하는데 사용되는 컬럼
    
    - 각 테이블에는 하나의 기본 키만 있음
    
    - 암시적으로 NOT NULL 제약 조건이 포함되어 있음
    
    ```sql
    CREATE TABLE table_name (
      id INTEGER PRIMARY KEY,
      ...
    );
    ```
    
    - INTEGER 타입에만 사용가능 (INT 등과 같은 다른 표현 불가능)
  
  - AUTOINCREMENT
    
    - 사용되지 않은 값이나 이전에 삭제된 행의 값을 재사용하는 것을 방지
    
    - INTEGER PRIMARY KEY 다음에 작성하면 해당 rowid를 다시 재사용하지 못하도록 함
    
    ```sql
    CREATE TABLE table_name (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ...
    );
    ```
    
    - Django에서 테이블 생성 시 id 컬럼에 기본적으로 사용하는 제약조건
  
  - rowid
    
    - 테이블을 생성할 때마다 rowid라는 암시적 자동 증가 컬럼이 자동으로 생성됨
    
    - 테이블의 행을 고유하게 식별하는 64비트의 정수 값
    
    - 테이블에 새 행을 삽입할 때마다 정수 값을 자동으로 할당
      
      - 값은 1부터 시작
      
      - 데이터 삽입 시에 rowid 또는 INTEGER PRIMARY KEY 컬럼에 명시적으로 값이 지정되지 않은 경우, SQLite는 테이블에서 가장 큰 rowid보다 하나 큰 다음 순차 정수를 자동으로 할당(AUTOINCREMENT와 관계없이)
    
    - 만약 INTEGER PRIMARY KEY 키워드를 가진 컬럼을 직접 만들면 이 컬럼은 rowid 컬럼의 alias가 됨
      
      - 즉 새 컬럼 이름으로 rowid에 액세스할 수 있으며 rowid 이름으로도 여전히 액세스 가능
    
    - 데이터가 최대 값(행의 최대 개수(이론상): 2^64)에 도달하고 새 행을 삽입하려고 하면 SQLite는 사용되지 않는 정수를 찾아 사용
    
    - 만약 SQLite가 사용되지 않은 정수를 찾을 수 없으면 SQLITE_FULL 에러가 발생
      
      - 일부 행을 삭제하고 새 행을 삽입하면 SQLite는 삭제된 행에서 rowid 값을 재사용하려고 시도

### ALTER TABLE

- 기존 테이블의 구조를 수정(변경)
1. **Rename** a table
   
   ```sql
   ALTER TABLE talbe_name RENAME TO new_table_name;
   ```

2. **Rename** a column
   
   ```sql
   ALTER TABLE talbe_name RENAME COLUMN column_name TO new_column_name;
   ```

3. **Add** a new column to a table
   
   ```sql
   ALTER TABLE talbe_name ADD COLUMN column_definition;
   ```
   
   - 만약 테이블에 기존 데이터가 있을 경우 아래와 같은 에러 발생
   
   - `Cannot add NOT NULL column with default value NULL`
   
   - 이전에 이미 저장된 데이터들은 새롭게 추가되는 컬럼에 값이 없기 때문에 NULL이 작성됨
   
   - 그런데 새로 추가되는 컬럼에 NOT NULL 제약조건이 있기 때문에 기본 값 없이는 추가될 수 없다는 에러가 발생
   
   - 아래와 같이 DEFAULT 제약 조건을 사용하여 해결할 수 있음
     
     ```sql
     ALTER TABLE talbe_name ADD COLUMN column_definition DEFAULT 'no address';
     -- 예시
     ALTER TABLE contact ADD COLUMN address TEXT NOT NULL DEFAULT 'no address';
     ```
   
   - address 컬럼이 추가되면서 기존에 있던 데이터들의 address 컬럼값은 'no address'가 됨

4. **Delete** a column
   
   ```sql
   ALTER TABLE talbe_name DROP COLUMN column_name;
   ```
   
   - 삭제하지 못하는 경우
     
     - 컬럼이 다른 부분에서 참조되는 경우
       
       - FOREIGN KEY(외래 키) 제약조건에서 사용되는 경우
     
     - PRIMARY KEY인 경우
     
     - UNIQUE 제약 조건이 있는 경우

### DROP TABLE

- 데이터베이스에서 테이블을 제거
  
  ```sql
  DROP TABLE table_name;
  ```

- 존재하지 않는 테이블을 제거하면 SQLite에서 오류가 발생
  
  `no such table: table_name`

- DROP TABLE 특징
  
  - 한 번에 하나의 테이블만 삭제할 수 있음
  
  - 여러 테이블을 제거하려면 여러 DROP TABLE문을 실행해야 함
  
  - DROP TABLE문은 실행 취소하거나 복구할 수 없음

## DML(Data Manipulation Language)

- `INSERT`, `SELECT`, `UPDATE`, `DELETE`

- 각각 C, R, U, D에 해당

- CSV 파일을 SQLite 테이블로 가져오기
  
  - sqlite3 tool이용
  1. `$ sqlite3`
  
  2. sql 파일 생성
     
     ```sql
     CREATE TABLE table_name (
      column_1 TEXT NOT NULL,
      column_2 TEXT NOT NULL,
      column_3 INTEGER NOT NULL,
      column_4 TEXT NOT NULL,
      column_5 TEXT NOT NULL,
      column_6 INTEGER NOT NULL
     );
     ```
  
  3. 테이블 생성
  
  4. 데이터베이스 파일 열기
     
     `sqlite> .open 파일명.sqlite3`
  
  5. 모드(.mode)를 csv로 설정
     
     `sqlite> .mode csv`
  
  6. .import 명령어를 사용하여 csv 데이터를 테이블로 가져오기
     
     `sqlite> .import users.csv users`
  
  7. import된 데이터 확인하기

### Simple query

- SELECT statement
  
  - 특정 테이블에서 데이터를 조회하기 위해 사용
  
  ```sql
  SELECT column1, column2 FROM table_name;
  ```
  
  - SELECT절에서 컬럼 또는 쉼표로 구분된 컬럼 목록을 지정
  
  - FROM절에서 데이터를 가져올 테이블을 지정
  
  - 전체 데이터 조회하기
  
  ```sql
  SELECT * FROM table_name;
  ```
  
  - rowid컬럼 조회하기
  
  ```sql
  SELECT rowid FROM table_name;
  ```

### Sorting rows

- ORDER BY 절을 이용하여 정렬

- **ORDER BY**  절
  
  ```sql
  SELECT select_list FROM table_name
  ORDER BY column_1 ASC, column_2 DESC;
  ```
  
  - SELECT문에 추가하여 결과를 정렬
  
  - ORDER BY 절은 FROM 절 뒤에 위치함
  
  - 하나 이상의 컬럼을 기준으로 결과를 오름차순, 내림차순으로 정렬할 수 있음
  
  - ASC: 오름차순(기본값)
  
  - DESC: 내림차순

- Sorting NULLs
  
  - NULL의 정렬 방식
  
  - SQLite는 NULL을 다른 값보다 작은 것으로 간주
  
  - 즉, ASC를 사용하는 경우 결과의 시작 부분에 NULL이 표시되고, DESC를 사용하는 경우 결과의 끝에 NULL이 표시됨

### Filtering data

- 데이터를 필터링하여 중복 제거, 조건 설정 등 쿼리를 제어

- **SELECT DISTINCT** 절
  
  - 조회 결과에서 중복된 행을 제거
  
  ```sql
  SELECT DISTINCT select_list FROM table_name;
  ```
  
  - DISTINCT 절은 SELECT에서 선택적으로 사용할 수 있는 절
  
  - DISTINCT절은 SELECT 키워드 바로 뒤에 나타나야 함
  
  - DISTINCT 키워드 뒤에 컬럼 또는 컬럼 목록을 작성
  
  - DISTINCT 절에서의 **NULL**
    
    - SQLite는 NULL값을 중복으로 간주
    
    - NULL값이 있는 컬럼에 DISTINCT 절을 사용하면 SQLite는 NULL값의 한 행을 유지

- **WHERE** 절
  
  - 조회 시 특정 검색 조건을 지정
  
  ```sql
  SELECT column_list FROM table_name WHERE search_condition;
  ```
  
  - SELECT문에서 선택적으로 사용할 수 있는 절
    
    - SELECT문 외에도 UPDATE 및 DELETE문에서 WHERE절을 사용할 수 있음
  
  - FROM절 뒤에 작성
  
  - 예시
    
    ```sql
    WHERE column_1 = 10
    WHERE column_2 LIKE 'Ko%'
    WHERE column_3 LIKE 'Ko_'
    WHERE column_4 IN (1, 2)
    WHERE column_5 BETWEEN 10 AND 20
    ```

- **LIKE** 연산자
  
  - 패턴 일치를 기반으로 데이터를 조회
  
  - SELECT, DELETE, UPDATE 문의 WHERE절에서 사용
  
  - 대소문자 구분하지 않음

- 와일드카드
  
  - `%` (percent)
    
    - 0개 이상의 문자가 올 수 있음
  
  - `_` (underscore)
    
    - 단일(1개) 문자가 있음

- **IN** 연산자
  
  - 값이 값 목록 결과에 있는 값과 일치하는지 확인
  
  - 표현식이 값 목록의 값과 일치하는지 여부에 따라 true 또는 false를 반환
  
  - IN 연산자의 결과를 부정하려면 `NOT IN` 연산자를 사용

- **BETWEEN** 연산자
  
  - 값이 값 범위에 있는지 테스트
  
  - 값이 지정된 범위에 있으면 true를 반환
  
  - SELECT, DELETE 및 UPDATE 문의 WHERE 절에서 사용할 수 있음
  
  - BETWEEN 연산자의 결과를 부정하려면 `NOT BETWEEN` 연산자를 사용

- **LIMIT** 절
  
  - 쿼리에서 반환되는 행 수를 제한
  
  ```sql
  SELECT column_list FROM table_name LIMIT row_count;
  ```
  
  - SELECT문에서 선택적으로 사용할 수 있는 절
  
  - row_count는 반환되는 행 수를 지정하는 양의 정수를 의미
  
  - OFFSET
    
    - LIMIT 절을 사용하면 첫 번째 데이터부터 지정한 수만큼 데이터를 받아올 수 있지만, OFFSET과 함께 사용하면 특정 지정된 위치에서부터 데이터를 조회할 수 있음
    - 11번째부터 20번째 데이터 조회하기
    
    ```sql
    SELECT column_list FROM table_name LIMIT 10 OFFSET 10;
    ```

### Grouping data

- **GROUP BY** 절
  
  - 특정 그룹으로 묶인 결과를 생성
  
  - 선택된 컬럼 값을 기준으로 데이터(행)들의 공통 값을 묶어서 결과로 나타냄
  
  - SELECT문에서 선택적으로 사용가능한 절
  
  - SELECT문의 FROM절 뒤에 작성
    
    - WHERE절이 포함된 경우 WHERE절 뒤에 작성
  
  - 각 그룹에 대해 집계함수(aggregate function)를 적용하여 각 그룹에 대한 추가적인 정보를 제공할 수 있음
    
    - COUNT(*): 전체 행 수 조회
    
    - AVG(), COUNT(), MAX(), MIN(), SUM()
    
    - 숫자를 기준으로 계산해야 하기 때문에 반드시 컬럼의 데이터 타입이 숫자(INTEGER)일 때만 사용 가능
    
    - AS 키워드를 이용해 컬럼명을 임시로 변경하여 조회할 수 있음
      
      ```sql
      SELECT column_1, COUNT(*) AS number_of_column FROM table_name;
      ```

### Changing data

- `INSERT`, `UPDATE`, `DELETE`

- INSERT statement
  
  - 새 행을 테이블에 삽입
  
  ```sql
  INSERT INTO table_name (column1, column2, ...)
  VALUES (value1, value2, ...);
  ```
  
  - INSERT INTO 키워드 뒤에 데이터를 삽입할 테이블의 이름을 지정
  
  - 테이블 이름 뒤에 쉼표로 구분된 컬럼 목록을 추가
    
    - 컬럼 목록은 선택 사항이지만 컬럼 목록을 포함하는 것이 권장됨
  
  - VALUES 키워드 뒤에 쉼표로 구분된 값 목록을 추가
    
    - 만약 컬럼 목록을 생략하는 경우 값 목록의 모든 컬럼에 대한 값을 지정해야 함
    
    - 값 목록의 개수는 컬럼 목록의 컬럼 개수와 같아야 함

- UPDATE statement
  
  - 테이블에 있는 기존 행의 데이터를 업데이트
  
  ```sql
  UPDATE table_name
  SET column_1 = new_value_1,
      column_2 = new_value_2,
  WHERE search_condition;
  ```
  
  - UPDATE 절 이후에 업데이트할 테이블을 지정
  
  - WHERE절의 조건을 사용하여 업데이트할 행을 지정
    
    - 선택사항이며 생략 시 테이블의 모든 행에 있는 데이터를 업데이트
  
  - 선택적으로 ORDER BY 및 LIMIT 절을 사용하여 업데이트할 행 수를 지정할 수도 있음

- DELETE statement
  
  - 테이블에서 행을 제거
  
  ```sql
  DELETE FROM table_name WHERE search_condition;
  ```
  
  - 테이블의 한 행, 여러 행 및 모든 행을 삭제할 수 있음
  
  - DELETE FROM 키워드 뒤에 행을 제거하려는 테이블의 이름을 지정
  
  - WHERE절에 검색 조건을 추가하여 제거할 행을 식별
    
    - 선택사항이며 생략 시 테이블의 모든 행을 삭제
  
  - 선택적으로 ORDER BY 및 LIMIT 절을 사용하여 삭제할 행 수를 지정할 수도 있음
