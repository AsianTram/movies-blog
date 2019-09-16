const mongoose= require('mongoose');
const config = require('config');

const dbConnect= async ()=>  {
    const res= await mongoose.connect(config.get('mongoUrl'),{ useNewUrlParser: true, useUnifiedTopology: true });
    if(res){
        console.log("Connect to mongoose");
    }
    else{
        console.log("Failed to connect to mongoose");
    }
}

module.exports= dbConnect;