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

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // 컴포넌트 함수가 실행되고 난 후에 useEffect 실행
  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
