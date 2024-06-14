const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("This is landing page");
});

const port=5000;
app.listen(port,()=>{
    console.log("Server is running");
});