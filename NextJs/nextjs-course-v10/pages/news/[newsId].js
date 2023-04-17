import { useRouter } from "next/router";

const DetailPage = () => {
  useRouter();

  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);

  return <h1>The Detail Page</h1>;
};

export default DetailPage;
