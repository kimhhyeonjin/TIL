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
              // GET 요청
              //   onClick={() => {
              //     fetch("/api")
              //       .then(() => {})
              //       .catch((error) => {
              //         console.log(error);
              //       });
              //   }}
              // POST 요청
              onClick={() => {
                fetch("/api", {
                  method: "POST",
                  body: "데이터",
                  // array나 object를 보내는 경우
                  // JSON.stringify([1, 2, 3])과 같이 입력해야 함
                })
                  .then(() => {})
                  .catch((error) => {
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
