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
            res.status(401).json({msg:"Token is not valid"});
        }

    }
    else{
        return res.status(400).json({msg:"No token, authorization denied"});

    }
}

module.exports= authenticate;