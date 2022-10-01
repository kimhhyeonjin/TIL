# 큐

## 큐

### 큐의 특성

- 삽입과 삭제의 위치가 제한적인 자료구조
  
  - 큐의 뒤에서는 삽입만 하고, 큐의 앞에서는 삭제만 이루어지는 구조

- 선입선출구조(FIFO: First In First Out)
  
  - 큐에 삽입한 순서대로 원소가 저장되어, 가장 먼저 삽입된 원소는 가장 먼저 삭제

### 큐의 주요 연산

| 연산            | 기능                              |
|:-------------:|:-------------------------------:|
| enQueue(item) | 큐의 뒤쪽(rear 다음)에 원소를 삽입하는 연산     |
| deQueue()     | 큐의 앞쪽(front)에서 원소를 삭제하고 반환하는 연산 |
| createQueue() | 공백 상태의 큐를 생성하는 연산               |
| isEmpty()     | 큐가 공백상태인지를 확인하는 연산              |
| isFull()      | 큐가 포화상태인지를 확인하는 연산              |
| Qpeek()       | 큐의 앞쪽(front)에서 원소를 삭제없이 반환하는 연산 |

## 선형큐

### 선형큐

- 큐의 구현
  
  - 상태 표현
    
    - 초기 상태: front = rear = -1
    
    - 공백 상태: front == rear
    
    - 포화 상태: rear == n-1 (n: 배열의 크기, n-1: 배열의 마지막 인덱스)
  
  - 초기 공백 큐 생성
    
    - 크기 n인 1차원 배열 생성
    
    - front와 rear를 -1로 초기화
  
  - 삽입: enQueue(item)
    
    - 마지막 원소 뒤에 새로운 원소를 삽입하기 위해
      
      - rear값을 하나 증가시켜 새로운 원소를 삽입할 자리를 마련
      
      - 그 인덱스에 해당하는 배열원소에 item을 저장
  
  - 삭제: deQueue()
    
    - 가장 앞에 있는 원소를 삭제하기 위해
      
      - front값을 하나 증가시켜 큐에 남아있게 될 첫번째 원소 이동
      
      - 새로운 첫번째 원소를 리턴함으로써 삭제와 동일한 기능함
  
  - 공백상태 및 포화상태 검사: isEmpty(), isFull()
    
    - 공백상태: front == rear
    
    - 포화상태: rear == n-1
  
  - 검색: Qpeek()
    
    - 가장 앞에 있는 원소를 검색하여 반환하는 연산
    
    - 현재 front의 한자리 뒤(front+1)에 있는 원소, 즉 큐의 첫번째에 있는 원소를 반환

- 선형큐 이용시의 문제점
  
  - 잘못된 포화상태 인식
    
    - 선형큐를 이용하여 원소의 삽입과 삭제를 계속할 경우, 배열의 앞부분에 활용할 수 있는 공간이 있음에도 불구하고 rear=n-1인 상태 즉, 포화상태로 인식하여 더 이상의 삽입을 수행하지 않게 됨
  
  - 해결방법
    
    - 1차원 배열을 사용하되, 논리적으로는 배열의 처음과 끝이 연결되어 원형 형태의 큐를 이룬다고 가정하고 사용
  
  ```python
  N =2
  q = [0] * N
  front = -1
  rear = -1
  
  rear += 1           # enqueue(10)
  q[rear] = 10
  
  rear += 1           # enqueue(20)
  q[rear] = 20
  
  front += 1          # dequeue()
  print(q[front])
  
  front += 1          # dequeue()
  print(q[front])
  ```

## 원형큐

### 원형큐의 구조

- 초기 공백 상태
  
  - front = rear = 0

- Index의 순환
  
  - front와 rear의 위치가 배열의 마지막 인덱스인 n-1을 가리킨 후, 그 다음에는 논리적 순환을 이루어 배열의 처음 인덱스인 0으로 이동
  
  - 나머지 연산자 mod 사용

- front 변수
  
  - 공백 상태와 포화 상태 구분을 쉽게 하기 위해 front가 있는 자리는 사용하지 않고 항상 빈자리로 둠

- 삽입 위치 및 삭제 위치
  
  |     | 삽입 위치                   | 삭제 위치                     |
  |:---:|:-----------------------:|:-------------------------:|
  | 선형큐 | rear = rear + 1         | front = front + 1         |
  | 원형큐 | rear = (rear + 1) mod n | front = (front + 1) mod n |

### 원형큐의 구현

- 초기 공백 큐 생성
  
  - 크기 n인 1차원 배열 생성
  
  - front와 rear를 0으로 초기화

- 공백상태 및 포화상태 검사: isEmpty(), isFull()
  
  - 공백상태: front == rear
  
  - 포화상태: 삽입할 rear의 다음 위치 == 현재 front
    
    - (rear + 1) mod n == front

- 삽입: enQueue(item)
  
  - 마지막 원소 뒤에 새로운 원소를 삽입하기 위해
    
    - rear값을 조정하여 새로운 원소를 삽입할 자리를 마련
      
      - rear = (rear + 1) mod n
    
    - 그 인덱스에 해당하는 배열원소에 item을 저장

- 삭제: deQueue(), delete()
  
  - 가장 앞에 있는 원소를 삭제하기 위해
    
    - front값을 조정하여 삭제할 자리를 준비함
    
    - 새로운 front 원소를 리턴함으로써 삭제와 동일한 기능
  
  ```python
  N = 3
  q = [0] * N
  front = 0
  rear = 0
  
  rear = (rear + 1) % N           # enqueue(10)
  q[rear] = 10
  
  rear = (rear + 1) % N           # enqueue(20)
  q[rear] = 20
  
  rear = (rear + 1) % N           # enqueue(30)
  q[rear] = 30
  
  rear = (rear + 1) % N           # enqueue(40)
  q[rear] = 40
  
  front = (front + 1) % N          # dequeue()
  print(q[front])
  
  front = (front + 1) % N          # dequeue()
  print(q[front])
  
  front = (front + 1) % N          # dequeue()
  print(q[front])
  ```

## BFS(Breadth First Search)

### DFS / BFS

- 그래프를 탐색하는 방법에는 크게 두 가지가 있음
  
  - 깊이우선탐색(Depth First Search, DFS)
  
  - 너비우선탐색(Breadth First Search, BFS)

- 너비우선탐색은 탐색 시작점의 인접한 정점들을 먼저 모두 차례로 방문한 후에, 방문했던 정점을 시작점으로 하여 다시 인접한 정점들을 차례로 방문하는 방식

- 인접한 정점들에 대해 탐색을 한 후 차례로 다시 너비우선탐색을 진행해야 하므로 선입선출 형태의 자료구조인 큐를 활용

```python
def bfs(v, N):  # v: 시작정점, N: 마지막정점
    visited = [0] * (N+1)  # visited 생성
    q = []  # 큐 생성
    q.append(v)  # 시작점 인큐
    visited[v] = 1  # 시작점 처리 표시

    while q:  # 큐가 비어있지 않으면
        v = q.pop(0)  # 디큐
        print(v)  # visit(v)
        for w in adjList[v]:  # 인접하고 미방문(인큐되지 않은) 정점 w가 있으면
            if visited[w] == 0:
                q.append(w)
                visited[w] = visited[v] + 1

V, E = map(int, input().split())
N = V + 1
adjList = [[] for _ in range(N)]
for _ in range(E):
    a, b = map(int, input().split())
    adjList[a].append(b)
    adjList[b].append(a)

bfs(0, V)
```

- 미로 문제 풀기
  
  ```python
  def bfs(i, j, N):
      visited = [[0] * N for _ in range(N)]
      q = []
      q.append((i, j))
      visited[i][j] = 1
      while q:
          i, j = q.pop(0)
          if maze[i][j] == 3:
              return 1
          for di, dj in [[0, 1], [1, 0], [0, -1], [-1, 0]]:
              ni, nj = i+di, j+dj
              if 0 <= ni < N and 0 <= nj < N and maze[ni][nj] != 1 and visited[ni][nj] == 0:
                  q.append((ni, nj))
                  visited[ni][nj] = visited[i][j] + 1
      return 0
  
  T = int(input())
  for tc in range(1, T+1):
      N = int(input())
      maze = [list(map(int, input())) for _ in range(N)]
  
      sti = -1
      stj = -1
      for i in range(N):
          for j in range(N):
              if maze[i][j] == 2:
                  sti, stj = i, j
                  break
          if sti != -1:
              break
      print(f'#{tc} {bfs(sti, stj, N)}')
  ```