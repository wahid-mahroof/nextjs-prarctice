import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "harkirat@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, res) {
        const username = credentials?.username;
        const password = credentials?.password;

        const user = {
          name: "wahid",
          id: "1",
          username: "wahid@gmail.com",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

//export {handler as GET ,handler as POST}

export const GET = handler;
export const POST = handler;
