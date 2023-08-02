import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

interface Props {
  params: {
    id: string;
  };
  searchParams: {};
}
export default async function Edit(props: Props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="write">
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input
          name="title"
          placeholder="글 제목"
          defaultValue={result?.title}
        />
        <input
          name="content"
          placeholder="글 내용"
          defaultValue={result?.content}
        />
        <input
          style={{ display: "none" }}
          name="_id"
          value={result?._id.toString()}
        />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
