# APS(Algorithm Problem Solving) 응용 4

## 그래프

### 그래프

- 그래프
  
  - 아이템(사물 또는 추상적 개념)들과 이들 사이의 연결관계를 표현
  
  - 정점의 집합과 이들을 연결하는 간선의 집합으로 구성된 자료
    
    - V개의 정점을 가지는 그래프는 최대 V*(V-1)/2개의 간선이 가능
  
  - 선형 자료구조나 트리 자료구조로 표현하기 어려운 N:N 관계를 가지는 원소를 표현하기에 용이

- 그래프 유형
  
  - 무향 그래프(Undirected Graph)
  
  - 유향 그래프(Directed Graph)
  
  - 가중치 그래프(Weighted Graph)
  
  - 사이클이 없는 방향 그래프(DAG, Directed Acyclic Graph)
  
  - 완전 그래프
    
    - 정점에 대해 가능한 모든 간선을 가진 그래프
    
    - 완전 그래프에 속한 임의의 두 정점들은 모두 인접해있음
  
  - 부분 그래프
    
    - 원래 그래프에서 일부의 정점이나 간선을 제외한 그래프

- 그래프 경로
  
  - 간선을 순서대로 나열한 것
  
  - 단순경로
    
    - 경로 중 한 정점을 최대한 한번만 지나는 경로
  
  - 사이클
    
    - 시작한 정점에서 끝나는 경로

- 그래프 표현
  
  - 간선의 정보를 저장하는 방식, 메모리나 성능을 고려해서 결정
  
  - 인접 행렬(Adjacent matrix)
    
    - 두 정점을 연결하는 간선의 유무를 행렬로 표현
    
    - V x V 정방 행렬
    
    - 행 번호와 열 번호는 그래프의 정점에 대응
    
    - 두 정점이 인접되어 있으면 1, 그렇지 않으면 0으로 표현
    
    - 무향 그래프
      
      - i번째 행의 합 = i번째 열의 합 = Vi의 차수
    
    - 유향 그래프
      
      - 행 i의 합 = Vi의 진출 차수
      
      - 열 i의 합 = Vi의 진입 차수
    
    - 단점
      
      - 정점의 개수가 매우 많을 때(1,000개 이상) 사용하기 힘듦
  
  - 인접 리스트
    
    - 각 정점에 대한 인점 정점을 순차적으로 표현
    
    - 하나의 정점에 대한 인접 정점을 각각 노드로 하는 연결 리스트로 저장

### DFS

- 그래프 순회(탐색)
  
  - 비선형구조인 그래프로 표현된 모든 자료를 빠짐없이 탐색
  
  - 두 가지 방법
    
    - 깊이 우선 탐색(Depth First Search, DFS)
    
    - 너비 우선 탐색(Breadth First Search, BFS)

- DFS(깊이우선탐색)
  
  - 시작 정점의 한 방향으로 갈 수 있는 경로가 있는 곳까지 깊이 탐색해 가다가 더 이상 갈 곳이 없게 되면, 가장 마지막에 만났던 갈림길 간선이 있는 정점으로 되돌아와서 다른 방향의 정점으로 탐색을 계속 반복하여 결국 모든 정점을 방문하는 순회방법
  
  - 가장 마지막에 만났던 갈림길의 정점으로 되돌아가서 다시 깊이 우선 탐색을 반복해야 하므로 후입선출 구조의 스택 사용

### BFS

- BFS(너비우선탐색)
  
  - 탐색 시작점의 인접한 정점을 먼저 차례로 모두 방문한 후에, 방문했던 정점을 시작점으로 하여 다시 인접한 정점들을 차례로 방문하는 방식
  
  - 인접한 정점들에 대해 탐색을 한 후, 차례로 다시 너비우선탐색을 진행해야 하므로, 선입선출 형태의 자료구조인 큐를 사용

### 서로소 집합

- 서로소 집합(Disjoint-sets)
  
  - 서로소 또는 상호배타 집합: 서로 중복 포함된 원소가 없는 집합
  
  - 집합에 속한 하나의 특정 멤버(대표자: representative)를 통해 각 집합을 구분

- 상호배타 집합을 표현하는 방법
  
  - 연결 리스트
  
  - 트리

- 상호배타 집합 연산
  
  - Make-Set(x): 유일한 원소 x를 포함하는 새로운 집합을 생성하는 연산
    
    ```python
    def make_set(x):
        rep[x] = x
    ```
  
  - Find-Set(x): x를 포함하는 집합을 찾아 대표자를 return하는 연산
    
    ```python
    def find_set(x):
        while x != rep[x]:
            x = rep[x]
        return x
    ```
  
  - Union(x, y): x와 y를 포함하는 두 집합을 통합하는 연산(x의 대표자가 대표자)
    
    ```python
    def union(x, y):
        rep[find_set(y)] = find_set(x)
    ```
  
  - 연산의 효율을 높이는 방법
    
    - Rank를 이용한 Union
      
      - 각 노드는 자신을 루트로 하는 subtree의 높이를 rank라는 이름으로 저장
      
      - 두 집합을 합칠 때 rank가 낮은 집합을 rank가 높은 집합에 붙여 효율을 높임
    
    - path compression
      
      - find-set을 행하는 과정에서 만나는 모든 노드들이 직접 루트를 가리키도록 포인터를 바꿈

- 상호 배타 집합 표현 - 트리
  
  - 하나의 집합을 하나의 트리로 표현
  
  - 자식 노드가 부모 노드를 가리키며 루트 노드가 대표자

### 최소 비용 신장 트리(MST)

- 그래프에서 최소 비용 문제
  
  - 모든 정점을 연결하는 간선의 가중치의 합이 최소가 되는 트리 (MST)
  
  - 두 정점 사이의 최소 비용의 경로 찾기 (dijkstra)

- 신장 트리
  
  - n개의 정점으로 이루어진 무방향 그래프에서 n개의 정점과 n-1개의 간선으로 이루어진 트리

- 최소 신장 트리(Minimum Spanning Tree)
  
  - 무방향 가중치 그래프에서 신장 트리를 구성하는 간선들의 가중치의 합이 최소인 신장 트리

- MST 표현
  
  ```python
  V, E = map(int, input().split())            # 정점 수, 간선 수
  adjM = [[0]*(V+1) for _ in range(V+1)]      # 인접 행렬
  adjL = [[] for _ in range(V+1)]             # 인접 리스트
  for _ in range(E):
      u, v, w = map(int, input().split())     # u, v, w 형태로 데이터가 들어올 때
      adjM[u][v] = w
      adjM[v][u] = w
      adjL[u].append((v, w))
      adjL[v].append((u, w))
  ```

- Prim 알고리즘
  
  - 하나의 정점에서 연결된 간선 중 하나씩 선택하면서 MST를 만들어 가는 방식
    
    1) 임의의 정점을 선택
    
    2) 선택한 정점과 인접하는 정점 중 최소 비용의 간선이 존재하는 정점 선택
    
    3) 모든 정점이 선택될 때까지 위의 과정을 반복
  
  - 서로소인 2개의 집합(2 disjoint-sets) 정보를 유지
    
    - 트리 정점들(tree vertices): MST를 만들기 위해 선택된 정점들
    
    - 비트리 정점들(nontree vertices): 선택되지 않은 정점들
  
  - Kruskal과 비교했을 때의 단점
    
    - 속도가 느림
    
    - 정점의 수가 많아지면 인접행렬을 만들 때 낭비가 심함
  
  ```python
  def prim1(r, V):
      MST = [0] * (V+1)           # MST 포함여부
      key = [10000] * (V+1)       # 가중치의 최대값 이상으로 초기화, key[v]는 v가 MST에 속한 정점과 연결될 비용
      key[r] = 0                  # 시작정점의 key
      for _ in range(V):          # V+1개의 정점 중 V개를 선택
          # MST에 포함되지 않은 정점 중(MST[u]==0), key가 최소인 u 찾기
          u = 0
          minV = 10000
          for i in range(V+1):
              if MST[i] == 0 and key[i] < minV:
                  u = i
                  minV = key[i]
          MST[u] = 1              # 정점 u를 MST에 추가
          # u에 인접인 v에 대해, MST에 포함되지 않은 정점이면
          for v in range(V+1):
              if MST[v] == 0 and adjM[u][v] > 0:
                  key[v] = min(key[v], adjM[u][v])
      return sum(key)
  
  def prim2(r, V):
    MST = [0] * (V+1)           # MST 포함여부
    MST[r] = 1                  # 시작정점 표시
    s = 0                       # MST 간선의 가중치 합
    for _ in range(V):
        u = 0
        minV = 10000
        for i in range(V+1):    # MST에 포함된 정점 i와 인접한 정점 j 중 MST에 포함
            if MST[i] == 1:
                for j in range(V+1):
                    if adjM[i][j] > 0 and MST[j] == 0 and minV > adjM[i][j]:
                        u = j
                        minV = adjM[i][j]
        s += minV
        MST[u] = 1
    return s
  ```

- Kruskal 알고리즘
  
  - 간선을 하나씩 선택해서 MST를 찾는 알고리즘
    
    1) 최초, 모든 간선을 가중치에 따라 오름차순으로 정렬
    
    2) 가중치가 가장 낮은 간선부터 선택하면서 트리를 증가시킴
       
       - 사이클이 존재하면 다음으로 가중치가 낮은 간선 선택
    
    3) n-1개의 간선이 선택될 때까지 2.를 반복
  
  ```python
  def find_set(x):
      while x != rep[x]:
          x = rep[x]
      return x
  
  def union(x, y):
      rep[find_set(y)] = find_set(x)
  
  V, E = map(int, input().split())
  edge = []
  for _ in range(E):
      u, v, w = map(int, input().split())
      edge.append([u, v, w])
  edge.sort(key=lambda x:x[2])
  rep = [i for i in range(V+1)]
  
  N = V + 1               # 실제 정점 수
  cnt = 0                 # 선택한 edge의 수
  total = 0               # MST 가중치의 합
  for u, v, w in edge:
      if find_set(u) != find_set(v):
          cnt += 1
          union(u, v)
          total += w
          if cnt == N-1:  # 간선수
              break
  print(total)
  ```

### 최단 경로

- 최단 경로의 정의
  
  - 간선의 가중치가 있는 그래프에서 두 정점 사이의 경로 중 간선의 가중치 합이 최소인 경로

- 하나의 시작 정점에서 끝 정점까지의 최단 경로
  
  - 다익스트라(dijkstra) 알고리즘
    
    - 음의 가중치를 허용하지 않음
  
  - 벨만-포드(Bellman-Ford) 알고리즘
    
    - 음의 가중치 허용

- 모든 정점들에 대한 최단 경로
  
  - 플로이드-워샬(Floyd-Warshall) 알고리즘

- Dijkstra 알고리즘
  
  - 시작 정점에서 거리가 최소인 정점을 선택해 나가면서 최단 경로를 구하는 방식
  
  - 시작 정점(s)에서 끝 정점(t) 까지의 최단 경로에 정점 x가 존재
  
  - 이 때, 최단 경로는 s에서 x까지의 최단 경로와 x에서 t까지의 최단 경로로 구성
  
  - 탐욕 기법을 사용한 알고리즘으로 MST의 프림 알고리즘과 유사
  
  ```python
  # 1.
  def dijkstra1(s, V): # 시작정점 s, 마지막 정점 V
      U = [0] * (V+1)
      U[s] = 1
      for v in range(V+1):
          D[v] = adj[s][v]  # 시작 점에서 갈 수 있는 값 
  
      #while len(U) != V:
      for _ in range(V):  # V = 정점개수-1과 같으므로..남은 정점개수와 같음
          minV = INF
          w = 0
          for i in range(V+1):
              if U[i] == 0 and minV > D[i]:
                  minV = D[i]
                  w = i
          U[w] = 1  # 선택된 집합에 포함
  
          for v in range(V+1):   # 정점 v가
              if 0 < adj[w][v] < INF:  # w에 인접이면 , 시작정점에서 w를 거쳐 v로 가능 비용과
                  D[v] = min(D[v], D[w]+adj[w][v])  # 시작정점에서 v로 가는 기존 비용을 비교 후 선택
  
  INF = 987654321
  V, E = map(int, input().split())
  adj = [[INF]*(V+1) for _ in range(V+1)]
  for i in range(V+1):
      adj[i][i] = 0
  for _ in range(E):
      u, v, w = map(int, input().split())
      adj[u][v] = w  # 방향성 그래프
  
  D = [0]*(V+1)
  dijkstra1(0, V)
  print(D)  # 시작 정점 0에서 각 정점으로 가는 최소 비용
  
  # 2.
  def dijkstra2():
      while Q:
          print(Q, D)
          now, dist = Q.pop(0)   # 정점 정보와 거리 
  
          if D[now] < dist:      # 주어진 거리보다 저장된 거리가 더 작으면 skip
              continue
  
          # 현재 정점의 인접 정점을 선택하여 그 인접 정점을 확인
          for v in range(len(adj_list[now])):
              n_v, n_dist = adj_list[now][v]   # 연결된 정점과 그 거리
  
              # 현재까지의 거리와 연결된 정점의 거리를 더한 값이 
              # 저장된 값보다 작다면 갱신
              if dist + n_dist < D[n_v]:
                  D[n_v] = dist + n_dist
                  Q.append((n_v, D[n_v]))   # 다음 정점과 갱신된 거리를 Queue에 등록
  
  INF = 987654321
  V, E = map(int, input().split())
  # 인접 리스트
  adj_list = [[] for _ in range(V+1)]
  
  for _ in range(E):
      s, v, d = map(int, input().split())
      adj_list[s].append((v, d))
  
  D = [INF] * (V+1)
  D[0] = 0
  for v, d in adj_list[0]:   # 시작 정점에서 인접한 정점 거리 저장
      D[v] = d
  
  Q = [*adj_list[0]]  # Queue 에 시작점으로 부터 이어진 값을 넣는다.
  
  dijkstra2()
  print(D)
  ```
