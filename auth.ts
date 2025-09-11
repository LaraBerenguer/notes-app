import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        async session({session, user}: any) {
            if (session?.user) {
                session.user.id = user.id;
            }
            return session;
        }
    }
};

const handler = NextAuth(authOptions);
export const handlers = {
    GET: handler,
    POST: handler,
};

export const auth = handler;
export default handler;