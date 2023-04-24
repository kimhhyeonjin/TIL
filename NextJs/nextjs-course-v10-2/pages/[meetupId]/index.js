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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          // pregenerate되는 값
          meetupId: "m1",
        },
      },
      {
        params: {
          // pregenerate되는 값
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  // context.params;
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Funguni_Island%2C_Pangani%2C_Tanga.jpg/1280px-Funguni_Island%2C_Pangani%2C_Tanga.jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
