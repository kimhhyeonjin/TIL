import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

// node.js, express.js
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // MongoClient 연결
    const client = await MongoClient.connect(
      "mongodb+srv://<username>:<password>@cluster0.uqu8pq0.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    // meetups에 연결 중인 데이터베이스 받아오기
    // meetups 데이터베이스가 없는 경우 바로 생성됨
    const db = client.db();

    // meetups라는 이름의 collection에 접근
    // meetups collection이 없는 경우 바로 생성됨
    const meetupsCollection = db.collection("meetups");

    // collection에 object 형태의 새 문서 삽입
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    // 데이터베이스 연결 차단
    client.close();

    // res를 통해 응답 반환
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
