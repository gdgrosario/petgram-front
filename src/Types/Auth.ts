interface responseError {
    statusCode: number
    message: string
    error: string
}

export interface responseAuth extends responseError {
    user: {
        email: string,
        nickname: string,
        role: string,
        id: string
    }
    access_token: string
}
