# Git Advanced

## Git undoing

- Git 작업 되돌리기

- Git에서 되돌리기는 작업 상태에 따라 크게 세 가지로 분류
  
  - **Working Directory** 작업 단계
    
    - Working Directory에서 수정한 파일 내용을 이전 커밋 상태로 되돌리기
    
    - `git restore (파일이름)`
      
      - 이미 버전 관리가 되고 있는 파일만 되돌리기 가능
      
      - `git restore`를 통해 되돌리면, 해당 내용을 복원할 수 없음
    
    - `git stash`
      
      - stash 공간에 임시보관
      
      - `git stash apply`를 통해 다시 불러올 수 있음
      
      - stash를 비우려면 `git stash drop`
  
  - **Staging Area** 작업 단계
    
    - Staging Area에 반영된 파일을 Working Directory로 되돌리기 (Unstage)
    
    - root-commit 여부에 따라 두 가지 명령어로 나뉨
      
      - root-commit이 없는 경우: `git rm --cached (파일이름)`
        
        - Git 저장소가 만들어지고 한번도 커밋을 하지 않은 경우
        
        - Git에서 관리되고 있는 파일을 더 이상 관리하고 싶지 않은 경우
      
      - root-commit이 있는 경우: `git restore --staged (파일이름)`
        
        - Git 저장소에 한 개 이상의 커밋이 있는 경우
  
  - **Repository** 작업 단계
    
    - 커밋을 완료한 파일을 Staging Area로 되돌리기
    
    - `git commit --amend`
      
      - Staging Area에 새로 올라온 내용이 없다면 직전 커밋의 메시지만 수정
      
      - Staging Area에 새로 올라온 내용이 있다면 직전 커밋을 덮어쓰기
      
      - 이전 커밋을 완전히 고쳐서 새 커밋으로 변경하므로 이전 커밋은 일어나지 않은 일이 되며 히스토리에도 남지 않음
      
      - 팀으로 작업할 때는 웬만하면 이용하지 않는 것을 추천
    
    - Vim 간단 사용법
      
      - 입력 모드 (`i`): 문서 편집 가능
      
      - 명령 모드 (`esc`)
        
        - 저장 및 종료: `:wq`
        
        - 강제 종료: `:q!`

## Git reset & revert

### Git reset

- 프로젝트의 특정 커밋(버전) 상태로 되돌림

- 특정 커밋으로 되돌아 갔을 때, 해당 커밋 이후로 쌓였던 커밋은 전부 사라짐

- `git reset [옵션] {커밋 ID}`
  
  - 옵션
    
    - `--soft`
      
      - 해당 커밋으로 되돌아가고 되돌아간 커밋 이후의 파일은 Staging Area로 돌려놓음
    
    - `--mixed`
      
      - 해당 커밋으로 되돌아가고 되돌아간 커밋 이후의 파일은 Working Directory로 돌려놓음
      
      - git reset 옵션의 기본값
    
    - `--hard`
      
      - 해당 커밋으로 되돌아가고 되돌아간 커밋 이후의 파일은 모두 Working Directory에서 삭제됨
        
        - 복구하려면 `git reflog`를 통해 hash값을 알아낸 후 다시 `git reset`
      
      - 기존의 Untracked 파일은 사라지지 않고 Untracked로 남아있음
  
  - 커밋 ID는 hash값

### Git revert

- 과거를 없었던 일로 만드는 행위로, 이전 커밋을 취소한다는 새로운 커밋을 생성함

- `git revert {커밋 ID}`

- Github를 이용해 협업할 때, 커밋 내역의 차이로 인한 충돌 방지 가능

- merge한 사항을 revert하기
  
  - `git log`를 통해 revert하고 싶은 부모의 커밋 id 찾기
  
  - `-m 1`또는 `-m 2`를 뒤에 붙여주기
    
    - `git revert -m 1{커밋 ID}`
    
    - `git revert -m 2 {커밋 ID}`

## Git branch & merge

### Git branch

- Branch는 여러 갈래로 작업 공간을 나누어 독립적으로 작업할 수 있도록 도와주는 Git의 도구

- 장점
  
  - 독립 공간을 형성하기 때문에 원본(master)에 대해 안전함
  
  - 하나의 작업은 하나의 브랜치로 나누어 진행되므로 체계적인 개발이 가능함
  
  - Git은 브랜치를 만드는 속도가 빠르고, 적은 용량을 소모함

- git branch
  
  - 브랜치의 조회, 생성, 삭제와 관련된 Git 명령어
  
  - 조회
    
    - `git branch`: 로컬 저장소의 브랜치 목록 확인
    
    - `git branch -r`: 원격 저장소의 브랜치 목록 확인
  
  - 생성
    
    - `git branch {브랜치 이름}`: 새로운 브랜치 생성
    
    - `git branch {브랜치 이름} {커밋 ID}`: 특정 커밋 기준으로 브랜치 생성
  
  - 삭제
    
    - `git branch -d {브랜치 이름}`: 병합된(merge가 완료된) 브랜치만 삭제 가능
    
    - `git branch -D {브랜치 이름}`: 강제 삭제

- git switch
  
  - 현재 브랜치에서 다른 브랜치로 이동하는 명령어
  
  - `git switch {브랜치 이름}`: 다른 브랜치로 이동
  
  - `git switch -c {브랜치 이름}`: 브랜치를 새로 생성 및 이동
  
  - `git switch -c {브랜치 이름} {커밋 ID}`: 특정 커밋 기준으로 브랜치 생성 및 이동
  
  - 주의할 점
    
    - switch하기 전에 해당 브랜치의 변경 사항을 **반드시 커밋**해야함
      
      - 다른 브랜치에서 파일을 만들고 **커밋하지 않은 상태에서** switch를 하면 브랜치를 이동했음에도 불구하고 해당 파일이 그대로 남아있게 됨

### Git merge

- git merge
  
  - 분기된 브랜치를 하나로 합치는 명령어
  
  - master 브랜치가 상용이므로, **주로 master 브랜치에 병합**
  
  - 병합 후 병합된 브랜치 삭제
  
  - `git merge {합칠 브랜치 이름}`
    
    - 병합하기 전에 브랜치를 합치려고하는 메인 브랜치로 switch 해야 함
    
    - 병합의 세가지 종류
      
      - Fast-Forward
      
      - 3-way Merge
      
      - Merge Conflict
  
  - Fast-Forward
    
    - 빨리감기처럼 브랜치가 가리키는 커밋을 앞으로 이동시키는 방법
  
  - 3-way Merge
    
    - 각 브랜치의 가장 최근의 커밋 두 개와 공통 조상 하나를 사용하여 병합하는 방법
  
  - Merge Conflict
    
    - 두 브랜치에서 같은 부분을 수정한 경우, Git이 어느 브랜치의 내용으로 작성해야하는지 판단하지 못하여 충돌(Conflict)이 발생했을 때 이를 해결하며 병합하는 방법
    
    - 보통 같은 파일의 같은 부분을 수정했을 때 자주 발생함
    
    - Conflict 해결 후 `git add .` 과 `git commit` 입력 후 MERGING 글자 사라진 것 확인

## Git workflow

- Branch와 원격 저장소를 이용해 협업을 하는 두 가지 방법
  
  - 원격 저장소 소유권이 있는 경우
    
    - `Shared repository model`
  
  - 원격 저장소 소유권이 없는 경우
    
    - `Fork & Pull model`

### Shared repository model

- shared repository model
  
  - 원격 저장소가 자신의 소유이거나 Collaborator로 등록되어 있는 경우
  
  - master 브랜치에 직접 개발하는 것이 아니라, 기능별로 브랜치를 따로 만들어 개발
  
  - Pull Request를 사용하여 팀원 간 변경 내용에 대한 소통 진행

- 과정
  
  - 소유권이 있는 원격 저장소를 로컬 저장소로 clone 받기
  
  - 사용자는 자신이 작업할 기능에 대한 브랜치를 생성하고 그 안에서 기능을 구현
  
  - 기능 구현이 완료되면 원격 저장소에 **해당 브랜치**(master 아님)를 Push
  
  - 원격 저장소에 각 기능의 브랜치가 반영됨
  
  - Pull Request를 통해 브랜치를 master에 반영해달라는 요청을 보냄
  
  - 병합이 완료된 브랜치는 원격 저장소에서 삭제
  
  - 원격 저장소에서 병합이 완료되면 사용자는 로컬에서 master 브랜치로 switch
  
  - 병합으로 인해 변경된 원격 저장소의 master 내용을 로컬에 Pull
  
  - 원격 저장소 master의 내용을 받았으므로 기존 로컬 브랜치 삭제
    
    - 한 사이클 종료
  
  - 새로운 기능을 추가하기 위해서는 위의 과정을 반복

### Fork & Pull model

- Fork & Pull model
  
  - 오픈 소스 프로젝트와 같이 자신의 소유가 아닌 원격 저장소인 경우
  
  - 원본 원격 저장소를 그대로 내 원격 저장소에 복제(Fork)
  
  - 기능 완성 후 복제한 내 원격 저장소에 Push
  
  - 이후 Pull Request를 통해 원본 원격 저장소에 반영될 수 있도록 요청함

- 과정
  
  - 소유권이 없는 원격 저장소를 fork를 통해 내 원격 저장소로 복제
  
  - clone을 받기
  
  - 이후에 로컬 저장소와 원본 원격 저장소를 동기화하기 위해 연결 `git remote`
  
  - 사용자는 자신이 작업할 기능에 대한 브랜치를 생성하고 기능을 구현
  
  - 기능 구현이 완료되면 복제 원격 저장소(origin)에 해당 브랜치를 Push
  
  - 복제 원격 저장소(origin)에 브랜치가 반영됨
  
  - Pull Request를 통해 origin의 브랜치를 upstream에 반영해달라는 요청을 보냄
  
  - upstream에 브랜치가 병합되면 origin의 브랜치는 삭제
  
  - 이후 사용자는 pull 받기
  
  - 새로운 기능 추가를 위해 새로운 브랜치를 생성하며 위 과정을 반복
