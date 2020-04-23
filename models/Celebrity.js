const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const CelebritySchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    picture:{
        type: String
    }, 
    name: {
        type: String,
        required: true
    },
    
    content: {
        type: String,
        required: true
    },
    comment: [{user: {type: mongoose.Types.ObjectId, ref: "User"},
         value: String}],
    likes:[{user:{
        type: [mongoose.Types.ObjectId]

    }
    }],
    followed:[{user:{
        type: [mongoose.Types.ObjectId]

    }
    }],
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports= Celebrity= mongoose.model("celebrity", CelebritySchema)