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

- 카카오 로그인하기
  
  - Next.js 환경에서 쿠키로 카카오 로그인하기
    
    - getServerSideProps를 이용하여 쿠키를 받아온다.
      
      ```typescript
      import { NextPageContext } from "next";
      
      // 쿠키 확인
      export async function getServerSideProps({ req }: NextPageContext) {
        const cookies =
          req && req.headers && req.headers.cookie ? req.headers.cookie : "";
        const cookie = decodeURIComponent(cookies);
        // 쿠키를 ; 기준으로 나누어 그 중 userDto가 존재하는지 확인
        const parts = cookie.split("; ");
        let userDTOcookie = "";
        for (let i = 0; i < parts.length; i++) {
          if (parts[i].startsWith("userDto=")) {
            userDTOcookie = parts[i].substring("userDto=".length);
            break;
          }
        }
      
        return {
          props: {
            userDTO: userDTOcookie,
          },
        };
      }
      ```
    
    - 원하는 쿠키를 저장한다.
      
      ```typescript
      import { loginAtom, userInfoAtom } from "../store/Login";
      import { useAtom } from "jotai";
      import { useEffect } from "react";
      
      export default function Home(props: { userDTO: string }) {
        // props.userDTO값이 ""인 경우 "" 아니면 JSON parse
        const userDTO = props.userDTO === "" ? "" : JSON.parse(props.userDTO);
        // userDTO값이 존재하면 JSON형태로 저장
        const newUserInfo =
          userDTO === ""
            ? undefined
            : {
                id: userDTO.id,
                nickname: userDTO.nickname,
                profileImage: userDTO.profileImage,
                point: userDTO.point,
              };
      
        // 쿠키 상태 관리
        const [loginStatus, setLoginStatus] = useAtom(loginAtom);
        const [userInfoStatus, setUserInfoStatus] = useAtom(userInfoAtom);
        useEffect(() => {
          setLoginStatus(userDTO === "" ? false : true);
          setUserInfoStatus(newUserInfo);
        }, []);
      
        return (
          <HomeWrapper>
          </HomeWrapper>
        );
      }
      ```
    
    - 새로고침해도 날아가지 않도록 localStorage에 저장한다.
      
      ```typescript
      import { atomWithStorage } from "jotai/utils";
      
      export const loginAtom = atomWithStorage("loginStatus", false);
      
      export const userInfoAtom = atomWithStorage<
        | undefined
        | {
            id: number;
            point: number;
            profileImage: string;
            nickname: string;
          }
      >("userInfoStatus", undefined);
      ```
    
    - 주의사항
      
      - app 컴포넌트에서는 getServerSideProps가 적용되지 않음
        
        - getServerSideProps는 Next.js의 라이프사이클 중 서버에서만 실행되는 단계에서 호출되는 함수이기 때문
        
        - useEffect를 통해 로그인 상태를 가져올 수 있지만 로그인을 하더라도 상태가 반영되지 않아 상태관리를 하지 못함
      
      - page 폴더 아래에 있는 컴포넌트에서 getServerSideProps를 실행해야 함
