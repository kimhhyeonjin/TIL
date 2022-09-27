# APS(Algorithm Problem Solving) 응용 3

## 분할 정복 & 백트래킹

### 분할 정복

- 설계 전략 (Top-down approach)
  
  - 분할(Divide): 해결할 문제를 여러 개의 작은 부분으로 나눈다.
  
  - 정복(Conquer): 나눈 작은 문제를 각각 해결한다.
  
  - 통합(Combine): (필요하다면) 해결된 해답을 모은다.

- 분할 정복을 이용한 거듭제곱 알고리즘
  
  ```python
  def Recursive_Power(x, n):
      if n == 1:
          return x
      if n % 2 == 0:
          y = Recursive_Power(x, n//2)
          return y * y
      else:
          y = Recursive_Power(x, (n-1)//2)
          return y * y * x
  
  print(Recursive_Power(3, 5))
  ```

- 병합 정렬(Merge Sort)
  
  - 여러 개의 정렬된 자료의 집합을 병합하여 한 개의 정렬된 집합으로 만드는 방식
    
    - 분할단계: 전체 자료 집합에 대하여, 최소 크기의 부분집합이 될 때까지 분할작업을 계속한다.
    
    - 병합단계: 2개의 부분집합을 정렬하면서 하나의 집합으로 병합한다.
  
  - 시간 복잡도: O(n log n)
  
  ```python
  # 1. 분할단계
  def merge_sort(arr):
      if len(arr) == 1:
          return arr
      else:
          arr_l = []
          arr_r = []
          middle = len(arr) // 2
          for i in range(middle):
              arr_l.append(arr[i])
          for i in range(middle, len(arr)):
              arr_r.append(arr[i])
          left = merge_sort(arr_l)
          right = merge_sort(arr_r)
          return merge(left, right)
  
  # 2. 병합단계
  def merge(left, right):
      result = []
      while len(left) > 0 or len(right) > 0:
          if len(left) > 0 and len(right) > 0:
              if left[0] <= right[0]:
                  result.append(left[0])
                  left.pop(0)
              else:
                  result.append(right[0])
                  right.pop(0)
          elif len(left) > 0:
              result.append(left[0])
              left.pop(0)
          elif len(right) > 0:
              result.append(right[0])
              right.pop(0)
      return result
  
  arr = [3, 8, 15, 63, 29, 100, 23, 109]
  print(merge_sort(arr))
  ```

### 퀵 정렬

- 주어진 배열을 두 개로 분할하고, 각각을 정렬

- 매우 큰 입력 데이터에 대해서 좋은 성능을 보이는 알고리즘

- 병합 정렬과의 차이점
  
  - 병합 정렬은 그냥 두 부분으로 나누는 반면, 퀵 정렬은 분할할 때 pivot item 중심으로 작은 것은 왼쪽, 큰 것은 오른쪽에 위치시킨다.
  
  - 각 부분 정렬이 끝난 후, 병합 정렬은 병합하는 과정이 필요하지만 퀵 정렬은 그 과정을 필요로 하지 않는다.
  
  ```python
  # 1.
  # 알고리즘
  def quickSort(l, r):
      if l < r:
          s = partition(l, r)
          quickSort(l, s - 1)
          quickSort(s + 1, r)
  
  # Hoare-Partition 알고리즘 (partition을 나눔)
  def partition(l, r):
      pivot = A[l]
      i, j = l, r
      while i <= j:
          while i <= j and A[i] <= pivot:
              i += 1
          while i <= j and A[j] >= pivot:
              j -= 1
          if i < j:
              A[i], A[j] = A[j], A[i]
      A[l], A[j] = A[j], A[l]
      return j
  
  A = [7, 2, 5, 3, 4, 5]
  N = len(A)
  quickSort(0, N-1)
  print(A)
  
  # 2.
  def quick_sort(numbers):
      if len(numbers) <= 1:               # 숫자가 1개 이하일 때는 정렬할 필요가 없음
          return numbers
      left = []                           # 기준값보다 작은 값을 저장
      right = []                          # 기준값보다 같거나 큰 값을 저장
      pivot = numbers[len(numbers)//2]    # 가운데 값을 기준값으로 설정
  
      for i in range(len(numbers)):
          if i == (len(numbers)//2):      # left나 right 리스트에 들어갈 필요 없음
              continue
          if pivot > numbers[i]:
              left.append(numbers[i])
          else:
              right.append(numbers[i])
  
      return quick_sort(left) + [pivot] + quick_sort(right)
  ```

### 이진 검색(BinarySearch)

- 자료의 가운데에 있는 항목의 키 값과 비교하여 다음 검색의 위치를 결정하고 검색을 계속 진행하는 방법
  
  - 목적 키를 찾을 때까지 이진 검색을 순환적으로 반복 수행함으로써 검색 범위를 반으로 줄여가면서 보다 빠르게 검색을 수행함

- 이진 검색을 하기 위해서는 자료가 정렬된 상태여야 함

- 검색 과정
  
  1) 자료의 중앙에 있는 원소를 고른다.
  
  2) 중앙 원소의 값과 찾고자 하는 목표 값을 비교한다.
  
  3) 목표 값이 중앙 원소의 값보다 작으면 자료의 왼쪽 반에 대해서 새로 검색을 수행하고, 크다면 자료의 오른쪽 반에 대해서 새로 검색을 수행한다.
  
  4) 찾고자 하는 값을 찾을 때까지 위의 과정을 반복한다.
  
  ```python
  # 1. 반복구조
  def binarySearch(n, S, key):
      low = 0
      high = n - 1
  
      while low <= high:
          mid = low + (high - low) // 2
          if S[mid] == key:
              return mid
          elif S[mid] > key:
              high = mid - 1
          else:
              low = mid + 1
      return -1
  
  # 2. 재귀구조
  def binarySearch2(S, low, high, key):
      if low > high:
          return -1
      else:
          mid = (low + high) // 2
          if key == S[mid]:
              return mid
          elif key < S[mid]:
              return binarySearch2(S, low, mid - 1, key)
          else:
              return binarySearch2(S, mid + 1, high, key)
  
  S = [2, 4, 7, 9, 11, 19, 23]
  n = len(S)
  print(binarySearch(n, S, 11))
  print(binarySearch2(S, 0, n, 11))
  ```

### 백트래킹(Backtracking)

- 백트래킹 기법
  
  - 어떤 노드의 유망성을 점검한 후에 유망(promising)하지 않다고 결정되면 그 노드의 부모로 되돌아가(backtracking) 다음 자식 노드의 유망성 점검
  
  - 어떤 노드를 방문하였을 때 그 노드를 포함한 경로가 해답이 될 수 없으면 그 노드는 유망하지 않다고 하며, 반대로 해답의 가능성이 있으면 유망하다고 표현
  
  - 가지치기(prunning): 유망하지 않은 노드가 포함되는 경로는 더 이상 고려하지 않음

- 백트래킹과 깊이 우선 탐색과의 차이
  
  - 어떤 노드에서 출발하는 경로가 해결책으로 이어질 것 같지 않으면 더 이상 그 경로를 따라가지 않음으로써 시도의 횟수를 줄임(Prunning 가지치기)
  
  - 깊이 우선 탐색이 모든 경로를 추적하는데 비해 백트래킹은 불필요한 경로를 조기에 차단
  
  - 백트래킹 알고리즘을 적용하면 일반적으로 경우의 수가 줄어들지만 이 역시 최악의 경우에는 여전히 지수함수 시간(Exponential Time)을 요함

### 트리

- 트리 용어
  
  - 노드(node): 트리의 원소이고 정점(vertex)이라고도 함
  
  - 간선(edge): 부모 노드와 자식 노드를 연결
  
  - 루트 노드(root node): 트리의 시작 노드
  
  - 형제 노드(sibling node): 같은 부모 노드의 자식 노드
  
  - 조상 노드: 간선을 따라 루트 노드까지 이르는 경로에 있는 모든 노드
  
  - 자손 노드: 서브 트리에 있는 하위 레벨의 노드
  
  - 차수
    
    - 노드의 차수: 노드에 연결된 자식 노드의 수
    
    - 트리의 차수: 트리에 있는 노드의 차수 중에서 가장 큰 값
    
    - 단말 노드(리프 노드): 차수가 0인 노드, 자식 노드가 없는 노드
  
  - 높이
    
    - 노드의 높이: 루트에서 노드에 이르는 간선의 수, 노드의 레벨
    
    - 트리의 높이: 트리에 있는 노드의 높이 중에서 가장 큰 값, 최대 레벨

- 트리 특징
  
  - 싸이클이 없는 무향 연결 그래프
    
    - 두 노드 사이에는 유일한 경로가 존재
    
    - 각 노드는 최대 하나의 부모 노드가 존재할 수 있음
    
    - 각 노드는 자식 노드가 없거나 하나 이상이 존재할 수 있음
  
  - 비선형 구조
    
    - 원소들 간에 1:n 관계를 가지는 자료구조
    
    - 원소들 간에 계층관계를 가지는 계층형 자료구조
