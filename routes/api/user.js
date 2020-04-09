const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require('../../models/User');

router.post('/signup', [check('name', 'Name is required').not().isEmpty(), check('email', 'Email is required').not().isEmpty(), check('password', "Password must be at least 6 digits").isLength({ min: 6 })], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    var { name, email, password } = req.body;

    try {
        //Checking the availability
        var exsist= await User.findOne({email});
        if(exsist){
            console.log(exsist);
            return res.status(400).send('User has been existed');
        }
        // Collecting avatar
        var avatar = gravatar.url('emerleite@gmail.com', { s: '200', r: 'pg', d: '404' });

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
        console.log(error);
        res.status(500).send('Server error');
    }

})
router.post('/login',[check('email','Please give the email').not().isEmpty(), check('password','Please give the password').not().isEmpty()],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    var { email, password } = req.body;

    try {
        // Find User
        var user= await User.findOne({email});
        if(!user){
            return res.status(400).send('No user found');
        }
        //Compare password
        var check_password= await bcript.compare(password, user.password);
        if(!check_password){
            return res.status(401).send('User is unauthorized');
        }
        //Generate web token
        var token = jwt.sign({user:{id:user._id}}, config.get('privateKey'), {expiresIn:'2h'});
        res.json({token});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
})

module.exports = router;