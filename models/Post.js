import mongoose from 'mongoose';
const Schema =mongoose.Schema;

const PostSchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: string,
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
        type: string,
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
            type: string,
            required: true
        },
        avatar: {
            type: string
        },
        value: {
            type: string,
            required: true
        }
    }],
    likes: [{
        user:{ 
            type: [mongoose.Types.ObjectId],
            ref: "User",
            required: true
        },
        name: {
            type: string,
            required: true

        },
        avatar: {
            type: string
        }
    }],
    followed:[{
        user: {
            type: [mongoose.Types.ObjectId],
            ref: 'User',
            required: true
    }
    }],
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports= Movie= mongoose.model("post", PostSchema)