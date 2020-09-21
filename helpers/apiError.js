class ApiError extends Error{
  constructor(statusCode, message, source){
    super()
    this.statusCode = statusCode;
    this.message = message;
    this.source=source;
  }
}
class BadRequestError extends ApiError{
  constructor(message='Bad Request', source){
    super(400, message, source)
  }
}
class UnauthorizedError extends ApiError{
  constructor(message='Please login with a correct account', source){
    super(401, message, source)
  }
}
class FobiddenError extends ApiError{
  constructor(message='Fobbiden', source){
    super(403, message, source)
  }
}
class NotFoundError extends ApiError{
  constructor(message='Not Found', source){
    super(404, message, source)
  }
}
class InternalServerError extends ApiError{
  constructor(message='Internal Server Error', source){
    super(500, message, source)
  }
}
module.exports={
  ApiError,
  BadRequestError,
  UnauthorizedError,
  FobiddenError,
  NotFoundError,
  InternalServerError
}