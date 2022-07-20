import { User } from "./User";

interface ResponseError {
  statusCode: number;
  message: string;
}

interface ResponseAuth {
  user: User;
  access_token: string;
}

export type { ResponseError, ResponseAuth };
