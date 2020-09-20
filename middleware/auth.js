const { UnauthorizedError, FobiddenError } =require('../helpers/apiError');

const jwt= require('jsonwebtoken');
const config= require('config');

const authenticate=async(req,res,next)=>{
    if(req.headers['x-auth-token']){
        const token= req.headers['x-auth-token'];
        try {
            const decoded= await jwt.verify(token,config.get('privateKey'));
            req.user=decoded.user;
            next();

        } catch (error) {
            console.log(error);
            throw new FobiddenError("Token is not valid")
        }

    }
    else{
        throw new UnauthorizedError("You need to login")
    }
}

module.exports= authenticate;