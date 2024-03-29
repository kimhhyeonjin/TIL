import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 유저가 보낸 데이터
  // console.log(req.body);
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    // req.body에 author 항목 추가
    req.body.author = session.user?.email;
  }
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목을 입력해주세요.");
    } else if (req.body.content == "") {
      return res.status(500).json("내용을 입력해주세요.");
    }
    try {
      const client = await connectDB;
      const db = client.db("forum");
      const result = await db.collection("post").insertOne(req.body);
      // redirect 시키고 싶은 경우
      return res.redirect(302, "/list");
      // return res.status(200).json('저장')
    } catch (error) {
      console.log(error);
    }
  }
}
