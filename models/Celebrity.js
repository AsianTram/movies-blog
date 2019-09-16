const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const CelebritySchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: user
    },
    name: {
        type: String,
        required: true
    },
    
    content: [{text: Boolean, value: String}],
    comment: [{user: {type: mongoose.Types.ObjectId, ref: user},
         value: String}],
    followed:{
        type: [mongoose.Types.ObjectId]
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports= Celebrity= mongoose.model("celebrity", CelebritySchema)