interface ResponseError {
    statusCode: number
    message: string
    error: string
}

interface ResponseAuth extends ResponseError {
    user: {
        email: string,
        nickname: string,
        role: string,
        id: string
    }
    access_token: string
}

export type{
  ResponseError ,
  ResponseAuth
}
