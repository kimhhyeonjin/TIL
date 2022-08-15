# 문자열

## 문자열
### Python에서의 문자열 처리
 - char 타입 없음
 - 텍스트 데이터의 취급방법이 통일되어 있음
 - 문자열 기호
   - '(홑따옴표), "(쌍따옴표), '''(홑따옴표 3개), """(쌍따옴표 3개)
   - +연결 (Concatenation)
     - 문자열 + 문자열 : 이어 붙여주는 역할
   - *연결
     - 문자열 * 수 : 수만큼 문자열이 반복
 - 문자열은 시퀀스 자료형으로 분류되고 (반복을 돌릴 수 있음), 시퀀스 자료형에서 사용할 수 있는 인덱싱, 슬라이싱 연산들을 사용할 수 있음
 - 문자열 클래스에서 제공되는 메서드
   - replace(), split(), isalpha(), find(), index()
 - 문자열은 튜플과 같이 **요소값을 변경할 수 없음(immutable)**

### 문자열 뒤집기
 - 자기 문자열에서 뒤집는 방법이 있고 새로운 빈 문자열을 만들어 소스의 뒤에서부터 읽어서 타겟에 쓰는 방법이 있음
   ```python
   # 슬라이싱 이용
   s = 'Reverse this strings'  # 'sgnirts siht esreveR'
   s = s[::-1]

   # 리스트로 만들어 reverse 함수를 사용한 후 join을 이용해서 연결
   s = 'abcd'
   s = list(s)
   s.reverse()
   s = ''.join(s)

   # for문을 이용하여 구현
   s = 'Reverse this string.'
   rev_str = ''
   for idx in range(len(s)-1, -1, -1):
       rev_str += s[idx]
   print(rev_str)
   
   ## list로 변환하여 swap 사용
   list_s = list(s)
   for idx in range(len(s)// 2):
       list_s[idx], list_s[-1-idx] = list_s[-1-idx], list_s[idx]
   # print(list_s)
   print(''.join(list_s))
   ```

### 문자열 숫자를 정수로 변환하기
```python
# itoa()구현 : integer to str
def itoa(num):

    # 음수인지 아닌지 판단
    neg = False
    if num < 0:
        neg = True
        num = -num

    strlist = ''
    while num:
        num, remain = num // 10, num % 10
        strlist = chr(ord('0') + remain) + strlist
        # ord('0')을 통해 '0'의 아스키코드를 값을 구한 후
        # remain을 더하여 0으로부터 나머지만큼 이동
        # strlist += chr(ord('0') + remain)을 하면 문자열이 역순으로 더해짐

    if neg:
        return '-' + strlist
    else:
        return strlist
```

## 패턴 매칭
### 패턴 매칭에 사용되는 알고리즘
 - 고지식한 패턴 검색 알고리즘
 - 카프-라빈 알고리즘
 - KMP 알고리즘
 - 보이어-무어 알고리즘

### 고지식한 알고리즘 (Brute Force)
 - 본문 문자열을 처음부터 끝까지 차례대로 순회하면서 패턴 내의 문자들을 일일히 비교하는 방식으로 동작
   ```python
   p = 'is'  # 찾을 패턴
   t = 'This is a book~!'  # 전체 텍스트
   M = len(p)  # 찾을 패턴의 길이
   N = len(t)  # 전체 텍스트의 길이

   def BruteForce(p, t):
       i = 0  # t의 인덱스
       j = 0  # p의 인덱스
       while j < M and i < N:
           if t[i] != p[j]:
               i -= j
               j = -1
           i += 1
           j += 1
       if j == M:
           return i - M  # 검색 성공
       else:
           return -1  # 검색 실패

   # 또 다른 방법
   text = 'This is a book~!'
   pattern = 'is'
   
   def bruteforce(pattern, text):
       M = len(pattern)  # 패턴의 길이
       N = len(text)  # 텍스트의 길이
   
       for idx in range(N - M + 1):  # 텍스트 순회
           for jdx in range(M):
               if pattern[jdx] != text[idx]:
                   break
               else:  # break문이 작동되지 않았을 때 실행
                      # 패턴이 매칭된 상태
                   return idx
       else:
           return -1
   ```
    - 시간 복잡도 : O(MN)

### KMP 알고리즘 (Knuth-Moriss-Pratt Algorithm)
 - 불일치가 발생한 텍스트 스트링의 앞 부분에 어떤 문자가 있는지를 미리 알고 있으므로, 불일치가 발생한 앞 부분에 대하여 다시 비교하지 않고 매칭을 수행
 - **패턴을 전처리**하여 배열 next[M]을 구해서 잘못된 시작을 최소화함
   - next[M] : 불일치가 발생했을 경우 이동할 다음 위치
 - 시간 복잡도 : O(M+N)
   ```python
   # 전처리
   def pre_process(pattern):
       # 전처리를 위한 테이블을 작성 (LPS table: longest prefix suffix table)
       lps = [0] * len(pattern)
       j = 0  # lps를 만들기 위한 prefix index
   
       for i in range(1, len(pattern)):  # 0번째 자리는 패턴 확인할 필요없음
           # prefix index 위치에 있는 문자와 비교
           if pattern[i] == pattern[j]:
               lps[i] = j + 1  # i의 앞에 중복되는 패턴이 존재한다
               j += 1  # j는 중복된 글자의 자리수
           else:
               j = 0
               # j = 0으로 이동 후 다음 prefix idx 비교를 한 번 더 해야 함
               if pattern[i] == pattern[j]:
                   lps[i] = j + 1
                   j += 1
   
       return lps
   
   # kmp
   def KMP(text, pattern):
       lps = pre_process(pattern)  # 전처리로 lps 테이블 생성
   
       i = 0  # text index
       j = 0  # pattern index
       while i < len(text):
           if pattern[j] == text[i]:  # 같은 문자라면
               # 다음 문자 비교
               i += 1
               j += 1
           else:
               if j != 0:
                   j = lps[j - 1]  # lps[j - 1]에 해당하는 인덱스만큼은 이미 일치함
               else:
                   i += 1
   
           if j == len(pattern):  # pattern이 전부 일치할 때
               return i - j       # text의 위치
   
       return -1  # 서로 일치하는 문장이 없는 경우
   ```

### 보이어-무어 알고리즘
 - 패턴의 오른쪽에서 왼쪽으로 비교
 - 대부분의 상용 소프트웨어에서 채택하고 있는 알고리즘
 - 보이어-무어 알고리즘은 패턴에 오른쪽 끝에 있는 문자가 불일치하고 이 문자가 패턴 내에 존재하지 않는 경우, 이동 거리를 패턴의 길이로
 - 오른쪽 끝에 있는 문자가 불일치하고 이 문자가 패턴 내에 존재하는 경우 패턴에서 일치하는 문자를 찾아 그 위치만큼 이동
   ```python
   # 전처리
   def pre_process(pattern):
       M = len(pattern)  # 패턴의 길이
   
       skip_table = dict()
       for i in range(M-1):
           skip_table[pattern[i]] = M - i - 1
   
       return skip_table
   
   # boyer_moore
   def boyer_moore(text, pattern):
       skip_table = pre_process(pattern)
       M = len(pattern)
   
       i = 0  # text index
       while i <= len(text) - M:
           j = M - 1
           # 뒤에서부터 비교
           # 인덱스를 구하는 것이기 때문에 1만큼 빼줌
           k = i + (M-1)  # 비교를 시작할 위치 (현재위치 + M번째 인덱스)
   
           # 비교할 j가 남아있고, text와 pattern이 일치하면 그 다음 앞 글자를 비교하기 위해 인덱스 감소
           while j >= 0 and pattern[j] == text[k]:
               j -= 1
               k -= 1
           if j == -1:  # 일치
               return i
           else:
               # i를 비교할 시작 위치를 skip_table에서 가져온다
               i += skip_table.get(text[i+M-1], M)
       return -1  # 일치하는 패턴이 없음
   ```