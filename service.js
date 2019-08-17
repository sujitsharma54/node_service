const express=require("express");
const app=express();

app.get("/posts",(req,res)=>{
res.send("hello world")
})


app.listen(3000,()=>{
    console.log("server is running on prot 3001");
})