import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

interface Props {
  params: {
    id: string;
  };
  searchParams: {};
}

export default async function Detail(props: Props) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  // 유저가 dynamic route 자리에 입력한 값을 출력
  // console.log(props);

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result?.title}</h4>
      <p>{result?.content}</p>
    </div>
  );
}
