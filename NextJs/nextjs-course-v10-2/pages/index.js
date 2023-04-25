import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  // getStaticProps를 쓰면 상태를 관리할 필요가 없어짐
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // getStaticProps를 쓰면 useEffect가 필요하지 않음
  // 컴포넌트 함수가 실행되고 난 후에 useEffect 실행
  // useEffect(() => {
  //   // send a http request and fetch data
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  // getStaticProps 사용 이전
  // return <MeetupList meetups={loadedMeetups} />;
  // getStaticProps 사용 이후
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
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

  // 모든 문서 반환
  const meetups = await meetupsCollection.find().toArray();

  // 데이터베이스 연결 차단
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        // 객체를 사용가능한 문자열로 변환
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
