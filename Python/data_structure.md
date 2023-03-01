# 데이터 구조

## 데이터 구조 활용

- 데이터 구조를 활용하기 위해서는 method 활용
  
  > 형태 : 데이터 구조.method()
  > 
  > 예시 : List.append(10) / String.split()

## 순서가 있는 데이터 구조

### 문자열(String)

- immutable
  
  ```python
  word = 'happy'
  print(id(word))  # 메모리 주소 확인 2346516840304
  word = 'test'
  print(id(word))  # 메모리 주소 확인 2346516845232
  # 메모리 주소가 같지 않으므로 word가 변경되었다고 할 수 없다
  # 기존의 문자열을 변경하는 것이 아니라 변경된 문자열을 새롭게 만들어서 반환
  ```

- 문자열 조회 / 탐색 및 검증 method
  
  > **`s.find(x)`** : x의 첫번째 위치를 반환, **없으면 -1을 반환**
  > 
  > ```python
  > print('apple'.find('p'))  # 1
  > print('apple'.find('k'))  # -1
  > ```
  > 
  > `s.index(x)` : x의 첫번째 위치를 반환, **없으면 오류 발생**
  > 
  > ```python
  > print('apple'.index('k'))  # ValueError: substring not found
  > ```
  > 
  > `s.isalpha(x)` : 알파벳 문자 여부, 단순 알파벳이 아닌 유니코드 상 Letter(알파벳스러운건 다 가능)
  > 
  > ```python
  > print('abc'.isalpha())  # True
  > print('ㄱㄴㄷ'.isalpha())  # True
  > ```
  > 
  > `s.isupper()` : 대문자 여부
  > 
  > ```python
  > print('Ab'.isupper())  # False
  > ```
  > 
  > `s.islower()` : 소문자 여부
  > 
  > ```python
  > print('ab'.islower())  # True
  > ```
  > 
  > `s.istitle()` : 타이틀 형식 여부
  > 
  > ```python
  > print('Title Title!'.istitle())  # True
  > ```

- 문자열 변경 method
  
  > `s.replace(old, new[, count])` : 바꿀 대상 글자를 새로운 글자로 바꿔서 변환
  > 
  > ```python
  > print('coone'.replace('o', 'a'))  # caane
  > print('wooooowoo'.replace('o', '!', 2))  # w!!ooowoo
  > # count를 지정하면 해당 개수만큼만 실행
  > ```
  > 
  > **`s.strip([chars])`** : 공백이나 특정 문자를 제거
  > 
  > ```python
  > print('          와우!\n'.strip())   # 와우!
  > # 양쪽을 제거
  > print('          와우!\n'.lstrip())  # 와우!
  > 
  > # 왼쪽을 제거
  > print('          와우!\n'.rstrip())  #           와우!
  > # 오른쪽을 제거
  > print('안녕하세요????'.rstrip('?'))   # 안녕하세요
  > # 특정 문자를 제거
  > print('www.jurassic.net'.strip('wten.'))  # jurassic
  > print('www.jurassic.net'.strip('wten'))  # .jurassic.
  > # 순서 상관없이 제거하고 싶은 문자 입력하면 제거
  > ```
  > 
  > **`s.split(sep=None, maxsplit=-1)`** : 공백이나 특정 문자를 기준으로 분리하여 리스트로 반환
  > 
  > ```python
  > print('a, b, c'.split('_'))  # ['a, b, c']
  > print('a b c'.split())  # ['a', 'b', 'c']
  > # maxsplit : 분리할 단어의 갯수
  > ```
  > 
  > **`'separator'.join([iterable])`** : 구분자로 iterable을 합침
  > 
  > ```python
  > print('!'.join('happy'))  # h!a!p!p!y
  > print(' '.join(['3', '5']))  # 3 5
  > ```
  > 
  > `s.capitalize()` : 가장 첫번째 글자를 대문자로 변경
  > 
  > ```python
  > msg = 'hI! Everyone, I\'m happy'
  > print(msg)  # hI! Everyone, I'm happy
  > print(msg.capitalize())  # Hi! everyone, i'm happy
  > ```
  > 
  > `s.title()` : 문자열 내 띄어쓰기를 기준으로 각 단어의 첫글자는 대문자로, 나머지는 소문자로 변환
  > 
  > ```python
  > msg = 'hI! Everyone, I\'m happy'
  > print(msg)  # hI! Everyone, I'm happy
  > print(msg.title())  # Hi! Everyone, I'M Happy
  > ```
  > 
  > `s.upper()` : 모두 대문자로 변경
  > 
  > ```python
  > msg = 'hI! Everyone, I\'m happy'
  > print(msg)  # hI! Everyone, I'm happy
  > print(msg.upper())  # HI! EVERYONE, I'M HAPPY
  > ```
  > 
  > `s.lower()` : 모두 소문자로 변경
  > 
  > ```python
  > msg = 'hI! Everyone, I\'m happy'
  > print(msg)  # hI! Everyone, I'm happy
  > print(msg.lower())  # hi! everyone, i'm happy
  > ```
  > 
  > `s.swapcase()` : 대문자와 소문자를 서로 변경
  > 
  > ```python
  > msg = 'hI! Everyone, I\'m happy'
  > print(msg)  # hI! Everyone, I'm happy
  > print(msg.swapcase())  # Hi! eVERYONE, i'M HAPPY
  > ```

- 숫자 판별 method
  
  > `.isdecimal()` : 문자열이 0~9까지의 수로 이루어져 있는가?
  > `.isdigit()` : 문자열이 숫자로 이루어져 있는가?
  > `.isnumeric()`: 문자열을 수로 볼 수 있는가?
  
  > | isdecimal() | isdigit() | isnumeric() | Example                    |
  > |:-----------:|:---------:|:-----------:|:--------------------------:|
  > | True        | True      | True        | "038", "੦੩੮", "０３８"        |
  > | False       | True      | True        | "⁰³⁸", "🄀⒊⒏", "⓪③⑧"       |
  > | False       | False     | True        | "↉⅛⅘", "ⅠⅢⅧ", "⑩⑬㊿", "壹貳參" |
  > | False       | False     | False       | "abc", "38.0", "-38"       |

### 리스트(List)

- 리스트 method
  
  > **`L.append(x)`** : 리스트 마지막에 항목 x를 추가
  > 
  > ```python
  > cafe = ['starbucks', 'tomntoms', 'hollys']
  > print(cafe)  # ['starbucks', 'tomntoms', 'hollys']
  > cafe.append('banapresso')
  > print(cafe)  # ['starbucks', 'tomntoms', 'hollys', 'banapresso']
  > ```
  > 
  > `L.insert(i, x)` : 리스트 인덱스 i에 항목 x를 삽입
  > 
  > ```python
  > cafe = ['starbucks', 'tomntoms', 'hollys']
  > print(cafe)  # ['starbucks', 'tomntoms', 'hollys']
  > cafe.insert(0, 'start')
  > print(cafe)  # ['start', 'starbucks', 'tomntoms', 'hollys']
  > cafe.insert(len(cafe), 'end')
  > print(cafe)  # ['start', 'starbucks', 'tomntoms', 'hollys', 'end']
  > cafe.insert(10000, 'real')
  > print(cafe)  # ['start', 'starbucks', 'tomntoms', 'hollys', 'end', 'real']
  > # 리스트 길이보다 i 값이 큰 경우는 맨 뒤에 추가
  > ```
  > 
  > `L.remove(x)` : 리스트 가장 왼쪽에 있는 항목(첫번째) x를 제거
  > 
  > : 항목이 존재하지 않을 경우, ValueError
  > 
  > ```python
  > numbers = [1, 2, 3, 'hi']
  > print(numbers)  # [1, 2, 3, 'hi']
  > numbers.remove('hi')
  > print(numbers)  # [1, 2, 3]
  > numbers.remove('hi')  # ValueError: list.remove(x): x not in list
  > ```
  > 
  > **`L.pop()`** : 리스트 가장 오른쪽에 있는 항목(마지막)을 반환 후 제거
  > 
  > ```python
  > numbers = ['hi', 1, 2, 3]
  > print(numbers)  # ['hi', 1, 2, 3]
  > numbers.pop()
  > print(numbers)  # ['hi', 1, 2]
  > ```
  > 
  > **`L.pop(i)`** : 리스트의 인덱스 i에 있는 항목을 반환 후 제거
  > 
  > ```python
  > numbers = ['hi', 1, 2, 3]
  > print(numbers)  # ['hi', 1, 2, 3]
  > numbers.pop(0)
  > print(numbers)  # [1, 2, 3]
  > ```
  > 
  > `L.extend(m)` : 순회형 m의 모든 항목들의 리스트 끝에 추가 (+=과 같은 기능)
  > 
  > ```python
  > cafe = ['starbucks', 'tomntoms', 'hollys']
  > print(cafe)  # ['starbucks', 'tomntoms', 'hollys']
  > cafe.extend(['coffee'])
  > print(cafe)  # ['starbucks', 'tomntoms', 'hollys', 'coffee']
  > cafe.extend('coffee')
  > print(cafe)  # ['starbucks', 'tomntoms', 'hollys', 'coffee', 'c', 'o', 'f', 'f', 'e', 'e']
  > ```
  > 
  > `L.clear()` : 모든 항목을 삭제
  > 
  > ```python
  > numbers = [1, 2, 3]
  > print(numbers)  # [1, 2, 3]
  > numbers.clear()
  > print(numbers)  # []
  > ```
  > 
  > **`L.index(x, start, end)`** : 리스트에 있는 항목 중 가장 왼쪽에 있는 항목 x의 인덱스를 반환
  > 
  > ```python
  > numbers = [1, 2, 3, 4]
  > print(numbers)  # [1, 2, 3, 4]
  > print(numbers.index(3))  # 2
  > # numbers에서 3을 찾아 index 위치 반환
  > print(numbers.index(100))  # ValueError: 100 is not in list
  > ```
  > 
  > `L.reverse()` : 리스트를 거꾸로 정렬
  > 
  > ```python
  > numbers = [3, 2, 5, 1]
  > result = numbers.reverse()
  > print(numbers, result)  # [1, 5, 2, 3] None
  > ```
  > 
  > **`L.sort()`** : 리스트를 정렬(매개변수 이용가능)
  > 
  > : 원본 리스트를 정렬함 / None 반환
  > 
  > : sorted 함수와 비교할 것
  > 
  > ```python
  > numbers = [3, 2, 5, 1]
  > result = numbers.sort()  # None 반환
  > print(numbers, result)  # [1, 2, 3, 5] None
  > 
  > numbers = [3, 2, 5, 1]
  > result = sorted(numbers)
  > print(numbers, result)  # [3, 2, 5, 1] [1, 2, 3, 5]
  > ```
  > 
  > **`L.count(x)`** : 리스트에서 항목 x가 몇 개 존재하는지 갯수를 반환
  > 
  > ```python
  > numbers = [1, 2, 3, 1, 1]
  > print(numbers.count(1))  # 3
  > print(numbers.count(100))  # 0
  > ```

### 튜플(Tuple)

- 튜플 관련 method
  
  > 튜플은 변경할 수 없기 때문에 **값에 영향을 미치지 않는 method만을 지원**
  > 
  > 리스트 method 중 항목을 변경하는 method를 제외하고 대부분 동일

## 순서가 없는 데이터 구조

### 셋(Set)

- 셋 method
  
  > `s.copy()` : 셋의 얕은 복사본을 반환
  > 
  > `s.add(x)` : 항목 x가 셋 s에 없다면 추가 (set에서는 append가 아니라 add를 사용)
  > 
  > ```python
  > a = {'사과', '바나나', '수박'}
  > print(a)  # {'수박', '사과', '바나나'}
  > a.add('딸기')
  > print(a)  # {'수박', '사과', '바나나', '딸기'}
  > # print할 때마다 '딸기'의 위치가 달라짐(set이라 순서 상관없음)
  > ```
  > 
  > `s.pop()` : 셋 s에서 랜덤하게 항목을 반환하고, 해당 항목을 제거
  > 
  > : set이 비어있을 경우 KeyError
  > 
  > ```python
  > a = {'사과', '바나나', '수박'}
  > print(a)  # {'사과', '수박', '바나나'}
  > a.pop()
  > print(a)  # {'수박', '바나나'}
  > 
  > a = set()
  > a.pop()  # KeyError: 'pop from an empty set'
  > ```
  > 
  > `s.remove(x)` : 항목 x를 셋 s에서 삭제
  > 
  > : **항목이 존재하지 않을 경우 KeyError**
  > 
  > ```python
  > a = {'사과', '바나나', '수박'}
  > print(a)  # {'사과', '바나나', '수박'}
  > a.remove('사과')
  > print(a)  # {'바나나', '수박'}
  > a.remove('애플')
  > print(a)  # KeyError: '애플'
  > ```
  > 
  > `s.discard(x)` : 항목 x가 셋 s에 있는 경우, 항목 x를 셋 s에서 삭제
  > 
  > : **항목이 셋에 없어도 에러가 발생하지 않음**
  > 
  > ```python
  > a = {'사과', '바나나', '수박'}
  > print(a)  # {'사과', '수박', '바나나'}
  > a.discard('사과')
  > print(a)  # {'수박', '바나나'}
  > a.discard('애플')
  > print(a)  # {'수박', '바나나'}
  > ```
  > 
  > `s.update(t)` : 셋 t에 있는 모든 항목 중 셋 s에 없는 항목을 추가
  > 
  > ```python
  > a = {'사과', '바나나', '수박'}
  > print(a)  # {'수박', '바나나', '사과'}
  > a.update(['딸기', '바나나', '참외'])  # 리스트 형태로 넣어야
  > print(a)  # {'사과', '딸기', '바나나', '수박', '참외'}
  > a.update('딸기', '바나나', '참외')  # 그렇지 않으면
  > print(a)  # {'사과', '딸기', '바나나', '바', '수박', '참외', '딸', '참', '외', '나', '기'}
  > ```
  > 
  > `s.clear()` : 모든 항목을 제거
  > 
  > `s.isdisjoint(t)` : 셋 s가 셋 t의 서로 같은 항목을 하나라도 갖고 있지 않은 경우 True 반환
  > 
  > `s.issubset(t)` : 셋 s가 셋 t의 하위 셋인 경우 True 반환
  > 
  > `s.issuperset(t)` : 셋 s가 셋 t의 상위 셋인 경우 True 반환

### 딕셔너리(Dictionary)

- 딕셔너리 method
  
  > `d.clear()` : 모든 항목을 제거
  > 
  > `d.copy()` : 딕셔너리 d의 얕은 복사본을 반환
  > 
  > `d.keys()` : 딕셔너리 d의 모든 키를 담은 뷰를 반환
  > 
  > `d.values()` : 딕셔너리 d의 모든 값을 담은 뷰를 반환
  > 
  > `d.items()` : 딕셔너리 d의 모든 키-값 쌍을 담은 뷰를 반환
  > 
  > `d.get(k)` : 키 k의 값을 반환하는데 **키 k가 딕셔너리 d에 없을 경우 None을 반환**
  > 
  > `d.get(k, v)` : 키 k의 값을 반환하는데 키 k가 딕셔너리 d에 없을 경우 v를 반환
  > 
  > ```python
  > my_dict = {'apple': '사과', 'banana': '바나나'}
  > my_dict['pineapple']  # KeyError: 'pineapple'
  > 
  > my_dict = {'apple': '사과', 'banana': '바나나'}
  > print(my_dict.get('pineapple'))  # None
  > print(my_dict.get('apple'))  # 사과
  > print(my_dict.get('pineapple', 0))  # 0
  > ```
  > 
  > `d.pop(k)` : 키 k의 값을 반환하고 키 k인 항목을 딕셔너리 d에서 삭제하는데 **키 k가 딕셔너리 d에 없을 경우 KeyError를 발생**
  > 
  > `d.pop(k, v)` : 키 k의 값을 반환하고 키 k인 항목을 딕셔너리 d에서 삭제하는데 키 k가 딕셔너리 d에 없을 경우 v를 반환
  > 
  > ```python
  > my_dict = {'apple': '사과', 'banana': '바나나'}
  > data = my_dict.pop('apple')
  > print(data, my_dict)  # 사과 {'banana': '바나나'}
  > 
  > my_dict = {'apple': '사과', 'banana': '바나나'}
  > data = my_dict.pop('pineapple')  # KeyError: 'pineapple'
  > print(data, my_dict)
  > 
  > my_dict = {'apple': '사과', 'banana': '바나나'}
  > data = my_dict.pop('pineapple', 0)
  > print(data, my_dict)  # 0 {'apple': '사과', 'banana': '바나나'}
  > ```
  > 
  > `d.update()` : 딕셔너리 d의 값을 매핑하여 업데이트
  > 
  > ```python
  > my_dict = {'apple': '사', 'banana': '바나나'}
  > my_dict.update(apple='사과')
  > print(my_dict)  # {'apple': '사과', 'banana': '바나나'}
  > ```

- 딕셔너리 sort
  
  > key를 기준으로 오름차순 정렬
  > 
  > ```python
  > sorted_dict = sorted(my_dict.items())
  > ```
  > 
  > key를 기준으로 내림차순 정렬
  > item[0]이 key를 의미
  > 
  > ```python
  > sorted_dict = sorted(my_dict.items(), key = lambda item: item[0], reverse = True)
  > ```
  > 
  > value를 기준으로 오름차순 정렬
  > item[1]이 value를 의미
  > 
  > ```python
  > sorted_dict = sorted(my_dict.items(), key = lambda item: item[1])
  > ```
  > 
  > value를 기준으로 내림차순 정렬
  > 
  > ```python
  > sorted_dict = sorted(my_dict.items(), key = lambda item: item[1], reverse = True)
  > ```
  > 
  > key값 없이 value만을 정렬하고 싶은 경우 `my_dict.items()`가 아닌 `my_dict.values()`
  > 
  > ```python
  > sorted_dict = sorted(my_dict.values(), reverse=True)
  > ```

## 얕은 복사와 깊은 복사

### 할당(Assignment)

- 대입 연산자 (=) : 얕은 복사(Shallow copy) 문제가 발생
  
  > 리스트 복사 확인하기 : 해당 객체에 대한 객체 참조를 복사 (같은 주소)
  > 
  > ```python
  > original_list = [1, 2, 3]
  > copy_list = original_list
  > print(original_list, copy_list)  # [1, 2, 3] [1, 2, 3]
  > 
  > copy_list[0] = 'hello'
  > print(original_list, copy_list)  # ['hello', 2, 3] ['hello', 2, 3]
  > ```

### 얕은 복사(Shallow copy) : 슬라이싱, list 함수 사용, copy module 사용

- 2차원 리스트에서는 문제가 해결되지 않음

### 슬라이싱(Slicing)

- Slice 연산자를 활용하여 같은 원소를 가진 리스트지만 연산된 결과를 복사 (다른 주소) 
  
  > 복사하는 리스트의 원소가 주소를 참조하는 경우
  > 
  > ```python
  > original_list = [1, 2, 3]
  > copy_list = original_list[:]
  > print(original_list, copy_list)  # [1, 2, 3] [1, 2, 3]
  > 
  > copy_list[0] = 'hello'
  > print(original_list, copy_list)  # [1, 2, 3] ['hello', 2, 3]
  > 
  > a = [1, 2, ['a', 'b']]
  > b = a[:]
  > print(a, b)  # [1, 2, ['a', 'b']] [1, 2, ['a', 'b']]
  > b[2][0] = 0
  > print(a, b)  # [1, 2, [0, 'b']] [1, 2, [0, 'b']]
  > ```

### list함수 사용

- b = list(a)로 복사
  
  > ```python
  > original_list = [1, 2, 3]
  > copy_list = list(original_list)
  > print(original_list, copy_list)  # [1, 2, 3] [1, 2, 3]
  > 
  > copy_list[0] = 'hello'
  > print(original_list, copy_list)  # [1, 2, 3] ['hello', 2, 3]
  > 
  > a = [1, 2, ['a', 'b']]
  > b = list(a)
  > print(a, b)  # [1, 2, ['a', 'b']] [1, 2, ['a', 'b']]
  > b[2][0] = 0
  > print(a, b)  # [1, 2, [0, 'b']] [1, 2, [0, 'b']]
  > ```

### copy module 사용

- copy 
  
  > ```python
  > import copy
  > original_list = [1, 2, 3]
  > copy_list = copy.copy(original_list)
  > print(original_list, copy_list)  # [1, 2, 3] [1, 2, 3]
  > 
  > copy_list[0] = 'hello'
  > print(original_list, copy_list)  # [1, 2, 3] ['hello', 2, 3]
  > 
  > a = [1, 2, ['a', 'b']]
  > b = copy.copy(a)
  > print(a, b)  # [1, 2, ['a', 'b']] [1, 2, ['a', 'b']]
  > b[2][0] = 0
  > print(a, b)  # [1, 2, [0, 'b']] [1, 2, [0, 'b']]
  > ```

### 깊은 복사(Deep copy)

### import copy (deep copy)

- 2차원 리스트에서의 문제도 해결
  
  > 리스트 복사 확인하기
  > 
  > ```python
  > import copy
  > a = [1, 2, ['a', 'b']]
  > b = copy.deepcopy(a)
  > print(a, b)  # [1, 2, ['a', 'b']] [1, 2, ['a', 'b']]
  > b[2][0] = 0
  > print(a, b)  # [1, 2, ['a', 'b']] [1, 2, [0, 'b']]
  > ```