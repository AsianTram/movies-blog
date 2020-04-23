const express= require('express');
const router= express.Router();
const Movie=require('../../models/Movie');
const User=require('../../models/User');


const auth=require('../../middleware/auth');
const {check, validationResult}= require("express-validator");


router.post('/', [auth, [check("name","Movie name is require"), check("content", "Content is required")]], async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const user= await User.findById(req.user.id);
        if(!user){
            res.send("User doesn't exist");
        }
        const newMovie= new Movie({
            user: req.user.id,
            name: req.body.name,
            picture: req.body.picture,
            content: req.body.content
        })
        const movie= await newMovie.save();
        res.json(movie);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
})


router.get('/', async(req,res)=>{
    try {
        const movies= await Movie.find().sort({date:-1});
        res.json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
})

router.get('/:id', async(req, res)=>{
    try {
        const movie= await Movie.findById(req.params.id);
        if(!movie){
            return res.status(404).json({"msg":"Movie not found"});
        }
        res.json(movie);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
})

router.delete('/:id', auth, async(req, res)=>{
    try {
        const movie= await Movie.findById(req.params.id);
        if(!movie){
            return res.status(404).json({"msg":"Movie not found"});
        }
        if(movie.user.toString()!==req.user.id){
            return res.status(401).send("Only the author can delete the post");
        }
        await movie.remove();
        res.send("Delete Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
})
router.post('/like/:id',auth,async(req, res)=>{
    const user= User.findById(req.user.id);
    if(!user){
        return res.status(401).send("Only user like the post");
    }
    const movie= Movie.findById(req.params.id);
    if(!movie){
        return res.status(404).json({"msg":"Movie not found"});
    }
    await movie.likes.push({user: req.user.id});
    res.json(movie.likes);
})

// Update, unlike and test like
module.exports=router;