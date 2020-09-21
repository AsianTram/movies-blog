const { UnauthorizedError, FobiddenError, InternalServerError } =require('../helpers/apiError');

const jwt= require('jsonwebtoken');
const config= require('config');
const User = require('../models/User');

const authenticate=async(req,res,next)=>{
    try {
        if(req.headers['x-auth-token']){
            const token= req.headers['x-auth-token'];
            const decoded= await jwt.verify(token,config.get('privateKey'));
            const user= await User.findById(decoded.user.id)
            if(!user){
                throw new UnauthorizedError()
            }
            if(user.isBanned){
                throw new FobiddenError('This user is banned')
            }
            req.user=decoded.user;
            next();

        }
        else{
            throw new UnauthorizedError("You need to login")
        }
    } catch (error) {
        if(error instanceof jwt.TokenExpiredError){
            error= new UnauthorizedError('Token has expired')
        }
        if(error instanceof jwt.JsonWebTokenError){
            error= new FobiddenError('Token is invalid')
        }
        
        next(error)
    }
    
}

module.exports= authenticate;