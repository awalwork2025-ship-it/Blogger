import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import { z } from "zod";

const TokenPayloadSchema = z.object({
  sub: z.string(),
  role: z.string(),
  exp: z.number().optional()
});

export type TokenPayload = z.infer<typeof TokenPayloadSchema>;

export const signAccessToken = (payload: TokenPayload, secret: string, expiresIn = "15m") =>
  jwt.sign(payload, secret, { expiresIn });

export const verifyAccessToken = (token: string, secret: string) => {
  const decoded = jwt.verify(token, secret);
  return TokenPayloadSchema.parse(decoded);
};

export const generateOtp = (length = 6) =>
  otpGenerator.generate(length, {
    digits: true,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false
  });
