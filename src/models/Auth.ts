interface ResponseError {
  statusCode: number;
  message: string;
}

interface ResponseAuth {
  user: {
    email: string;
    nickname: string;
    role: string;
    id: string;
  };
  access_token: string;
}

export type { ResponseError, ResponseAuth };
