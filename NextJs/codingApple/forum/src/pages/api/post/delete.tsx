import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "DELETE") {
    try {
      const client = await connectDB;
      const db = client.db("forum");
      // .deleteOne({수정할 게시물 정보})
      const result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(req.body) });
      if (result.deletedCount == 1) {
        return res.status(200).json('삭제 완료')
      } else if (result.deletedCount == 1) {
        return res.status(500).json("삭제 안 됨");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
