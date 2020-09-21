const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');
const User = require('../../models/User');


const auth = require('../../middleware/auth');
const { check, validationResult } = require("express-validator");
const { BadRequestError, FobiddenError, InternalServerError, NotFoundError, UnauthorizedError } = require('../../helpers/apiError');
const Profile = require('../../models/Profile');


router.post('/', [auth, [check("name", "Post name is require").not().isEmpty(), check("type", "Post type is required").not().isEmpty(), check("content", "Content is required").not().isEmpty()]], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new BadRequestError(undefined, errors.array())
        }
        const user = await User.findById(req.user.id);
        
        const newPost = new Post({
            user: req.user.id,
            username: user.name,
            avatar: user.avatar,
            name: req.body.name,
            type: req.body.type,
            picture: req.body.picture,
            content: req.body.content
        })
        const post = await newPost.save();

        const profile= await Profile.findOne({user: req.user.id})
        profile.posts.push({
            postid: post.id,
            type: post.type
        })
        await profile.save()

        res.json(post);
    } catch (error) {
        console.log(error)
        next(error)
    }
})


router.get('/', async (req, res, next) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            throw new NotFoundError()
        }
        res.json(post);
    } catch (error) {
        next(error);
    }
})

router.put('/:id',[auth, check('name', "Name is required").not().isEmpty(),check('type', "Type is required").not().isEmpty(),check('content', "Content is required").not().isEmpty()], async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new BadRequestError(undefined, errors.array())
        }

        const post = await Post.findById(req.params.id)
        if (!post) {
            throw new NotFoundError()
        }
        if(post.user.toString()!== req.user.id.toString()){
            throw new FobiddenError("Only author can edit")
        }
        post.name= req.body.name
        post.type= req.body.type
        post.content= req.body.content

        if(req.body.picture){
            post.picture=req.body.picture
        }
        await post.save()
        res.json(post);
    } catch (error) {
        console.log(error)
        next(error);
    }
})

router.delete('/:id', auth, async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            throw new NotFoundError();
        }
        if (post.user.toString() !== req.user.id.toString()) {
            throw new FobiddenError("Only author of the post can delete")
        }
        await post.remove();
        res.send("Delete Successfully");
    } catch (error) {
        next(error);
    }
})
router.put('/:id/like', auth, async (req, res, next) => {
    try {
        
        const user = await User.findById(req.user.id);
        
        const post = await Post.findById(req.params.id);
        if (!post) {
            throw new NotFoundError("Post not found")
        }
        if(post.likes.filter(like=>like.user.toString()===req.user.id).length>0){
            throw new FobiddenError("Post has been already liked");
            
        }
        const data={
            user: req.user.id.toString(),
            name: user.name,
            avatar: user.avatar
        }
        post.likes.push(data);
        await post.save()
        res.json(data);
    } catch (error) {
        next(error)
    }

})

router.put('/:id/unlike', auth, async (req, res, next) => {
    try {        
        const post = await Post.findById(req.params.id);
        if (!post) {
            throw new NotFoundError("Post not found")
        }
        if(post.likes.filter(like=>like.user.toString()===req.user.id).length===0){
            throw new FobiddenError("Post has not been already liked");
            
        }
        post.likes=post.likes.filter(l => l.user.toString()!== req.user.id.toString());
        await post.save()

        res.json(post);
    } catch (error) {
        console.log(error)
        next(error)
    }

})

router.put('/:id/follow', auth, async (req, res, next) => {
    try {        
        const post = await Post.findById(req.params.id);
        if (!post) {
            throw new NotFoundError("Post not found")
        }
        const profile= await Profile.findOne({user: req.user.id})
        if(!profile){
            throw new FobiddenError("You need to create a profile first")
        }
        profile.followedposts.push({
            postid: post.id,
            type: post.type
        })
        await profile.save()

        post.followed.push({user: req.user.id});
        await post.save()
        

        res.json({
            user: req.user.id,
            followedpost: {
                postid: post.id,
                type: post.type
            }
        });
    } catch (error) {
        console.log(error)
        next(error)
    }

})

router.put('/:id/unfollow', auth, async (req, res, next) => {

    try {        
        const profile=await Profile.findOne({user: req.user.id})
        const postId= await profile.followedposts.map(f=>{
            if(f.id.toString()===req.params.id){
                return f.postid
            }
        })
        if(!postId){
            throw new NotFoundError()
        }
        const post = await Post.findById(postId);
        if (!post) {
            throw new NotFoundError("Post not found")
        }
        const removeIndex=post.followed.map(f=>f.user.toString()).indexOf(req.user.id);
        post.followed.splice(removeIndex,1);
        // post.followed=post.followed.filter(f => f.user.toString()!== req.user.id.toString());
        await post.save()
        
        if(!profile){
            throw new FobiddenError("You don't have a profile for this action")
        }
        // The id in the params is the id of each stored followed post, not the post id
        profile.followedposts=profile.followedposts.filter(f=> f.id.toString()!==req.params.id)
        await profile.save()
        
        res.json({
            user: req.user.id,
            postId: post.id
        });
    } catch (error) {
        console.log(error)
        next(error)
    }

})

module.exports = router;