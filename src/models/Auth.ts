interface responseError {
    statusCode: number
    message: string
    error: string
}

export interface ResponseAuth extends responseError {
    user: {
        email: string,
        nickname: string,
        role: string,
        id: string
    }
    access_token: string
}
