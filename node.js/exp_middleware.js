const express = require('express')
const app = express()
const port = 8000

const reqFilter=(req,res,next)=>{
    if(!req.query.uid){
        res.send("please provide user id")
    }
    else if(req.query.uid !='shruti'){
        res.send("invalid")
    }else{
        next()
    }
}

app.use(reqFilter)
app.get('/', (req, res) => {
    res.send("<h2 style='color: red';>Learning Middleware</h2>")
  })
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/About.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})
app.listen(port, () => console.log("Sever started"))