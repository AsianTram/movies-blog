const express = require('express');

const dbConnect = require("./config/dbConnect.js");

const apiErrorHandler= require("./middleware/apiErrorHandler")


const app= express();

app.use(express.json());

const PORT= process.env.PORT || 5000;

dbConnect();


app.use("/api/user", require("./routes/api/user.js"));
// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/post", require("./routes/api/post"));

app.use(apiErrorHandler);

const server =app.listen(PORT, ()=> console.log("Server running in port "+ PORT));

module.exports=server
