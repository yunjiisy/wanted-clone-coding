// route.ts에서 option을 정의해줘도 되지만 파일을 분리해서 option들은 여기에 넣어주겠다
// option안에 제공해야 할 것 -> provider
// 환경변수로 nextAuth_Scret을 설정해준다
import type { NextAuthOptions } from 'next-auth'
// import KakaoProvider from 'next-auth/providers/kakao'
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter } from '@next-auth/firebase-adapter'
import { cert } from 'firebase-admin/app'

export const options: NextAuthOptions = {
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey:
        process.env.FIREBASE_PRIVATE_KEY != null
          ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, '\n')
          : undefined,
    }),
  }),
  providers: [
    // KakaoProvider({
    //   clientId: process.env.KAKAO_CLIENT_ID as string,
    //   clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
  },

  pages: {
    signIn: 'auth/signin',
    // 내가 만든 signin페이지쓰려면 넣어줌. 아니면 auth가 자동으로 만들어줌
  },
}
