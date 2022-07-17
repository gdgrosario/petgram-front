interface ResponseError {
  statusCode: number;
  message: string;
  [key: string]: any;
}

interface ResponseAuth {
  user: {
    email: string;
    nickname: string;
    role: string;
    id: string;
  };
  access_token: string;
  [key: string]: any;
}

export type { ResponseError, ResponseAuth };
