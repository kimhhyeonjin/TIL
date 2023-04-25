import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://<username>:<password>@cluster0.uqu8pq0.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  // meetups에 연결 중인 데이터베이스 받아오기
  // meetups 데이터베이스가 없는 경우 바로 생성됨
  const db = client.db();

  // meetups라는 이름의 collection에 접근
  // meetups collection이 없는 경우 바로 생성됨
  const meetupsCollection = db.collection("meetups");

  // find(필터 기준, 선택할 argument 지정)
  // 아래의 경우 find(전체, id 필드만 포함)
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // context.params;
  const meetupId = context.params.meetupId;

  // fetch data for a single meetup

  const client = await MongoClient.connect(
    "mongodb+srv://<username>:<password>@cluster0.uqu8pq0.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  // meetups에 연결 중인 데이터베이스 받아오기
  // meetups 데이터베이스가 없는 경우 바로 생성됨
  const db = client.db();

  // meetups라는 이름의 collection에 접근
  // meetups collection이 없는 경우 바로 생성됨
  const meetupsCollection = db.collection("meetups");

  // 하나의 문서 찾기
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
