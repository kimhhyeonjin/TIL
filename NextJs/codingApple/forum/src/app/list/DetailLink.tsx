"use client";

// 클라이언트 컴포넌트에서만 사용
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";

export default function DetailLink() {
  const router = useRouter();
  // 현재 URL 출력
  const currentURL = usePathname();
//   console.log(currentURL);
  // search parameter 출력
  const searchParams = useSearchParams();
//   console.log(searchParams);
  // 유저가 dynamic route 자리에 입력한 값
  const dynamicParams = useParams();
//   console.log(dynamicParams);
  return (
    <button
      onClick={() => {
        router.push("/");
      }}
    >
      버튼
    </button>
  );
}