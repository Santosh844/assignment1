const express = require("express")
const app = express();

const books = require("./books.json")

app.get("",(req,res)=>{
    return res.send("Hello")
})

app.get("/books",(req,res)=>{
    return res.send({books:books})
})



app.listen(5555,function(){
    console.log("listening to port 5555")
})