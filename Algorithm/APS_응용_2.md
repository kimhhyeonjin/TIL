# APS(Algorithm Problem Solving) 응용 2

## 완전 탐색 & 그리디

### 반복(iteration)과 재귀(recursion)

- 반복과 재귀
  
  - 반복과 재귀는 유사한 작업을 수행할 수 있음
  
  - 반복(iteration)은 수행하는 작업이 완료될 때까지 계속 반복하는 것
    
    - 루프 (for, while 구조)
  
  - 재귀는 주어진 문제의 해를 구하기 위해 동일하면서 더 작은 문제의 해를 이용하는 방법
    
    - 하나의 큰 문제를 해결할 수 있는(해결하기 쉬운) 더 작은 문제로 쪼개고 결과를 결합
    
    - 재귀 함수로 구현

- 반복구조
  
  - 초기화
    
    - 반복되는 명령문을 실행하기 전에(최초 1회만) 조건 검사에 사용할 변수의 초기값 설정
  
  - 조건 검사 (check control expression)
  
  - 반복할 명령문 실행 (action)
  
  - 업데이트 (loop update)

- 반복을 이용한 선택정렬
  
  ```python
  def SelectionSort(A):
  
      n = len(A)
  
      for i in range(n-1):
          minI = i
          for j in range(i+1, n):
              if A[j] < A[minI]:
                  minI = j
          A[minI], A[i] = A[i], A[minI]
  ```

- 재귀적 알고리즘
  
  - 재귀적 정의는 두 부분으로 나뉨
  
  - 하나 또는 그 이상의 기본 경우 (basis case or rule)
    
    - 집합에 포함되어 있는 원소로 induction을 생성하기 위한 시드(seed) 역할
  
  - 하나 또는 그 이상의 유도된 경우 (inductive case or rule)
    
    - 새로운 집합의 원소를 생성하기 위해 결합되어지는 방법

- 재귀 함수 (recursive function)
  
  - 함수 내부에서 직접 혹은 간접적으로 자기 자신을 호출하는 함수
  
  - 일반적으로 재귀적 정의를 이용해서 재귀 함수를 구현
  
  - 기본 부분(basis part)과 유도 부분(inductive part)으로 구성
  
  - 반복 구조에 비해 간결하고 이해하기 쉬움
  
  - 함수 호출은 프로그램 메모리 구조에서 스택을 사용
  
  - 재귀 호출은 반복적인 스택의 사용을 의미하며 메모리 및 속도에서 성능저하가 발생

- 팩토리얼 재귀 함수
  
  ```python
  def fact(n):
      # Basis part
      if n <= 1:
          return 1
      # Inductive part
      else:
          return n * fact(n-1)
  ```

- 반복과 재귀의 비교
  
  |          | 재귀                                | 반복                |
  |:--------:|:---------------------------------:|:-----------------:|
  | 종료       | 재귀 함수 호출이 종료되는 베이스 케이스(base case) | 반복문의 종료 조건        |
  | 수행 시간    | (상대적으로) 느림                        | 빠름                |
  | 메모리 공간   | (상대적으로) 많이 사용                     | 적게 사용             |
  | 소스 코드 길이 | 짧고 간결                             | 긺                 |
  | 소스 코드 형태 | 선택 구조(if ... else)                | 반복 구조(for, while) |
  | 무한 반복 시  | 스택 오버플로우                          | CPU를 반복해서 점유      |

### 완전 탐색 기법

- brute-force (고지식한 방법)
  
  - 대부분의 문제에 적용 가능
    
    - 모든 경우의 수를 생성하고 테스트하기 때문에 수행 속도는 느리지만, 해답을 찾아내지 못할 확률이 작음
  
  - 상대적으로 빠른 시간에 문제 해결(알고리즘 설계)을 할 수 있음
  
  - 문제에 포함된 자료(요소, 인스턴스)의 크기가 작다면 유용
  
  - 학술적 또는 교육적 목적을 위해 알고리즘의 효율성을 판단하기 위한 척도로 사용

### 순열 (Permutation)

- 순열
  
  - 서로 다른 것들 중 몇 개를 뽑아서 한 줄로 나열하는 것

- 단순하게 순열을 생성하는 방법 (3가지 순열)
  
  ```python
  for i1 in range(1, 4):
      for i2 in range(1, 4):
          if i2 != i1:
              for i3 in range(1, 4):
                  if i3 != i1 and i3 != i2:
                      print(i1, i2, i3)
  ```

- 재귀 호출을 통한 순열 생성
  
  ```python
  def f(i, k):
      if i == k:
          print(p)
      else:
          for j in range(i, k):
              p[i], p[j] = p[j], p[i]
              f(i+1, k)
              p[i], p[j] = p[j], p[i]
  
  p = [1, 2, 3, 4, 5]
  f(0, 5)
  ```

- used 리스트 이용
  
  ```python
  # 1. k개 중 k개를 뽑을 때 (n!)
  def f(i, k):
      if i == k:
          print(p)
      else:
          for j in range(k):
              if used[j] == 0:        # a[j]가 아직 사용되지 않았으면
                  used[j] = 1         # a[j]가 사용되었다고 표시하고
                  p[i] = a[j]         # p[i]는 a[j]로 결정
                  f(i+1, k)           # p[i+1] 값을 결정하러 이동
                  used[j] = 0         # a[j]를 다른 자리에서 쓸 수 있도록 해제
  
  N = 3
  a = [i for i in range(1, N+1)]
  used = [0] * N
  p = [0] * N
  f(0, N)
  
  # 2. k개 중 r개를 뽑을 때 (nPr)
  def f(i, k, r):
      if i == r:
          print(p)
      else:
          for j in range(k):
              if used[j] == 0:        # a[j]가 아직 사용되지 않았으면
                  used[j] = 1         # a[j]가 사용되었다고 표시하고
                  p[i] = a[j]         # p[i]는 a[j]로 결정
                  f(i+1, k, r)        # p[i+1] 값을 결정하러 이동
                  used[j] = 0         # a[j]를 다른 자리에서 쓸 수 있도록 해제
  
  N = 5
  R = 3
  a = [i for i in range(1, N+1)]
  used = [0] * N
  p = [0] * R
  f(0, N, R)
  ```

### 부분 집합

- 부분 집합
  
  - 집합에 포함된 원소들을 선택하는 것

- 사전적 순서 (Lexicographic Order)
  
  - 여러 개의 부분 집합의 곱집합 위에 존재하는 부분 순서

- 바이너리 카운팅 (Binary Counting)
  
  - 원소 수에 해당하는 N개의 비트열 이용
  
  - n번째 비트값이 1이면 n번째 원소가 포함되었음을 의미
  
  ```python
  arr = [3, 6, 7, 1, 8, 2]
  n = len(arr)
  
  # 바이너리 카운팅을 이용한 부분집합 생성
  for i in range(1<<n):           # 공집합 빼고 시작하려면 range(1, 1<<n)
      for j in range(n):
          if i & (1<<j):          # j번 비트가 0이 아니면 arr[j] 부분집합의 원소
              print(arr[j], end=' ')
      print()
  
  # 재귀를 이용한 부분집합 생성
  def f(i, k):
      if i == k:
          # print(bit)
          for j in range(k):
              if bit[j]:
                  print(arr[j], end=' ')
          print()
      else:
          bit[i] = 0
          f(i+1, k)
          bit[i] = 1
          f(i+1, k)
  
  bit = [0] * n
  f(0, n)
  ```
