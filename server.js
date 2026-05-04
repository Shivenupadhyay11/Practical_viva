const express=require('express');
const app=express;
const port=3000;

app.use('express.json');

app.get("./" ,(req ,res) =>{
      res.send("responce send successfully")

});
const PORT=process.env.port|| 3000;
app.listen(PORT ,()=>{
    console.log("port is running on this server")
})
