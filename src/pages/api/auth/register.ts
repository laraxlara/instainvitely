import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, name, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await prisma.user.create({
        data: {
          email,
          name,
          password: hashedPassword,
        },
      });

      res.status(200).json({ message: "Registration successful" });
      return res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Registration failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
