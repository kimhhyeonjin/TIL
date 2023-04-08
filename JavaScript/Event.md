# Event

### EventHandler

- EventHandler
  
  - 특정 요소에서 발생하는 이벤트를 처리하기 위해 사용하는 함수

- 종류
  
  | 함수           |                                      |
  | ------------ | ------------------------------------ |
  | onmouseover  | 마우스 포인터가 요소 위에 올라왔을 시                |
  | onmouseout   | 마우스 포인터가 요소를 벗어났을 시                  |
  | onmouseenter | 마우스 포인터가 요소 위에 올라왔을 시 / 버블링이 발생하지 않음 |
  | onmouseleave | 마우스 포인터가 요소를 벗어났을 시 / 버블링이 발생하지 않음   |
  | onblur       | input 요소에서 focus를 잃을 시               |
  | onfocus      | input 요소에서 focus가 주어질 시              |

- beforeunload
  
  - 문서와 그 리소스가 언로드 되기 직전에 window에서 발생
  
  - 이벤트 발생 시점에는 아직 문서를 볼 수 있으며 이벤트 취소도 가능함
    
    ```js
    window.addEventListener('beforeunload', (event) => {
      // 표준에 따라 기본 동작 방지
      event.preventDefault();
      // Chrome에서는 returnValue 설정이 필요함
      event.returnValue = '';
    });
    ```
  
  - 실제 사용 예시
    
    ```js
      // 새로고침 시 axios 보내기
      const beforeUnLoad = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.returnValue = "";
      };
    
      useEffect(() => {
        window.addEventListener("beforeunload", beforeUnLoad);
        leaveSession();
    
        return () => {
          window.removeEventListener("beforeunload", beforeUnLoad);
        };
      }, []);
    ```
  
  - 실제 사용 예시 2
    
    ```typescript
      // 새로고침 시 정보 초기화
      const beforeUnLoad = () => {
        // reset();
      };
      // 대표전략이나 나의 전략조회에서 바로 넘어오는 경우
      useEffect(() => {
        if (location.state !== null) {
          const redirectIndicators: number[] = location.state.indicators;
          // console.log(redirectIndicators);
          backtestFactor.loadSelectedIndicator(redirectIndicators);
          setShowFactor(true);
        }
        window.addEventListener('beforeunload', beforeUnLoad);
        return () => {
          window.removeEventListener('beforeunload', beforeUnLoad);
          reset();
        };
      }, []);
    ```

- onClick 함수에 파라미터 전달하기
  
  - `onClick={(event) => {onClickHandler(parameter, event)}}`
    
    ```javascript
    const onClickHandler = (parameter, event) => {
        console.log(parameter)
    }
    ```
