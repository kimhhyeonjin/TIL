// import { connectDB } from "@/util/database";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
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
  // adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);

/**
 * js 형식이므로 ts 형식으로 수정 필요
 * 현재는 CredentialsProvider에서 ts 에러가 나고 있어 주석 처리
import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    GithubProvider({
      // clientId: "Github에서 발급받은ID",
      clientId: GITHUB_CLIENT_ID,
      // clientSecret: "Github에서 발급받은Secret",
      clientSecret: GITHUB_CLIENT_SECRET,
    }),

    CredentialsProvider({
      // 1. 로그인페이지 폼 자동생성해주는 코드 
      name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
      },

      // 2. 로그인요청시 실행되는코드
      // 직접 DB에서 아이디,비번 비교하고 
      // 아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {
        const db = (await connectDB).db('forum');
        const user = await db.collection('user_cred').findOne({email : credentials.email})
        if (!user) {
          console.log('해당 이메일은 없음');
          return null
        }
        const pwcheck = await bcrypt.compare(credentials.password, user.password);
        if (!pwcheck) {
          console.log('비번틀림');
          return null
        }
        return user
      }
    })
  ],

  // 3. jwt 써놔야 잘됩니다 + jwt 만료일설정
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 // 30일
  },


  callbacks: {
    // 4. jwt 만들 때 실행되는 코드 
    // user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.name = user.name
        token.user.email = user.email
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      session.user = token.user;  
      return session;
    },
  },

  // secret: "jwt생성시쓰는암호", 개발자가 작성
  secret: LOGIN_SECRET,
  // adapter: MongoDBAdapter(connectDB) 
};
export default NextAuth(authOptions); 
 */