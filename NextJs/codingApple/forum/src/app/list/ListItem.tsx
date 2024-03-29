"use client";

import type { WithId, Document } from "mongodb";
import Link from "next/link";

interface Props {
  results: WithId<Document>[];
}

export default function ListItem(props: Props) {
  return (
    <div>
      {props.results.map((result) => {
        return (
          <div className="list-item" key={result._id.toString()}>
            <Link prefetch={false} href={`/detail/${result._id.toString()}`}>
              <h4>{result.title}</h4>
            </Link>
            <Link href={`/edit/${result._id}`}>✍️</Link>
            <span
              // POST 요청
              onClick={(event) => {
                fetch("/api/post/delete", {
                  method: "DELETE",
                  body: result._id.toString(),
                })
                  .then((response) => {
                    if (response.status == 200) {
                      return response.json();
                    } else {
                      // 서버가 에러코드 전송 시 실행할 코드
                    }
                    // console.log(response);
                  })
                  .then(() => {
                    // 성공 시 실행할 코드

                    // 원래는 root/node_modules/@types/react/global.d.ts 파일에서
                    // parentElement 검색해서 Node extends EventTarget 찾았는데
                    // 에러나서 chatGPT 도움을 받아 extends 대신 & 사용
                    // const target = event.target as Node extends EventTarget;
                    const target = event.target as Node & EventTarget;
                    // 이렇게 parentElement를 정의하지 않고 if 조건문 안에 바로 target.parentElement를 사용하면
                    // setTimeout 안의 target.parentElement에서 에러남
                    const parentElement = target.parentElement;
                    if (parentElement) {
                      parentElement.style.opacity = "0";
                      setTimeout(() => {
                        parentElement.style.display = "none";
                      }, 1000);
                    }
                  })
                  .catch((error) => {
                    // 인터넷 문제로 실패 시 실행할 코드
                    console.log(error);
                  });
              }}
            >
              🗑️
            </span>
            {/* <span
              onClick={() => {
                // URL 뒤에 ?데이터이름=값
                fetch("/api/test?name=kim&age=100");
              }}
            >
              🗑️
            </span> */}
            {/* <span
              onClick={() => {
                // root/src/pages/api/test/[anyword].tsx파일 생성 후
                // 아래처럼 요청을 보내면 해당 파일에서
                // req.query를 통해 확인이 가능
                fetch("/api/test/happy");
              }}
            >
              🗑️
            </span> */}
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
