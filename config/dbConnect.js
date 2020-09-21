const mongoose = require('mongoose');
const config = require('config');

const dbConnect= async ()=>  {
    const res= await mongoose.connect(config.get('mongoUrl'),{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
    if(res){
        console.log("Connect to mongoose");
    }
    else{
        console.log("Failed to connect to mongoose");
        process.exit(1)
    }
}

module.exports= dbConnect