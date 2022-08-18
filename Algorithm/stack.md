# 스택(stack)
## 스택(stack)
### 스택(stack)
 - 물건을 쌓아 올리듯 자료를 쌓아올린 형태의 자료구조
 - 스택에 저장된 자료는 선형구조를 갖는다
   - 자료 간의 관계가 1대 1
 - 스택에 자료를 삽입하거나 스택에서 자료를 꺼낼 수 있다
 - 마지막에 삽입한 자료를 가장 먼저 꺼낸다 (후입선출 / LIFO, Last-In-First-Out)
### 스택의 push 알고리즘
   - append 메서드를 통해 리스트의 마지막에 데이터를 삽입
     ```python
     def push(item):
         s.append(item)
     ```
   - append를 이용하면 조금 느리다는 단점
   - 크기가 정해진 stack인 경우 미리 설정하는 것이 편리
     ```python
     top += 1         # push(20)
     stack[top] = 20
     ```
### 스택의 pop 알고리즘
   ```python
   if top > -1:  # pop()
       top -= 1
       print(stack[top + 1])
   ```
### 스택 예시
```python
stackSize = 10
stack = [0] * stackSize
top = -1


# push
top += 1  # push(1)
stack[top] = 1

top += 1  # push(2)
stack[top] = 2


# pop
top -= 1
temp = stack[top + 1]
print(temp)                # 2

temp = stack[top]
top -= 1
print(temp)                # 1

stack2 = []
stack2.append(10)
stack2.append(20)
print(stack2.pop())        # 20
print(stack2.pop())        # 10
```

```python
# 예시
T = int(input())

for tc in range(1, T+1):
    text = input()
    top = -1

    for i in range(len(text)):
        # 스택을 쌓는 경우
        if text[i] == '스택을 쌓을 조건':
            top += 1
        # 스택에서 제거하는 경우
        else:
            top -= 1
            # 맨 처음에 스택에 아무것도 없을 때는 스택에서 제거하는 것이 불가능
            if top == -2:
                print(f'#{tc} -1')
                break
    else:  # break에 걸리지 않고 for문을 다 돌았을 경우 실행
        # for문을 다 돌았는데 스택에 아무것도 존재하지 않는 경우
        if top == -1:
            print(f'#{tc} 1')
        # 스택에 무언가 남아있는 경우
        else:
            print(f'#{tc} -1')
```

## 재귀호출
### 재귀호출
 - 자기 자신을 호출하여 순환 수행되는 것
 - 함수에서 실행해야 하는 작업을 특성에 따라 일반적인 호출방식보다 재귀호출방식을 사용하여 함수를 만들면 프로그램의 크기를 줄이고 간단하게 작성
 - 호출 회수가 크면 실행속도가 느려짐
### 재귀호출 예시
```python
def f(i, N):       # i: 현재 단계, N: 목표 단계
    if i == N:
        print(i)
        return
    else:
        print(i)
        # 호출할 때 같이 들고 갔다가 return하면서 값을 넘겨줌
        f(i+1, N)

f(0, 4)

'''
0
1
2
3
4
'''
```
```python
# 피보나치
def fibo(n):
    if n < 2:
        return n
    else:
        return fibo(n-1) + fibo(n-2)

# 중복호출이 존재하기 때문에 숫자가 커지면 엄청 느려짐
# for i in range(101):
#     print(i, fibo(i))
for i in range(21):
    print(i, fibo(i))
```

## Memoization
### Memoization
 - 컴퓨터 프로그램을 실행할 때 이전에 계산한 값을 메모리에 저장해서 매번 다시 계산하지 않도록 하여 전체적인 실행속도를 빠르게 하는 기술
 - 동적 계획법의 핵심이 되는 기술
   ```python
   # 피보나치
   # append 이용
   # memo의 0번째, 1번째 리스트를 미리 만들어 append
   def fibo1(n):
       if n >= 2 and len(memo) <= n:
           memo.append(fibo1(n-1) + fibo1(n-2))
       return memo[n]

   # memo[0]을 0으로 memo[1]은 1로 초기화
   memo = [0, 1]
   ```
 - 크기가 정해진 경우 미리 설정하는 것이 편리
    ```python
    # 피보나치
    # memo를 위한 배열을 할당하고, 모두 -1으로 초기화
    # memo[0]을 0으로 memo[1]은 1로 초기화
    def memoization(n):
        if memo[n] == -1:  # 초기화 값
            memo[n] = memoization(n-1) + memoization(n-2)
        return memo[n]


    # 중복이 줄기 때문에 계산이 빠른 편
    memo = [-1] * 101  # 인덱스를 100까지
    memo[0] = 0
    memo[1] = 1
    for i in range(101):
        print(i, memoization(i))
    ```

## DP(Dynamic Programming) : 동적 계획
### DP(Dynamic Programming)
 - 그리디 알고리즘과 같이 **최적화 문제**를 해결하는 알고리즘
 - 먼저 입력 크기가 작은 부분 문제들을 모두 해결한 후 그 해들을 이용하여 보다 큰 크기의 부분 문제들을 해결하여 최종적으로 원래 주어진 입력의 문제를 해결하는 알고리즘
 1) 문제를 부분 문제로 분할한다
 2) 부분 문제로 나누는 일을 끝냈으면 가장 작은 부분 문제부터 해를 구한다
 3) 그 결과를 테이블에 저장하고 테이블에 저장된 부분 문제의 해를 이용하여 상위 문제의 해를 구한다
 - append 이용
    ```python
    # 피보나치
    def fibo2(n):
        f = [0, 1]
        for i in range(2, n+1):
            f.append(f[i-1] + f[i-2])
        return f[n]
    ```
 - 크기가 정해진 경우 미리 설정하는 것이 편리
   ```python
   def fibo_dp(n):
       table[0] = 0
       table[1] = 1
       for i in range(2, n+1):
           table[i] = table[i-1] + table[i-2]
       return

   table = [0]*101
   fibo_dp(100)
   print(table[100])
   ```

## DFS(깊이 우선 탐색)
비선형구조인 그래프 구조는 그래프로 표현된 모든 자료를 빠짐없이 검색하는 것이 중요

깊이 우선 탐색(Depth First Search, DFS) : Stack의 성질을 이용

너비 우선 탐색(Breadth First Search, BFS) : Queue를 주로 사용
### DFS(깊이 우선 탐색)
 - 시작 정점의 한 방향으로 갈 수 있는 경로가 있는 곳까지 깊이 탐색해 가다가 더 이상 갈 곳이 없게 되면, 가장 마지막에 만났던 갈림길 간선이 있는 정점으로 되돌아와서 다른 방향의 정점으로 탐색을 계속 반복하여 결국 모든 정점을 방문하는 순회방법
 - 가장 마지막에 만났던 갈림길의 정점으로 되돌아가서 다시 깊이 우선 탐색을 반복해야 하므로 후입선출 구조의 스택 사용
### DFS 알고리즘
#### stack 이용
1) 시작 정점 v를 결정하여 방문한다
2) 정점 v에 인접한 정점 중에서
   - 방문하지 않은 정점 w가 있으면 정점 v를 스택에 push하고 정점 w를 방문
   - 방문하지 않은 정점이 없으면 탐색의 방향을 바꾸기 위해서 스택을 pop하여 받은 가장 마지막 방문 정점을 v로 하여 다시 (2)를 반복한다
3) 스택이 공백이 될 때까지 (2)를 반복한다
