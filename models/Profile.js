const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const ProfileSchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
        ref: "User"
    },
    bio: {
        type: String
    },
    socialmedia:{
        facebook: String,
        instagram: String,
        linkedin: String,
        website: String,
        youtube: String

    },
    posts: {
        type: Array
    },
    followedposts:{
        type: Array
    },
    points:{
        type: Number
    }
})

module.exports= Profile= mongoose.model("profile", ProfileSchema)