import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  const results = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {results.map((result, idx) => {
        return (
          <div className="list-item" key={idx}>
            <Link prefetch={false} href={`/detail/${result._id.toString()}`}>
              <h4>{result.title}</h4>
            </Link>
            <DetailLink />
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
