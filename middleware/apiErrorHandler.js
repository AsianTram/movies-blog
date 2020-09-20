const { BadRequestError } = require("../helpers/apiError")

module.exports= function(err, req, res, next){
  if(!err.statusCode){
    err= new BadRequestError();
  }
  res.status(err.statusCode).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message,
    source: err.source
  })
}