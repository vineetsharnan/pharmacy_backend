const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello flutter developer you are going to be fullstack!");
});

app.listen(3000,()=>{
    console.log(
        "Server running on port 3000"
    );
})