const express= require('express');
const router= express.Router();
const auth= require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const gravatar= require('gravatar');
const bcript= require('bcryptjs');
const jwt= require('jsonwebtoken');
const config= require('config');

const User= require('../../models/User');
const Profile= require('../../models/Profile');
const { BadRequestError, UnauthorizedError, InternalServerError, NotFoundError } = require('../../helpers/apiError.js');

router.post('/', [auth, check('name', "Name is required").not().isEmpty()], async(req,res, next)=>{
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw new BadRequestError(undefined, errors.array())
            }
            var {name, bio, facebook, instagram, linkedin, website, youtube} = req.body;
            var socialmedia= {facebook, instagram,linkedin,website,youtube};

            var profile = new Profile({user: req.user.id, name, bio, socialmedia});
            await profile.save();

            res.json(profile);
            
        } catch (error) {
            next(error)
        }
})

router.put('/update/', [auth, check('name', "Name is required").not().isEmpty()], async(req,res, next)=>{
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw new BadRequestError(undefined, errors.array())
            }
            var {name, bio, facebook, instagram, linkedin, website, youtube} = req.body;
            var socialmedia= {facebook, instagram,linkedin,website,youtube};
            
            // Search for profile
            var profile=await Profile.findOneAndUpdate({user: req.user.id},{name, bio, socialmedia});
            res.json(profile);
            
        } catch (error) {
            next(error)

        }
})

router.get('/', auth, async(req,res, next)=>{
    try {
        var profile= await Profile.findOne({user: req.user.id});
        
        if(!profile){
            throw new NotFoundError("You have not created any profile yet!");
        }
        res.json(profile);
    } catch (error) {
        next(error)
    }
})
router.delete('/delete/', auth, async (req,res, next)=>{
    try {
        await Profile.remove({user: req.user.id});
        await User.remove({_id: req.user.id});
        res.send("User is removed");

    } catch (error) {
        next(error)
    }
})
module.exports=router;