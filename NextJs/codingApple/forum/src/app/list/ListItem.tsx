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
                    event.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      event.target.parentElement.style.display = "none";
                    }, 1000);
                  })
                  .catch((error) => {
                    // 인터넷 문제로 실패 시 실행할 코드
                    console.log(error);
                  });
              }}
            >
              🗑️
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
