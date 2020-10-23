const express = require('express');
const gravatar = require('gravatar');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult } = require('express-validator');

const User = require('../../models/User.js');
const { BadRequestError, UnauthorizedError} = require('../../helpers/apiError.js');
const auth= require('../../middleware/auth');


const router = express.Router();

router.post('/signup', [check('name', 'Name is required').not().isEmpty(), check('email', 'Email is required').not().isEmpty(), check('password', "Password must be at least 6 digits").isLength({ min: 6 })], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new BadRequestError(undefined, errors.array())
        }
        var { name, email, password } = req.body;
        //Checking the availability
        var exsist= await User.findOne({email});
        if(exsist){
            throw new UnauthorizedError('User existed');
        }
        // Collecting avatar
        var avatar = gravatar.url(email, { s: '200', r: 'pg', d: '404' });

        //Hash password
        var salt = await bcript.genSalt(10);
        password = await bcript.hash(password, salt);

        //Create User
        var new_user= new User({name, email, avatar, password});
        await new_user.save();

        //Generate web token
        var token = jwt.sign({user:{id:new_user._id}}, config.get('privateKey'), {expiresIn:'2h'});
        res.json({token});
    } catch (error) {
        next(error)
    }

})
router.post('/login',[check('email','Please give the email').not().isEmpty(), check('password','Please give the password').not().isEmpty()],async(req,res, next)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new BadRequestError(undefined, errors.array())
        }
        var { email, password } = req.body;
        // Find User
        var user= await User.findOne({email});
        if(!user){
            throw new UnauthorizedError()
        }
        //Compare password
        var check_password= await bcript.compare(password, user.password);
        if(!check_password){
            throw new UnauthorizedError();
        }
        //Generate web token
        var token = jwt.sign({user:{id:user._id}}, config.get('privateKey'), {expiresIn:'2h'});
        res.json({token});
        
    } catch (error) {
        next(error)
    }
})
router.get('/', auth, async(req,res)=>{
    try {
        const user=await User.findById(req.user.id).select("-password");
        res.json(user)
    } catch (error) {
        next(error)
    }
})
module.exports=router;