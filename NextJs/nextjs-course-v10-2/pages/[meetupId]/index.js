import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Funguni_Island%2C_Pangani%2C_Tanga.jpg/1280px-Funguni_Island%2C_Pangani%2C_Tanga.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
};

export default MeetupDetails;
