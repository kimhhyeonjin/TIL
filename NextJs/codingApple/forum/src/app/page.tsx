import { connectDB } from "@/util/database";

// 페이지 단위 캐싱
// export const revalidate = 60;

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();
  // console.log(result)

  // GET요청 결과 캐싱
  // // 디폴트
  // await fetch("/URL", { cache: "force-cache" });
  // // 매번 서버로 요청해 실시간 데이터 받아옴
  // await fetch("/URL", { cache: "no-store" });
  // // 60초마다 캐싱된 데이터 갱신
  // await fetch("/URL", { next: { revalidate: 60 } });

  return <div>hello</div>;
}
