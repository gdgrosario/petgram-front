import { JwtPayload } from "jwt-decode";
import { User } from "./User";

interface ResponseError {
  statusCode: number;
  message: string;
}

interface ResponseAuth {
  user: User;
  access_token: string;
}

interface PayloadToken extends JwtPayload {
  name: string;
  nickName: string;
  role: string;
  sub: string;
}
export type { ResponseError, ResponseAuth, PayloadToken };
