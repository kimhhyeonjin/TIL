# 두 번째 프로젝트

## 시작

- Typescript
  
  - 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어
  
  - 엄격한 문법
  
  - 타입을 지정함으로써 사전에 에러를 방지

- zustand
  
  - 독일어로 `상태`라는 뜻
  
  - Jotai를 만든 개발진이 만듦
  
  - 장점
    
    - 간단함
    
    - action, dispatch가 필요하지 않음
  
  - 예시
    
    ```typescript
    import { create } from 'zustand';
    
    interface Indicator {
      id: number;
      title: string;
    }
    
    const addIndicator = (
      indicators: Indicator[],
      id: number,
      title: string
    ): Indicator[] => [
      ...indicators,
      {
        id,
        title,
      },
    ];
    
    const removeIndicator = (indicators: Indicator[], id: number): Indicator[] =>
      indicators.filter((indicator) => indicator.id !== id);
    
    const resetIndicator = (indicators: Indicator[]): Indicator[] =>
      indicators.filter((indicator) => indicator.id === 0);
    
    // zustand implementation
    type backtestFactorStore = {
      indicators: Indicator[];
      addIndicator: (id: number, title: string) => void;
      removeIndicator: (id: number) => void;
      resetIndicator: () => void;
    };
    
    // set: mutate the state
    export const useBacktestFactorStore = create<backtestFactorStore>((set) => ({
      indicators: [],
      addIndicator(id: number, title: string) {
        set((state) => ({
          ...state,
          indicators: addIndicator(state.indicators, id, title),
        }));
      },
      removeIndicator(id: number) {
        set((state) => ({
          ...state,
          indicators: removeIndicator(state.indicators, id),
        }));
      },
      resetIndicator() {
        set((state) => ({
          ...state,
          indicators: resetIndicator(state.indicators),
        }));
      },
    }));
    ```

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
