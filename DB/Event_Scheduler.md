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
