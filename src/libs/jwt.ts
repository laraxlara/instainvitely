import jwt from "jsonwebtoken";

//CHANGE THIS NOT WORKING ENV
const JWT_SECRET = process.env.NODE_ENV;

export function generateEmailToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1d" });
}

export function verifyEmailToken(token: string): Promise<{ userId: string }> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded as { userId: string });
      }
    });
  });
}
