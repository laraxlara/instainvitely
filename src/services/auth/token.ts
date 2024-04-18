import jwt, { JwtPayload } from "jsonwebtoken";

// type JWT = {
//   name: string;
//   email: string;
//   iat: number;
//   exp: number;
// };

const encodeJWT = async (params: {
  token: JwtPayload;
  secret: string;
  maxAge: number;
}): Promise<string> => {
  try {
    const { token, secret, maxAge } = params;
    // Sign the payload with the secret key to create a JWT token
    const encodedToken = await jwt.sign(token, secret, { expiresIn: maxAge });
    return encodedToken;
  } catch (error) {
    // Handle error if JWT encoding fails
    console.error("Error encoding JWT:", error);
    throw new Error("Failed to encode JWT");
  }
};

const decodeJWT = async (params: {
  token: string;
  secret: string;
}): Promise<JwtPayload | null> => {
  try {
    const { token, secret } = params;
    // Verify and decode the JWT token using the secret key
    const decoded = (await jwt.verify(token, secret)) as JwtPayload;
    return decoded;
  } catch (error) {
    // Handle error if JWT decoding fails (e.g., expired token, invalid signature)
    console.error("Error decoding JWT:", error);
    return null;
  }
};

export { encodeJWT, decodeJWT };
