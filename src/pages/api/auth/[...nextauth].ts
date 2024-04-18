import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { Session } from "next-auth";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server";
import { randomUUID, randomBytes } from "crypto";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";

const secret = process.env.NEXTAUTH_SECRET;

const prisma = new PrismaClient();

export default async function auth(
  req: NextApiRequest,
  res: NextApiResponse<Session | null>
) {
  return await NextAuth(req, res, {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      CredentialProvider({
        name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Invalid credentials");
          }

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user || !user?.password) {
            throw new Error("Invalid credentials");
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isCorrectPassword) {
            throw new Error("Invalid credentials");
          }

          return user;
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(prisma),
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      generateSessionToken: () => {
        return randomUUID?.() ?? randomBytes(32).toString("hex");
      },
    },
    pages: {
      signIn: "/",
      // signOut: "/auth/signout",
      // error: "/auth/error",
      // verifyRequest: "/auth/verify-request", // (used for check email message)
      // newUser: "/auth/new-user",
    },
  });
}
