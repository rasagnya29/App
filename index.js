const express= require('express');
const mongoose= require('mongoose');

const app=express();

const port=8000;
const url= "mongodb://localhost:0.0.0.0/0";

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const employeerouter= require("./routes/employees");
app.use('/employees',employeerouter)



app.listen(port, () =>{
    console.log('Server started');
})
