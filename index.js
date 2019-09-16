const express= require('express');
const app= express();
const dbConnect= require("./config/dbConnect");

app.use(express.json());

const PORT= process.env.PORT || 5000;

dbConnect();

app.get("/", (req,res)=>{
    res.send("Hello World");
})
app.use("/api/user", require("./routes/api/user"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/movie", require("./routes/api/movie"));
app.use("/api/celebrity", require("./routes/api/celebrity"));


app.listen(PORT, ()=> console.log("Server running in port "+ PORT));

