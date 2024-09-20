import express from "express";


const app =express();

app.get("/",(res,req)=>{
    res.setEncoding("Server is runing");
})

app.listen(4000,()=>{
    console.log("Server is runing on port 4000")
});