# 네 번째 프로젝트

## 시작

- Jotai
  
  - atomWithStorage
    
    - localStorage 나 sessionStorage에 해당 atom을 저장시키고 가져올 수 있음
    
    - 저장하기
      
      - `atomWithStorage(key, initialValue, storage(optional))`
      
      ```typescript
      import { atomWithStorage } from "jotai/utils";
      
      export const loginAtom = atomWithStorage("loginStatus", false);
      
      export const isUserAtom = atomWithStorage("isUserStatus", false);
      ```
    
    - 불러오기
      
      - useAtom 혹은 useAtomValue 이용
      
      - useAtom은 useState와 같이 그 값을 변화시키고 사용하는 경우 이용
        
        ```typescript
        import { loginAtom, isUserAtom } from "@/src/store/Login";
        import { useAtom } from "jotai";
        
          const [loginStatus, setLoginStatus] = useAtom(loginAtom);
          const [isUserStatus, setIsUserStatus] = useAtom(isUserAtom);
          useEffect(() => {
            // console.log("store 변경");
            setLoginStatus(Boolean(props.loginStatus));
            setIsUserStatus(Boolean(props.isUserStatus));
          }, []);
        ```
      
      - useAtomValue는 그 값을 사용하는 경우 이용
        
        ```typescript
        import { themeAtom } from "@/src/store/Theme";
        import { useAtomValue } from "jotai";
        
          const value = useAtomValue(themeAtom);
        ```
