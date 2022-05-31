interface responseError {
    statusCode: number
    message: string
    error: string
}

interface ResponseAuth extends responseError {
    user: {
        email: string,
        nickname: string,
        role: string,
        id: string
    }
    access_token: string
}

export type{
  responseError,
  ResponseAuth
}
