import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID!;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!;
const LOGIN_SECRET = process.env.LOGIN_SECRET;

export const authOptions = {
  // 구현하고 싶은 로그인 방식 입력
  providers: [
    GithubProvider({
      // clientId: "Github에서 발급받은ID",
      clientId: GITHUB_CLIENT_ID,
      // clientSecret: "Github에서 발급받은Secret",
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  // secret: "jwt생성시쓰는암호", 개발자가 작성
  secret: LOGIN_SECRET,
};
export default NextAuth(authOptions);
