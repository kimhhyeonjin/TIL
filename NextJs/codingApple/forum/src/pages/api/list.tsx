// /api/list로 GET/POST/PUT/DELETE/PATCH 요청을 하면
// 파일안의 코드를 실행해줌

import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/util/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await connectDB;
  const db = client.db("forum");
  const result = await db.collection("post").find().toArray();

  if (req.method == "GET") {
    res.status(200).json(result);
  }
  if (req.method == "POST") {
    res.status(200).json({});
  }
}
