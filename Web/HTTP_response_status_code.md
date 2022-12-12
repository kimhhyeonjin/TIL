## HTTP response status code

- 클라이언트에게 특정 HTTP 요청이 성공적으로 완료되었는지 여부를 알려줌

1. Informational responses (100 - 199)

2. Successful responses(200 - 299)

3. Redirection messages(300 - 399)

4. Client error responses(400 - 499)

5. Server error responses(500 - 599)

### 2. Successful responses

- 200 OK
  
  - 정상적으로 응답받음

- 201 Created

- 202 Accepted

- 204 No Content

### 3. Redirection messages

- 302 Found

  - 사용자를 해당 URL의 페이지로 이동시킴

### 4. Client error responses

- 400 Bad Request

- 401 Unauthorized

- 403 Forbidden

- 404 Not Found

- 405 Method Not Allowed
  
  - 요청방법이 서버에게 전달되었으나 사용 불가능한 상태

### 5. Server error responses

- 500 Internal Server Error

- 502 Bad Gateway
