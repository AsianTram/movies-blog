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

router.post('/', [auth, check('name', "Name is required").not().isEmpty()], async(req,res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        try {
            var {name, bio, facebook, instagram, linkedin, website, youtube} = req.body;
            var socialmedia= {facebook, instagram,linkedin,website,youtube};

            var profile = new Profile({user: req.user.id, name, bio, socialmedia});
            await profile.save();

            res.send(profile);
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Server error');

        }
})

router.put('/update/', [auth, check('name', "Name is required").not().isEmpty()], async(req,res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        try {
            var {name, bio, facebook, instagram, linkedin, website, youtube} = req.body;
            var socialmedia= {facebook, instagram,linkedin,website,youtube};
            
            // Search for profile
            console.log(req.user.id);
            var old_profile=await Profile.findOneAndUpdate({user: req.user.id},{name, bio, socialmedia});
            res.send("Update successfully!");
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Server error');

        }
})

router.get('/', auth, async(req,res)=>{
    try {
        var profile= await Profile.findOne({user: req.user.id});
        
        if(!profile){
            return res.status(400).send("You have not created any profile yet!");
        }
        res.json(profile);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
})
router.delete('/delete/', auth, async (req,res)=>{
    try {
        await Profile.remove({user: req.user.id});
        await User.remove({_id: req.user.id});
        res.send("User is removed");

    } catch (error) {
        console.log("Failed to remove user"+ error);
        res.status(500).send('Server error');

    }
})
module.exports=router;