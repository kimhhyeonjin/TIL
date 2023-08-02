import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목을 입력해주세요.");
    } else if (req.body.content == "") {
      return res.status(500).json("내용을 입력해주세요.");
    }
    try {
      const edits = { title: req.body.title, content: req.body.content };
      const client = await connectDB;
      const db = client.db("forum");
      // .updateOne({수정할 게시물 정보}, {$set : {수정할 내용}})
      const result = await db
        .collection("post")
        .updateOne({ _id: new ObjectId(req.body._id) }, { $set: edits });
      // redirect 시키고 싶은 경우
      return res.redirect(302, "/list");
      // return res.status(200).json('저장')
    } catch (error) {
      console.log(error);
    }
  }
}
