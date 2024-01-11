import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getSession } from 'next-auth/react';
import { store,setUserId } from "@/redux/store";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    
  ],
  callbacks: {
    session: async ({ session, user }) => {
      if (user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
}

export default NextAuth(authOptions)