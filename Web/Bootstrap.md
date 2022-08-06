# Bootstrap
## CSS Layout
### Flexbox
 - CSS Flexible Box Layout
   - ie 부분지원
   - 행과 열 형태로 아이템들을 배치하는 모델
   - flex-direction
     - Main axis 기준 방향 설정
     - 역방향의 경우 HTML 태그 선언 순서와 시각적으로 다르니 유의 (웹 접근성에 영향)
     > row, row-reverse, column, column-reverse
   - flex-wrap
     - 아이템이 컨테이너를 벗어나는 경우 해당 영역 내에 배치되도록 설정
     - 즉, 기본적으로 컨테이너 영역을 벗어나지 않도록 함
     > wrap(넘치면 그 다음줄로 배치), nowrap(한 줄에 배치)
   - flex-flow
     - flex-direction과 flex-wrap의 shorthand
     - flex-direction과 flex-wrap에 대한 설정값을 차례로 작성
     - ex) flex-flow:row nowrap;
   - justify-content
     - Main axis를 기준으로 공간 배분
     > flex-start, flex-end, center, space-between, space-around, space-evenly
   - align-content
     - cross axis를 기준으로 공간 배분 (아이템이 한 줄로 배치되는 경우 확인할 수 없음)
     > flex-start, flex-end, center, space-between, space-around, space-evenly
   - align-items
     - 모든 아이템을 Cross axis를 기준으로 정렬
     > stretch, flex-start, flex-end, center, baseline
   - align-self
     - 개별 아이템을 Cross axis 기준으로 정렬
     > stretch, flex-start, flex-end, center
   - 기타 속성
     - flex-grow : 남은 영역을 아이템에 분배
     - order : 배치 순서

## Bootstrap
 - Include via CDN
 - CDN
   - Content Delivery(Distribution) Network
   - 컨텐츠(CSS, JS, Image, Text 등)을 효율적으로 전달하기 위해 여러 노드에 가진 네트워크에 데이터를 제공하는 시스템
   - 개별 end-user의 가까운 서버를 통해 빠르게 전달 가능
   - 외부 서버를 활용함으로써 본인 서버의 부하가 적어짐
### Bootstrap 기본원리 (getbootstrap의 공식문서 활용)
### Spacing
 > `{property}{sides}-{size}`
 - mx-auto : 수평 중앙 정렬, 가로 가운데 정렬
 - mt-3 : margin top 3
 - ps-5 : padding side 5
### Display
 - d-inline
 - d-block
### Position
 - fixed-top
 - fixed-bottom
### Bootstrap 컴포넌트 (getbootstrap 이용)
 - Buttons
 - Dropdowns
 - Forms
 - Navbar
 - Carousel
 - Modal

### Bootstrap Grid System
### Grid system (web design)
 - 요소들의 디자인과 배치에 도움을 주는 시스템 (기본으로 flex 설정되어있음)
### Bootstrap grid system
 - Bootstrap grid system은 flexbox로 제작됨
 - container, rows, column으로 컨텐츠를 배치하고 정렬
 - 반드시 기억해야 할 2가지
   1. 12개의 column
   2. 6개의 grid breakpoints
 - Grid system breakpoints : 기본으로 wrap 설정 되어있음 (column이 12개가 넘어가면 자동으로 다음 줄)
   - breakpoint와 @media(미디어쿼리)는 반응형 웹을 만들기 위해 사용