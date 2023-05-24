# 네 번째 프로젝트

## 시작

- Nextjs
  
  - `getStaticPaths`
    
    - 동적 세그먼트 값이 있는 객체를 반환
    
    - 쉽게 말해 동적라우팅 + getStaticProps를 사용할 때 필요
      
      - 동적라우팅에 들어갈 수 있는 값을 지정해주는 것
      
      - 값이 존재하지 않는 항목에 대해서는 알아서 404 Not Found 처리를 하기 때문
        
        - pages > series > [id] > index.tsx
          
          ```typescript
          export async function getStaticPaths() {
            const res = await axios.get("http://.../covers");
            const series = await res.data;
          
            const paths = series.content.map((serie: Content) => ({
              // params로 [id]에 들어갈 수 있는 값 하나하나 지정
              params: { id: serie.id.toString() },
            }));
            return {
              paths,
              fallback: "blocking",
            };
          }
          
          export async function getStaticProps(context: GetStaticPropsContext) {
            const seriesId = context.params?.id ?? "";
          
            const res = await axios.get(
              `http://.../covers/${seriesId}`
            );
            const seriesData = res.data;
          
            return {
              props: {
                seriesData,
              },
              revalidate: 1,
            };
          }
          ```

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

- 리팩토링
  
  - `새로운 기능을 만들지 않고` 코드를 개선하는 체계적인 프로세스
    
    - 기능에 변화가 있어서는 안됨
  
  - type을 지정할 때 자주 사용하는 type의 경우 따로 폴더를 빼서 type 지정 후 사용할 컴포넌트에서 import 해서 사용
    
    - 기존
      
      - 사용할 컴포넌트에서 `interface Novel {}`과 같은 형식으로 type 지정 후 사용
      
      - 변경
        
        - src 폴더 하단 pages와 같은 위치에 types 폴더를 생성하고 그 아래에 사용할 폴더명 그 아래에 `index.d.ts` 형식으로 파일 생성
          
          - src > types > novel > index.d.ts
            
            ```ts
            declare module "novel" {
              export interface Novel {
                content: {
                  id: number;
                  title: string;
                  status: string;
                  thumbnail: string;
                  genre: string;
                  writer: {
                    id: number;
                    nickname: string;
                  };
                  isUploaded: boolean;
                  isNew: boolean;
                }[];
                pageable: {
                  sort: {
                    sorted: boolean;
                    unsorted: boolean;
                    empty: boolean;
                  };
                  pageSize: number;
                  pageNumber: number;
                  offset: number;
                  paged: boolean;
                  unpaged: boolean;
                };
                totalPages: number;
                totalElements: number;
                last: boolean;
                number: number;
                sort: {
                  sorted: boolean;
                  unsorted: boolean;
                  empty: boolean;
                };
                size: number;
                numberOfElements: number;
                first: boolean;
                empty: boolean;
              }
            }
            ```
        
        - type을 사용할 컴포넌트에서 import해서 사용
          
          ```typescript
          import { novel } from "novel";
          ```
        
        - 자주 사용하는 경우 반복해서 작성할 필요가 없어 편리
