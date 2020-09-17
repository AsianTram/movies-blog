class ApiError extends Error{
  constructor(statusCode, message, source){
    super()
  }
}

export class BadRequestError extends ApiError{
  constructor(message='Bad Request', source){
    super(400, message, source)
  }
}
export class UnauthorizedError extends ApiError{
  constructor(message='Unauthorized request. Please Login', source){
    super(401, message, source)
  }
}
export class FobiddenError extends ApiError{
  constructor(message='Fobbiden', source){
    super(403, message, source)
  }
}
export class NotFoundError extends ApiError{
  constructor(message='Not Found', source){
    super(404, message, source)
  }
}
export class InternalServerError extends ApiError{
  constructor(message='Internal Server Error', source){
    super(500, message, source)
  }
}