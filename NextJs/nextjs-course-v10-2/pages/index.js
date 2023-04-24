import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Funguni_Island%2C_Pangani%2C_Tanga.jpg/1280px-Funguni_Island%2C_Pangani%2C_Tanga.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Funguni_Island%2C_Pangani%2C_Tanga.jpg/1280px-Funguni_Island%2C_Pangani%2C_Tanga.jpg",
    address: "Some address 15, 12345 Some City",
    description: "This is a second meetup!",
  },
];

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

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }

export default HomePage;
