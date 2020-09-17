import express from 'express';

import dbConnect from "./config/dbConnect.js";
import UserRoute from "./routes/api/user.js"

const app= express();

app.use(express.json());

const PORT= process.env.PORT || 5000;

dbConnect();

app.get("/", (req,res)=>{
    res.send("Hello World");
})
app.use("/api/user", UserRoute);
// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/post", require("./routes/api/post"));


app.listen(PORT, ()=> console.log("Server running in port "+ PORT));

