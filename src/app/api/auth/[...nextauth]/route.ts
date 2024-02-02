import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";



export const authOptions: NextAuthOptions = {

    adapter: PrismaAdapter(prisma) as Adapter,

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),

        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Email", type: "email", placeholder: "usuario@mail.com" },
              password: { label: "Contraseña", type: "password", placeholder: "*******"}
            },
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
              
              const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        
              if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
              } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null
        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              }
            }
          }),
    ],


    session: {
        strategy: 'jwt'
    },
    callbacks: {

        async signIn({ user, account, profile, email, credentials }) {


            return true;
        },

        async jwt({ token, user, account, profile }) {

            const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' } })
            if (dbUser?.isActive === false) {
                throw new Error('usuario no esta activo');
            }
                
            token.roles = dbUser?.roles ?? ['no-roles'];
            token.id = dbUser?.id ?? 'no-uuid';
            
            return token;
        },

        async session({ session, token, user }) {

            if (session && session.user) {
                session.user.roles = token.roles;
                session.user.id = token.id;

            }

            return session;
        }

    }

}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }