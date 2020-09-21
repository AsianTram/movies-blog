const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const PostSchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: String,
        required: true
    },
    picture:{
        type: String
    }, 
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['movie', 'celebrity', 'all'],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comments: [{
        user: {
            type: mongoose.Types.ObjectId, 
            ref: "User",
            required: true
        },
        name: {
            type: String,
            required: true
        },
        avatar: {
            type: String
        },
        value: {
            type: String,
            required: true
        }
    }],
    likes: [{
        user:{ 
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        },
        name: {
            type: String,
            required: true

        },
        avatar: {
            type: String
        }
    }],
    followed:[{
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
    }
    }],
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports= Post= mongoose.model("post", PostSchema)