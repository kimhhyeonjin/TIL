## 문제

한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의에 대하여 회의실 사용표를 만들려고 한다. 각 회의 I에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾아보자. 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다. 회의의 시작시간과 끝나는 시간이 같을 수도 있다. 이 경우에는 시작하자마자 끝나는 것으로 생각하면 된다.

```python
N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
# arr을 시작하는 시간을 기준으로 오름차순 정렬
arr.sort(key=lambda x:x[0])
# arr을 끝나는 시간을 기준으로 오름차순 정렬
arr.sort(key=lambda x: x[1])
# print(arr)

# 횟수 세기
# arr 정렬한 것 생각하고 아래 코드 이해하기
cnt = 0                         # 횟수
compare = 0                     # 시작시간과 비교할 종료시간
for i in range(N):
    if compare <= arr[i][0]:    # 이전의 종료시간보다 시작시간이 늦은 경우
        compare = arr[i][1]     # 그 때의 종료시간 할당
        cnt += 1                # 횟수를 1회 증가
    else:                       # 그렇지 않은 경우
        continue                # 다음 숫자로 넘어가도록
print(cnt)
```

### arr를 시작하는 시간을 기준으로 오름차순 정렬하는 이유

시작시간과 종료시간이 같은 경우가 있을 수 있기 때문

예를 들어 `10 10`과 `8 10`이 차례로 들어온 경우 시작하는 시간을 기준으로 오름차순하지 않으면 `8 10`은 포함되지 않고 `10 10`부터 처리될 수 있음

### 종료시간을 기준으로 정렬하는 방법

```python
# 종료 시간을 기준으로 정렬
# 방법 1 (key값에 정렬을 목적으로 하는 함수값 입력)
arr.sort(key=lambda x: x[1])            # arr의 1번째 인덱스를 기준으로 정렬
# 방법 2
arr = sorted(arr, key=lambda x: x[1])   # arr의 1번째 인덱스를 기준으로 정렬
# 방법 3
arr = [[0] * 2 for _ in range(N)]
for i in range(N):
    start, end = map(int, input().split())
    arr[i][0], arr[i][1] = end, start
print(arr)
```