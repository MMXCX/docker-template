class ApiError extends Error {
  constructor(
    private readonly _status: number,
    message: string,
    private readonly _errors: string[] = []
  ) {
    super(message)
  }

  static unauthorizedError = () => {
    return new ApiError(401, 'UserModel not authorized.')
  }

  static badRequest = (message: string, errors: any[] = []) => {
    return new ApiError(400, message, errors)
  }

  get status(): number {
    return this._status
  }

  get errors(): string[] {
    return this._errors
  }
}

export default ApiError