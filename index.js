const express = require('express');

const dbConnect = require("./config/dbConnect.js");

const apiErrorHandler= require("./middleware/apiErrorHandler")


const app= express();

app.use(express.json());

const PORT= process.env.PORT || 5000;

dbConnect();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Access-Control-Allow-Headers', ['Authorization', 'Content-Type'])
  next()
})

app.use("/api/user", require("./routes/api/user.js"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));

app.use(apiErrorHandler);


const server =app.listen(PORT, ()=> console.log("Server running in port "+ PORT));

module.exports=server
