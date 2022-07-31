# Git & Github
## Git이란?
- 버전 : 컴퓨터 소프트웨어의 특정 상태
- 관리 : 어떤 일의 사무, 시설이나 물건의 유지, 개량
- 프로그램 : 컴퓨터에서 실행될 때 특정 작업을 수행하는 일련의 명령어들의 모음
- Git : 분산 버전 관리 프로그램
- Github는 Git기반의 저장소 서비스

## CLI & Markdown
### GUI가 아닌 CLI인 이유
- GUI(Graphic User Interface) : 그래픽을 통해 사용자와 컴퓨터가 상호작용하는 방식
- CLI(Command Line Interface) : 명령어를 통해 사용자와 컴퓨터가 상호작용하는 방식
- GUI는 CLI에 비해 사용하기 쉽지만 단계가 많고 컴퓨터의 성능을 더 많이 소모
- 수 많은 서버/개발 시스템이 CLI를 통한 조작 환경을 제공

### CLI 기본 명령어
- touch : 파일을 생성하는 명령어
- mkdir : 새폴더를 생성하는 명령어 (폴더가 생성되면 ls로 확인했을 때 뒤에 / 표시 있음)
- ls : 현재 작업 중인 디렉토리의 폴더/파일 목록을 보여주는 명령어
- cd : 현재 작업 중인 디렉토리를 변경하는 명령어 (상위폴더로 이동하려면 cd .. / 하위폴더로 이동하려면 cd 하위폴더명)
- start, open : 폴더 / 파일을 여는 명령어 (Window에서는 start / Mac에서는 open)
: VSCode로 열고 싶은 경우는 code 명령어 사용(VSCode 설치 시 사용 가능)
- rm : 파일을 삭제하는 명령어 (폴더 삭제는 rm -rf 명령어 사용)
  
### 절대경로 VS 상대경로
> 절대경로
- 루트 디렉토리부터 목적 지점까지 거치는 모든 경로를 작성한 것
- 윈도우 바탕화면의 절대경로 - C:/Users/User/Desktop
> 상대경로
- 현재 작업하고 있는 디렉토리를 기준으로 계산된 상대적 위치를 작성한 것
- 현재 작업하고 있는 디렉토리가 C:/Users일 때 윈도우 바탕화면으로의 상대경로는 User/Desktop
- ./ : 현재 작업하고 있는 폴더
- ../ : 현재 작업하고 있는 폴더의 부모 폴더

### Markdown
- 텍스트 기반의 가벼운 마크업 언어
- 문서의 구조와 내용을 같이 쉽고 빠르게 적고자 탄생
- # : 글자 크기 조절
- - : 검정 포인트
- **문자 bold 처리**
- [Typora cheat sheet 꼭 읽어보기](https://support.typora.io/Markdown-Reference/)

### Github에서의 Markdown
- README.md 파일을 통해 오픈 소스의 공식문서 작성
- 개인 프로젝트의 소개 문서 작성
- 매일 학습한 내용 정리
- 마크다운을 이용한 블로그 운영
- .gitignore : git init을 하고 바로 만드는 것 추천 [참고사이트](gitignore.io)

## README.md
### README.md
- 프로젝트에 대한 설명 문서
- Github 프로젝트에서 가장 먼저 보는 문서
- 일반적으로 소프트웨어와 함께 배포
- 작성 형식은 따로 없으나, 일반적으로 마크다운을 이용해 작성

### Repository
- 특정 디렉토리를 버전 관리하는 저장소
- git init 명령어로 로컬 저장소를 생성
- git 디렉토리에 버전 관리에 필요한 모든 것이 들어있음

### README.md 생성하기
- Git bash에서 touch readme.md
- 커밋(commit)은 working directory, staging area, repository 이 3가지 영역을 바탕으로 동작
- Working directory : 내가 작업하고 있는 실제 디렉토리
- Staging area : 커밋(commit)으로 남기고 싶은, 특정 버전으로 관리하고 싶은 파일이 있는 곳
               : 중간 확인 공간
- Repository : 커밋(commit)들이 저장되는 곳
- 뉴비인 경우 : working directory에서는 untracked, staging area에서는 staged, repository에서는 committed 상태
- 수정하는 경우 : working directory에서는 modified, staging area에서는 staged, repository에서는 committed 상태

### Git 명령어
- git init
- git status : 현재 git의 상태를 확인하기 위한 명령어
- git add: working directory에 있는 파일이 staging area로 이동하게 하는 명령어
- git add . : 현재 폴더의 모든 파일을 git add 하는 명령어
- git config --global user.email "kimhhyeonjin@gmail.com" : 사용자 이메일 설정
- git config --global user.name "kimhhyeonjin" : 사용자 이름 설정
- git commit : 확실하게 관리할 파일이 맞다는 것을 확인하는 명령어
- git commit –m "커밋 메시지를 입력."
- git log : git의 commit 히스토리를 살펴볼 수 있는 명령어(위에 있을수록 최신)
- git log --oneline : git log를 한 줄씩 볼 수 있는 명령어
- git diff : 두 commit 간 차이를 볼 수 있는 명령어 ex) git diff cb85f3 3f1dda

### Vim 2가지 모드 : command, edit
- command모드에서 edit모드로 변경하려면 insert버튼을 누른다
- edit모드에서 command모드로 변경하려면 esc버튼을 누른 후 아래 칸에 :wq(혹은 :wq!)을 입력한다

## Github
### Repository 생성
- git remote add 레포별명(관용적으로 origin 사용) 레포주소 : local과 remote 연결
- git remote add origin https://github.com/kimhhyeonjin/TIL
- git remote –v : 현재 등록된 remote에 대한 정보 확인하는 명령어
- git remote rm origin : 레포주소 잘못 입력한 경우
- git push 레포별명 브랜치명
- git push origin master
- git branch -M master : main branch 이름을 master로 변경
- git clone 레포주소 : 복제
- >clone과 pull의 차이점
  - clone
     : local로 복제, git(즉 remote 주소)도 같이 복제
      : git init과 git remote add 과정이 필요하지 않음
  - pull
     : remote repository에 있는 버전과 동일한 버전으로 다운받는 것
     : remote 정보가 반드시 필요
     : 이미 git으로 관리되고 있어야 함
- 최초 1회만 clone을 이용하고 그 다음부터는 push와 pull 이용
- 파일을 동시에 수정하면 GITHUB에서는 충돌이 일어남
- 기준버전은 GITHUB
- pull -> add -> commit -> push

### Git 올리고 받기
- git bash 이용하기
- git init : master 등록 안되어있으면 실행
- git add .
- git status
- git commit -m 'TIL first commit'
- git remote add origin https://github.com/kimhhyeonjin/TIL : local과 remote 연결
- git push origin master : 올리기
- git pull origin : 최신버전으로 내려받기