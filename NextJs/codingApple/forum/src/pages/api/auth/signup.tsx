import { connectDB } from "@/util/database";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    // 비밀번호 암호화
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;
    const client = await connectDB;
    const db = client.db("forum");
    const result = await db.collection("user_cred").insertOne(req.body);
    res.status(200).json('가입완료')
  }
}
