const express= require('express');
const router= express.Router();
const Post=require('../../models/Post');
const User=require('../../models/User');


const auth=require('../../middleware/auth');
const {check, validationResult}= require("express-validator");
const { BadRequestError, FobiddenError, InternalServerError, NotFoundError, UnauthorizedError } = require('../../helpers/apiError');


router.post('/', [auth, [check("name","Post name is require"), check("type", "Post type is required"), check("content", "Content is required")]], async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        throw new BadRequestError(null, errors.array());
    }
    try {
        const user= await User.findById(req.user.id);
        if(!user || user.isBanned){
            throw new FobiddenError();
        }
        const newPost= new Post({
            user: req.user.id,
            username: user.username,
            avatar: user.avatar,
            name: req.body.name,
            type: req.body.type,
            picture: req.body.picture,
            content: req.body.content
        })
        const post= await newPost.save();
        res.json(post);
    } catch (error) {
        console.log(error);
        throw new InternalServerError()
    }
})


router.get('/', async(req,res)=>{
    try {
        const posts= await Post.find().sort({date:-1});
        res.json(posts);
    } catch (error) {
        console.log(error);
        throw new InternalServerError()
    }
})

router.get('/:id', async(req, res)=>{
    try {
        const post= await Post.findById(req.params.id);
        if(!post){
            throw new NotFoundError()
        }
        res.json(post);
    } catch (error) {
        console.log(error);
        throw new InternalServerError()
    }
})

router.delete('/:id', auth, async(req, res)=>{
    try {
        const post= await Post.findById(req.params.id);
        if(!post){
            throw new NotFoundError();
        }
        if(post.user.toString()!==req.user.id){
            throw new FobiddenError("Only author of the post can delete")
        }
        await post.remove();
        res.send("Delete Successfully");
    } catch (error) {
        console.log(error);
        throw new InternalServerError()
    }
})
router.put('/:id/like',auth,async(req, res)=>{
    const user= User.findById(req.user.id);
    if(!user){
        throw new UnauthorizedError("You need to login")
    }
    const post= Post.findById(req.params.id);
    if(!post){
        throw new NotFoundError("Post not found")
    }
    await post.likes.push({user: req.user.id});
    res.json(post.likes);
})

module.exports=router;