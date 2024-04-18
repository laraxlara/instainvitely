import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import { verifyEmailToken } from "@/libs/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { token } = req.body;

  try {
    const { userId } = await verifyEmailToken(token);

    // Update user's email verification status
    await prisma.user.update({
      where: { id: userId },
      data: { emailVerified: new Date() },
    });

    return res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.error("Error verifying email:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
