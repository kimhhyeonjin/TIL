# 두 번째 프로젝트

## 시작

- Typescript

- zustand

- tailwind
  
  - 오픈 소스 CSS 프레임워크
  
  - 장점
    
    - 매우 편하다
  
  - 단점
    
    - 지원하지 않는 일부 기능이 있다
      
      - 스크롤바 커스텀
      
      - 일부 template literal
        
        - `width-[${w}px]`
          
          - Dynamic class names
            
            ```
            The most important implication of how Tailwind extracts class names is that it will only find classes that exist as complete unbroken strings in your source files.
            
            If you use string interpolation or concatenate partial class names together, Tailwind will not find them and therefore will not generate the corresponding CSS:
            ```
