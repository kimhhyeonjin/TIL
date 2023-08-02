import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  const results = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {results.map((result) => {
        return (
          <div className="list-item" key={result._id.toString()}>
            <Link prefetch={false} href={`/detail/${result._id.toString()}`}>
              <h4>{result.title}</h4>
            </Link>
            <Link href={`/edit/${result._id}`}>✍️</Link>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
