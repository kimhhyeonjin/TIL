import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export const dynamic = "force-dynamic";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  const results = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem results={results} />
    </div>
  );
}
