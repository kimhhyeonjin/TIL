# Event_Scheduler

### MySQL

[MySQL 공식 홈페이지](https://www.mysql.com/)

### Event Scheduler

- 기초작업
  
  - Event Scheduler의 사용여부 확인
    
    ```sql
    SHOW VARIABLES LIKE 'event%';
    ```
  
  - Value가 OFF인 경우 ON으로 설정
    
    ```sql
    SET GLOBAL event_scheduler = ON;
    ```
  
  - DB 생성
    
    ```sql
    CREATE DATABASE testdb;
    USE testdb;
    ```
  
  - table 생성
    
    ```sql
    CREATE TABLE testtable(
        num INT AUTO_INCREMENT PRIMARY KEY,
        currenttime DATETIME NOT NULL
    );
    ```
  
  - table 조회
    
    ```sql
    DESCRIBE testtable;
    ```

- Event Scheduler
  
  - [Event Statement 생성하기](https://dev.mysql.com/doc/refman/8.0/en/create-event.html)
    
    ```sql
    CREATE
        [DEFINER = user]
        EVENT
        [IF NOT EXISTS]
        event_name
        ON SCHEDULE schedule
        [ON COMPLETION [NOT] PRESERVE]
        [ENABLE | DISABLE | DISABLE ON SLAVE]
        [COMMENT 'string']
        DO event_body;
    
    schedule: {
        AT timestamp [+ INTERVAL interval] ...
      | EVERY interval
        [STARTS timestamp [+ INTERVAL interval] ...]
        [ENDS timestamp [+ INTERVAL interval] ...]
    }
    
    interval:
        quantity {YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE |
                  WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE |
                  DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND}
    ```
  
  - 예시
    
    - 1분마다 데이터가 등록되는 Event Scheduler 작성
      
      ```sql
      CREATE EVENT insertdata
      ON SCHEDULE EVERY 1 MINUTE
      DO INSERT INTO testtable SET currenttime=now();
      ```
    
    - 특정 기간 동안만 반복 실행되는 Event Scheduler 작성
      
      ```sql
      CREATE EVENT specifictimedata
      ON SCHEDULE EVERY 10 SECOND
      STARTS CURRENT_TIMESTAMP
      ENDS CURRENT_TIMESTAMP + INTERVAL 2 MINUTE
      ON COMPLETION PRESERVE
      DO INSERT INTO testtable SET currenttime=now();
      ```
  
  - Event Statement 삭제하기
    
    ```sql
    DROP EVENT [IF EXISTS] event_name;
    ```
  
  - Event Statement 조회
    
    ```sql
    SHOW EVENTS
        [{FROM | IN} schema_name]
        [LIKE 'pattern' | WHERE expr];
    ```
    
    ```sql
    SELECT * FROM information_schema.EVENTS;
    ```
